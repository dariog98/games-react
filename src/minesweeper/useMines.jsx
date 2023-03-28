import { useEffect, useState } from 'react'
import { generateGrid, getNeighbors, MINE, MODES, BUTTONSTATE } from './minefunctions'
import { clickSound, failSound, gameoverSound } from './sounds'

const useMines = () => {
    const [gameMode, setGameMode] = useState(0)
    const [isEnded, setEnded] = useState(false)

    const [grid, setGrid] = useState([])
    const [buttonGrid, setButtonGrid] = useState([])

    const [gameTimer, setGameTimer] = useState(0)

    const startGame = () => {
        const mode = MODES[gameMode]
        setGrid(generateGrid(mode.rows, mode.columns, mode.mines))
        setButtonGrid(Array.from(Array(mode.rows), () => Array.from(Array(mode.columns), () => 0)))
        setEnded(false)
    }

    const isGameOver = () => {
        if (grid.length) {
            for (let row = 0; row < grid.length; row++) {
                for (let column = 0; column < grid[row].length; column++) {
                    if (grid[row][column] !== MINE && buttonGrid[row][column] !== BUTTONSTATE.active) {
                        return false
                    }
                }
            }
            return true
        } else {
            return false
        }
    }

    const resolveNeighbors = (bgrid, row, column) => {
        const mode = MODES[gameMode]
        const neighbors = getNeighbors(row, column, mode.rows - 1, mode.columns - 1)
        neighbors.forEach(mine => {
            if (grid[mine.row][mine.column] === 0 && !bgrid[mine.row][mine.column]) {
                bgrid[mine.row][mine.column] = BUTTONSTATE.active
                resolveNeighbors(bgrid, mine.row, mine.column)
            } else {
                bgrid[mine.row][mine.column] = 1
            }
        })
    }

    const handleMine = (row, column) => {
        if (isEnded) {
            return
        }

        if (buttonGrid[row][column] === BUTTONSTATE.active || buttonGrid[row][column] === BUTTONSTATE.flag) {
            return
        }

        clickSound.play()
        const tempButtonGrid = buttonGrid.map(mine => mine)
        // Handle Dead
        if (grid[row][column] === MINE) {
            setEnded(true)
            /*
            grid.forEach((row, rowIndex) => {
                row.forEach((column, columnIndex) => {
                    if (column === MINE) {
                        tempButtonGrid[rowIndex][columnIndex] = BUTTONSTATE.mine
                    }
                })
            })
            */
            failSound.play()
        }

        tempButtonGrid[row][column] = BUTTONSTATE.active
        if (grid[row][column] === 0) {
            resolveNeighbors(tempButtonGrid, row, column)
        }
        setButtonGrid(tempButtonGrid)
    }

    const toggleFlag = (row, column) => {
        if (isEnded) {
            return
        }

        if (buttonGrid[row][column] === BUTTONSTATE.active) {
            return
        }

        const tempButtonGrid = buttonGrid.map(mine => mine)
        if (tempButtonGrid[row][column] === BUTTONSTATE.inactive) {
            tempButtonGrid[row][column] = BUTTONSTATE.flag
        } else if (tempButtonGrid[row][column] === BUTTONSTATE.flag) {
            tempButtonGrid[row][column] = BUTTONSTATE.inactive
        }
        clickSound.play()
        setButtonGrid(tempButtonGrid)
    }

    useEffect(() => {
        if (isGameOver()) {
            gameoverSound.play()
            setEnded(true)
        }
    }, [buttonGrid])

    useEffect(() => {
        startGame()
    }, [gameMode])

    const handleTimer = () => {
        setGameTimer(gameTimer => gameTimer + 1)
        if (!isGameOver()) {
            setTimeout(() => {
                handleTimer()
            }, 1000)
        }
    }

    const getRemainingMines = () => {
        const totalFlags = buttonGrid.reduce((accumulator, currentRow) => accumulator + currentRow.filter(column => column === BUTTONSTATE.flag).length, 0)
        return MODES[gameMode].mines - totalFlags
    }

    return {
        gameMode,
        handleGameMode: setGameMode,
        startGame,
        gameTimer,
        gameGrid: grid,
        buttonGrid,
        handleMine,
        toggleFlag,
        getRemainingMines,
        isEnded
    }
}

export default useMines
