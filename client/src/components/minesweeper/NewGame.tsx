import { faArrowLeft, faArrowUpRightFromSquare, faPlay } from '@fortawesome/free-solid-svg-icons'
import { TabProps } from '../../types'
import { Button, Input } from '../basis'
import Container from './Container'

const NewGame = ({ roomHandler } : TabProps) => {
    const { room } = roomHandler

    if (room) {
        return (
            <Container>
                <div className='d-flex flex-column gap-3'>
                    <Input
                        label={'Id Game'.toUpperCase()}
                        value={room.id}
                        isReadOnly={true}
                    />

                    <div className='card'>
                        <div className='card-header'>MEMBERS</div>
                        {
                            room.members.map(member =>
                                <div
                                    key={member.id}
                                    //className={`p-2 ${index !== members.length - 1 ? 'border-bottom' : ''}`}
                                    className='p-2'
                                >
                                    {member.username}
                                </div>
                            )
                        }
                    </div>

                    <Button
                        className='btn-primary'
                        text={'Share'.toUpperCase()}
                        icon={faArrowUpRightFromSquare}
                    />

                    <Button
                        className='btn-danger'
                        text={'Start Game'.toUpperCase()}
                        icon={faPlay}
                        handleOnClick={roomHandler.handleStartGame}

                    />

                    <Button
                        className='btn-light'
                        text={'Go Back'.toUpperCase()}
                        icon={faArrowLeft}
                        handleOnClick={roomHandler.handleGoBack}
                    />
                </div>
            </Container>
        )
    }
}

export default NewGame