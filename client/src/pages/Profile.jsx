import { Avatar, Button, Container } from '../components/basis'
import { useUserContext } from '../components/providers/UserProvider'
import { UserForm, UserStats } from '../components/profile'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from '../constants/colors'

const Profile = () => {
    const { user, updateUserColor } = useUserContext()
    return (
        <Container>
            <div className='d-flex flex-column align-items-center gap-3'>

                <div className='card bg-body-tertiary' style={{ maxWidth: '700px' }}>
                    <div className='card-body p-5'>
                        <div className='d-grid gap-5' style={{ gridTemplateColumns: '1fr 1fr' }}>
                            <div className='d-flex flex-column justify-content-center align-items-center gap-3'>
                                <Avatar user={user} size='long'/>

                                <div className='d-flex gap-2'>
                                    {
                                        COLORS.map(color =>
                                            <div
                                                key={color}
                                                onClick={() => updateUserColor(color)}
                                                className='rounded-3 cursor-pointer'
                                                style={{
                                                    width: '2rem',
                                                    height: '2rem',
                                                    background: color,
                                                    borderWidth: '3px',
                                                    borderStyle: 'solid',
                                                    borderColor: user.color === color ? '#fff' : '#00000000'
                                                }}>
                                            </div>
                                        )
                                    }
                                </div>
                                <UserStats user={user}/>
                            </div>
                            <UserForm/>
                        </div>
                    </div>
                </div>

                <div>
                    <Button
                        className='btn-light'
                        text='Go back'
                        icon={faArrowLeft}
                    />
                </div>

            </div>
        </Container>
    )
}

export default Profile