import { faGamepad, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../basis'
import { TabProps } from '../../types'
import Container from './Container'

const Main = ({ roomHandler } : TabProps) => {
    return (
        <Container>
            <div className='d-flex flex-column gap-3'>
                <Button
                    className='btn-primary'
                    text={'Create New Game'.toUpperCase()}
                    icon={faGamepad}
                    handleOnClick={roomHandler.handleNewGame}
                />
                <Button
                    className='btn-success'
                    text={'Join Game'.toUpperCase()}
                    icon={faUserPlus}
                    handleOnClick={roomHandler.handleJoinGame}
                />
            </div>
        </Container>
    )
}

export default Main