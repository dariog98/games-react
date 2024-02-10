import { useEffect, useState } from 'react'
import { useUserContext } from '../components/providers/UserProvider'
import { socket } from '../constants/socket'
import { useForm } from 'react-hook-form'
import MINE_MODES from '../constants/mineModes'

const useRoom = () => {
    const { user } = useUserContext()
    const [tab, setTab] = useState(MINE_MODES.Main)
    const [room, setRoom] = useState(undefined)
    const form = useForm()

    const newGame = () => {
        socket.emit('mine:new', { user, room: { id: Date.now().toString(32) } })
    }

    const joinGame = (roomId : string) => {
        socket.emit('mine:join', { user, room: { id: roomId } })
    }

    const startGame = () => {
        socket.emit('mine:start',  { room })
    }

    const selectTile = (row : number, column : number) => {
        socket.emit('mine:select_tile', { user, room, tilePos: [row, column] })
    }

    const handleConfirm = (data) => {
        const { roomId } = data
        joinGame(roomId)
    }

    const handleNewGame = () => {
        newGame()
        setTab(MINE_MODES.NewGame)
    }

    const handleJoinGame = () => {
        setTab(MINE_MODES.JoinGame)
    }

    const handleStartGame = () => {
        startGame()
    }

    const handleGoBack = () => {
        setTab(MINE_MODES.Main)
    }

    const handleSelectTile = (row : number, column : number) => {
        selectTile(row, column)
    }

    useEffect(() => {
        if (room?.id && (tab === MINE_MODES.Main || tab === MINE_MODES.JoinGame)) setTab(MINE_MODES.NewGame)
    }, [room])

    useEffect(() => {
        socket.on('mine:update', (room) => {
            setRoom(room)
        })
        socket.on('mine:start', (room) => {
            setRoom(room)
            setTab(MINE_MODES.Game)
        })
    }, [])

    return {
        currentTab: tab,
        room,
        handleNewGame,
        handleJoinGame,
        handleGoBack,
        handleStartGame,
        handleSelectTile,
        form: { ...form, handleSubmit: form.handleSubmit(handleConfirm) }
    }
}

export default useRoom