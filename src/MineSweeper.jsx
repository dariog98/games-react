import { Box, Text, Button, InputGroup, InputLeftAddon, Input } from '@chakra-ui/react'
import { ArrowPathIcon } from '@heroicons/react/24/solid'
import Navbar from './Navbar'
import useMines from './useMines'
import ButtonMine from './ButtonMine'
import { MODES } from './minefunctions'
import { GiUnlitBomb } from '@react-icons/all-files/gi/GiUnlitBomb'

const MineSweeper = () => {
    const { startGame, gameGrid, buttonGrid, handleMine, handleGameMode, toggleFlag, getRemainingMines, isEnded } = useMines()

    return (
        <>
            <Navbar>
                {
                    MODES.map((mode, index) =>
                        <Button key={index} h='3rem' onClick={() => handleGameMode(index)}>
                            <Text>{mode.description}</Text>
                        </Button>
                    )
                }
                <Button w='3rem' h='3rem' m='0' p='0' onClick={startGame}>
                    <ArrowPathIcon style={{ width: '1.5rem', height: '1.5rem' }}/>
                </Button>

                <Box display='flex' borderWidth='1px'borderRadius='0.375rem'>
                    <Box display='flex' justifyContent='center' alignItems='center' w='3rem'><GiUnlitBomb style={{ height: '2rem', width: '2rem' }}/></Box>
                    <Box display='flex' justifyContent='center' alignItems='center' w='3rem' as='b'>{getRemainingMines()}</Box>
                </Box>
            </Navbar>

            <Box as='main' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3px' h='calc(100vh - 4rem)'>
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
