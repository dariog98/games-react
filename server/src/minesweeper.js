import { MINE, generateGrid } from '../minesweeper.js'

const isAllMembersLocked = (members) => {
    const arrayMembers = Object.keys(members).map(memberId => members[memberId])

    for (let index = 0; index < arrayMembers.length; index++) {
        const members = arrayMembers[index]
        if (!members?.lock) return false
    }

    return true
}

const minesweeperHandler = (io, socket, rooms) => {
    socket.on('mine:new', (data) => {
        const { user, room: { id: roomId } } = data
        const { id, username, color } = user
        
        const room = {
            id: roomId,
            members: {},
            grid: generateGrid(8, 10, 50),
            actions: []
        }

        room.members[user.id] = { id, username, color, points: 0 }
        rooms.push(room)
        socket.join(room.id)

        io.to(room.id).emit('mine:update', { id: room.id, members: Object.keys(room.members).map(memberId => room.members[memberId]) })
    })

    socket.on('mine:join', (data) => {
        const { user, room: { id: roomId } } = data
        const { id, username, color } = user

        const roomIndex = rooms.findIndex(room => room.id === roomId)
        const room = rooms[roomIndex]
        
        room.members[user.id] = { id, username, color, points: 0 }
        rooms[roomIndex] = room
        socket.join(room.id)

        io.to(room.id).emit('mine:update', { id: room.id, members: Object.keys(room.members).map(memberId => room.members[memberId]) })
    })

    socket.on('mine:start', (data) => {
        const { room: { id: roomId } } = data

        const roomIndex = rooms.findIndex(room => room.id === roomId)
        const room = rooms[roomIndex]

        if (Object.keys(room.members).length < 2) return
        
        io.to(room.id).emit('mine:start', { ...room, members: Object.keys(room.members).map(memberId => room.members[memberId]) })
    })

    socket.on('mine:select_tile', (data) => {
        const { user, room: { id: roomId }, tilePos } = data

        const roomIndex = rooms.findIndex(room => room.id === roomId)
        const room = rooms[roomIndex]
        const tile = room.grid[tilePos[0]][tilePos[1]]
        
        if (user.lock) return
        if (tile.active) return

        room.actions.push({ tile: tilePos, user })
        room.members[user.id].lock = true

        if (isAllMembersLocked(room.members)) {
            while(room.actions.length) {
                const action = room.actions.pop()
                const user = action.user
                const tile = room.grid[action.tile[0]][action.tile[1]]

                tile.value === MINE ? room.members[user.id].points += -10 : room.members[user.id].points += 20
                room.members[user.id].lock = false
                room.grid[action.tile[0]][action.tile[1]].active = true
            }
        }

        io.to(room.id).emit('mine:update', { ...room, members: Object.keys(room.members).map(memberId => room.members[memberId]) })
    })
}

export default minesweeperHandler