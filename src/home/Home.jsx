import { Box, Image, Text, useColorMode } from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'
import { games } from './games'

const Home = () => {
    const { colorMode } = useColorMode()

    return (
        <Box flex='1 0 auto' display='flex' justifyContent='center' alignItems='center' gap='1rem' flexWrap='wrap' p='1rem'>
            {
                games.map((game, gameIndex) =>
                    <Box
                        key={gameIndex}
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        borderWidth='0.15rem'
                        borderRadius='1rem'
                        as={ReachLink} to={game.url}
                    >
                        <Image src={game.images[colorMode]} w='400px' h='300px' objectFit='contain' borderTopLeftRadius='inherit' borderTopRightRadius='inherit'></Image>
                        <Text paddingBottom='1rem' as='b'>{game.description}</Text>
                    </Box>
                )
            }
        </Box>
    )
}

export default Home
