import { createBrowserRouter } from 'react-router-dom'
import { Navbar } from './components/basis'
import { Profile, Minesweeper } from './pages'

const Router = createBrowserRouter([
    {
        path: '/profile',
        element: (
            <>
                <Navbar/>
                <Profile/>
            </>
        ),
    },
    {
        path: '/minesweeper',
        element: (
            <>
                <Navbar/>
                <Minesweeper/>
            </>
        ),
    }
])

export default Router