import { Box, Button, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const iconSize = { width: '1.5rem', height: '1.5rem' }

const Navbar = ({ children }) => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' gap='1rem' w='100%' px='1rem' h='4rem'>
            <Box display='flex' gap='1rem'>
                {children}
            </Box>
            <Box>
                <Button w='3rem' h='3rem' m='0' p='0' onClick={toggleColorMode}>
                    {colorMode === 'light' ? <SunIcon style={iconSize}/> : <MoonIcon style={iconSize}/>}
                </Button>
            </Box>
        </Box>
    )
}

export default Navbar
