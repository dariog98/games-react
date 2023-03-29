import { Box } from '@chakra-ui/react'
import MemoryGame from './MemoryGame'
import MineSweeper from './minesweeper/MineSweeper'
import Navbar from './Navbar'

const App = () => {
    return (
        <Box display='flex' flexDirection='column' h='100vh'>
            <Navbar/>
            <MineSweeper/>
        </Box>
    )
}

export default App
