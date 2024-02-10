const UserStats = ({ user }) => {
    return (
        <div className='d-flex flex-column gap-2' style={{ width: '200px' }}>
            <div className='d-flex justify-content-between gap-3'>
                <span className='text-uppercase'>Level</span>
                <span>{user.level}</span>
            </div>
            <div className='d-flex justify-content-between gap-3'>
                <span className='text-uppercase'>Experience</span>
                <span>{user.experience}</span>
            </div>
            <div className='d-flex justify-content-between gap-3'>
                <span className='text-uppercase'>Games</span>
                <span>{user.games}</span>
            </div>
            <div className='d-flex justify-content-between gap-3'>
                <span className='text-uppercase'>Victories</span>
                <span>{user.victories}</span>
            </div>
            <div className='d-flex justify-content-between gap-3'>
                <span className='text-uppercase'>Defeats</span>
                <span>{user.defeats}</span>
            </div>
        </div>
    )
}

export default UserStats