import { Link } from 'react-router-dom'
import { useUserContext } from '../providers/UserProvider'
import Avatar from './Avatar'

const Navbar = () => {
    const { user } = useUserContext()

    return (
        <div className='d-flex justify-content-between align-items-center py-2 px-4 bg-body-tertiary'>
            <div>
                <div className='text-uppercase fs-2'>Games</div>
            </div>
            <Link to='/profile' className='d-flex gap-2 align-items-center cursor-pointer'>
                <Avatar user={user} size='small'/>
                <div className='d-flex flex-column align-items-end' style={{ lineHeight: 1 }}>
                    <div>{user.username}</div>
                    <div>{`Lv. ${user.level}`}</div>
                </div>
            </Link>
        </div>
    )
}

export default Navbar