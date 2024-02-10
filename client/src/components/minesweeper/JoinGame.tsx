import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Button, Input } from '../basis'
import { TabProps } from '../../types'
import Container from './Container'

const JoinGame = ({ roomHandler } : TabProps) => {
    return (
        <Container>
            <div className='d-flex flex-column gap-3'>
                <Input
                    label={'Id Game'.toUpperCase()}
                    form={roomHandler.form}
                    name='roomId'
                />

                <Button
                    className='btn-danger'
                    text={'Join'.toUpperCase()}
                    handleOnClick={roomHandler.form.handleSubmit}
                    //icon={faArrowUpRightFromSquare}
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

export default JoinGame