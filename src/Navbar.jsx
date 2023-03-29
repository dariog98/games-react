import { Box, Text, Button, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const iconSize = { width: '1.5rem', height: '1.5rem' }

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='center' gap='1rem' w='100%' px='1rem' h='4rem'>
            <Box display='flex' flexWrap='wrap' gap='1rem'>
                <Text fontWeight='bold' fontSize='2xl'>GAMES</Text>
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
