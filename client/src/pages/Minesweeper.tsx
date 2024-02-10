import {  Container } from '../components/basis'
import { Main, NewGame, JoinGame, Game } from '../components/minesweeper'
import { useRoom } from '../hooks'

const TABS = {
    1: Main,
    2: NewGame,
    3: JoinGame,
    4: Game
}

const Minesweeper = () => {
    const roomHandler = useRoom()
    const CurrentTab : React.JSX.Element = TABS[roomHandler.currentTab]

    return (
        <Container>
            <CurrentTab roomHandler={roomHandler}/>
        </Container>
    )
}

export default Minesweeper