const MINE = 'M'

const MODES = [
    { rows:  8, columns:  8, mines: 10, description: 'beginner' },
    { rows: 16, columns: 16, mines: 40, description: 'intermediate' },
    { rows: 16, columns: 30, mines: 99, description: 'expert' },
]

const BUTTONSTATE = {
    inactive: 0,
    active: 1,
    mine: 2,
    flag: 3
}

const getNeighbors = (row, column, maxRows, maxColumns) => {
    const neighbors = []

    // UP
    if (row > 0) {
        neighbors.push({ row: row - 1, column })
    }
    // DOWN
    if (row < maxRows) {
        neighbors.push({ row: row + 1, column })
    }
    // LEFT
    if (column > 0) {
        neighbors.push({ row, column: column - 1 })
    }
    // RIGHT
    if (column < maxColumns) {
        neighbors.push({ row, column: column + 1 })
    }

    // UPLEFT
    if (row > 0 && column > 0) {
        neighbors.push({ row: row - 1, column: column - 1 })
    }
    // UPRIGHT
    if (row > 0 && column < maxColumns) {
        neighbors.push({ row: row - 1, column: column + 1 })
    }
    // DOWNLEFT
    if (row < maxRows && column > 0) {
        neighbors.push({ row: row + 1, column: column - 1 })
    }
    // DOWNRIGHT
    if (row < maxRows && column < maxColumns) {
        neighbors.push({ row: row + 1, column: column + 1 })
    }

    return neighbors
}

const generateGrid = (rows, columns, maxMines) => {
    const mines = []
    const grid = Array.from(Array(rows), () => Array.from(Array(columns), () => 0))

    while (mines.length < maxMines) {
        const row = Math.floor(Math.random() * ((rows - 1) - 0) + 0)
        const column = Math.floor(Math.random() * ((columns - 1) - 0) + 0)

        if (grid[row][column] === MINE) {
            continue
        }

        grid[row][column] = MINE
        mines.push({ row, column })
    }

    mines.forEach(mine => {
        const neighbors = getNeighbors(mine.row, mine.column, rows - 1, columns - 1)
        neighbors.forEach(neighbor => {
            if (grid[neighbor.row][neighbor.column] !== MINE) {
                grid[neighbor.row][neighbor.column] += 1
            }
        })
    })

    return grid
}

export { generateGrid, getNeighbors, MINE, MODES, BUTTONSTATE }
