import { Routes } from '../Routes'
import memoryDark from './assets/memory-dark.png'
import memoryLight from './assets/memory-light.png'
import minesweeperDark from './assets/minesweeper-dark.png'
import minesweeperLight from './assets/minesweeper-light.png'

const games = [
    {
        description: 'Memory',
        images: { light: memoryLight, dark: memoryDark },
        url: Routes.Memory
    },
    {
        description: 'Minesweeper',
        images: { light: minesweeperLight, dark: minesweeperDark },
        url: Routes.Minesweeper
    }
]

export { games }
