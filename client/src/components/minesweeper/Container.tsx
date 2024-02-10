const Container = ({ children }) => {
    return (
        <div className='card bg-body-tertiary'>
            <div className='card-body'>
                <div className='d-grid' style={{ gridTemplateColumns: '2fr 1fr'}}>
                    <div></div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Container