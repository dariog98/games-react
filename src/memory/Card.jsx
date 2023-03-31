import { Box, Text, useColorModeValue, useColorMode } from '@chakra-ui/react'

const Card = ({ x, y, value, isActived, handleCard }) => {
    const { colorMode } = useColorMode()

    return (
        <Box
            className={`card ${isActived ? 'active' : ''}`}
            onClick={handleCard}
            gridColumn={x} gridRow={y}
        >
            <Box
                background={useColorModeValue('white', 'gray.800')}
                borderRadius='0.5rem'
                borderWidth='0.15rem'
                borderColor={useColorModeValue('black', 'whitealpha300')}
                display='flex'
                position='absolute'
                w='128px' h='160px'
            >
                <Box
                    background={`repeating-linear-gradient(45deg, ${colorMode === 'light' ? 'black' : '#ffffff29'}, ${colorMode === 'light' ? 'black' : '#ffffff29'} 5px, transparent 5px, transparent 20px)`}
                    borderRadius='0.5rem'
                    w='100%'
                    h='100%'
                />
            </Box>
            <Box
                background={colorMode === 'light' ? '#ffffff' : '#1A202C'}
                borderRadius='0.5rem'
                borderWidth='0.15rem'
                borderColor={useColorModeValue('black', 'whitealpha300')}
                display='flex'
                justifyContent='center'
                alignItems='center'
                position='absolute'
                w='128px' h='160px'
                transform='rotateY(180deg) translateZ(1px)'
            >
                <Text fontSize="3rem">{value}</Text>
            </Box>
        </Box>
    )
}

export default Card
