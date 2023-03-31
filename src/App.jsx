import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { Routes } from './Routes'
import Navbar from './Navbar'
import MemoryGame from './memory/Memory'
import MineSweeper from './minesweeper/MineSweeper'
import Home from './home/Home'

const router = createBrowserRouter([
    {
        path: Routes.Home,
        element: <><Navbar/><Home/></>,
    },
    {
        path: Routes.Memory,
        element: <><Navbar/><MemoryGame/></>,
    },
    {
        path: Routes.Minesweeper,
        element: <><Navbar/><MineSweeper/></>,
    },
])

const App = () => {
    return (
        <Box display='flex' flexDirection='column' h='100vh'>
            <RouterProvider router={router}/>
        </Box>
    )
}

export default App
