import { FlagIcon } from '@heroicons/react/24/solid'
import { Box, Text } from '@chakra-ui/react'
import { MINE, BUTTONSTATE } from './minefunctions'
import { GiUnlitBomb } from '@react-icons/all-files/gi/GiUnlitBomb'

const colors = {
    1: 'cyan.500',
    2: 'green.500',
    3: 'yellow.500',
    4: 'purple.500',
    5: 'pink.500',
    6: 'red.500',
    7: 'orange.500',
}

const iconSize = { width: '1rem', height: '1rem' }

const ButtonMine = ({ value, row, column, index, buttonGrid, handleMine, handleFlag, isEnded }) => {
    const toggleFlag = (event, row, column) => {
        event.preventDefault()
        handleFlag(row, column)
    }

    return (
        <Box
            w='36px'
            h='36px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            borderWidth={buttonGrid ? '0.15rem' : ''}
            borderRadius='0.5rem'
            style={{ cursor: 'pointer' }}
            background={buttonGrid === BUTTONSTATE.active ? '' : index % 2 ? 'red.400' : 'blue.400'}
            onClick={() => handleMine(row, column)}
            onContextMenu={(event) => toggleFlag(event, row, column)}
        >
            {
                <Box
                    as='b'
                    color={buttonGrid === BUTTONSTATE.active ? colors[value] : ''}
                    userSelect='none'
                >
                    {buttonGrid === BUTTONSTATE.active && value !== 0 && value !== MINE ? value : null}
                    {buttonGrid === BUTTONSTATE.flag ? <FlagIcon style={iconSize}/> : null}
                    {isEnded && value === MINE ? <GiUnlitBomb/> : null}
                </Box>
            }
        </Box>
    )
}

export default ButtonMine
