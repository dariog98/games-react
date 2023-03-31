import { Box, Text, Button, useColorMode } from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { Routes } from './Routes'

const iconSize = { width: '1.5rem', height: '1.5rem' }

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='center' gap='1rem' w='100%' px='1rem' minH='4rem'>
            <Box display='flex' flexWrap='wrap' gap='1rem'>
                <Text as={ReachLink} to={Routes.Home} fontWeight='bold' fontSize='2xl'>GAMES</Text>
            </Box>
            <Box>
                <Button w='3rem' h='3rem' onClick={toggleColorMode}>
                    {colorMode === 'light' ? <SunIcon style={iconSize}/> : <MoonIcon style={iconSize}/>}
                </Button>
            </Box>
        </Box>
    )
}

export default Navbar
