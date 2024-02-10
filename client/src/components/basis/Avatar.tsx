
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat, faFish, faKiwiBird, faOtter } from '@fortawesome/free-solid-svg-icons'

const SIZE = {
    micro: '2rem',
    small: '3rem',
    long: '6rem'
}

const TEXT_SIZE = {
    small: 'fs-5',
    long: 'fs-1'
}

const ICON_SIZE = {
    small: '1x',
    long: '3x'
}

const Avatar = ({ user, size }) => {
    
    const avatar = { width: SIZE[size], height: SIZE[size] }
    return (
        <div
            className='rounded-circle d-flex justify-content-center align-items-center'
            style={{ ...avatar, backgroundColor: user.color }}
        >
            {/*
            <span className={`text-uppercase ${TEXT_SIZE[size]}`}>{user.username.charAt(0)}</span>
            */}
            <FontAwesomeIcon icon={faFish} size={ICON_SIZE[size]}/>
        </div>
    )
}

export default Avatar