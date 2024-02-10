const Container = ({ children }) => {
    return (
        <div className='my-4'>
            <div className='container'>
                {children}
            </div>
        </div>
    )
}

export default Container