import { Box, Text, Button, useMediaQuery } from '@chakra-ui/react'
import { ArrowPathIcon } from '@heroicons/react/24/solid'
import useMines from './useMines'
import ButtonMine from './ButtonMine'
import { MODES } from './minefunctions'
import { GiUnlitBomb } from '@react-icons/all-files/gi/GiUnlitBomb'

const MineSweeper = () => {
    const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
    const { startGame, gameGrid, buttonGrid, handleMine, gameMode, handleGameMode, toggleFlag, getRemainingMines, isEnded } = useMines()

    return (
        <>
            <Box display='flex' flexWrap='wrap' justifyContent='center' alignItems='center' gap='1rem' w='100%' px='1rem' h='4rem'>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    {
                        MODES.map((mode, index) =>
                            <Button key={index} h='3rem' borderRadius='0' colorScheme={index === gameMode ? 'teal' : 'gray'} onClick={() => handleGameMode(index)}>
                                <Text>{isLargerThan650 ? mode.description : mode.description.charAt(0)}</Text>
                            </Button>
                        )
                    }
                </Box>

                <Button w='3rem' h='3rem' m='0' p='0' onClick={startGame}>
                    <ArrowPathIcon style={{ width: '1.5rem', height: '1.5rem' }}/>
                </Button>

                <Box display='flex' borderWidth='1px' borderRadius='0.375rem' h='3rem'>
                    <Box display='flex' justifyContent='center' alignItems='center' w='3rem'><GiUnlitBomb style={{ height: '1.75rem', width: '1.75rem' }}/></Box>
                    <Box display='flex' justifyContent='center' alignItems='center' w='3rem' as='b'>{getRemainingMines()}</Box>
                </Box>
            </Box>

            <Box as='main' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3px' flex='1 0 auto'>
                {
                    gameGrid.map((row, rowIndex) =>
                        <Box key={rowIndex} display='flex' gap='3px'>
                            {
                                row.map((column, columnIndex) =>
                                    <ButtonMine
                                        key={columnIndex + (row.length * rowIndex)}
                                        value={column}
                                        row={rowIndex}
                                        column={columnIndex}
                                        index={columnIndex + (row.length * rowIndex) + rowIndex}
                                        handleMine={handleMine}
                                        handleFlag={toggleFlag}
                                        buttonGrid={buttonGrid[rowIndex][columnIndex]}
                                        isEnded={isEnded}
                                    />
                                )
                            }
                        </Box>
                    )
                }
            </Box>
        </>
    )
}

export default MineSweeper
