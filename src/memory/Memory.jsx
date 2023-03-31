import { Box, Text, Button } from '@chakra-ui/react'
import { MODES } from './memoryconstants'
import useCards from './useCards'
import Card from './Card'

const MemoryGame = () => {
    const { desk, startGame, isEnded, handleCard, gameMode, handleGameMode } = useCards()

    if (isEnded()) {
        return (
            <Box flex='1 0 auto' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3'>

                <Box display='flex' justifyContent='center' alignItems='center'w='100%'>
                    {
                        MODES.map((mode, index) =>
                            <Button key={index} h='3rem' borderRadius='0' colorScheme={index === gameMode ? 'teal' : 'gray'} onClick={() => handleGameMode(index)}>
                                <Text>{mode.description}</Text>
                            </Button>
                        )
                    }
                </Box>
                <Button onClick={startGame} colorScheme='orange'>New Game</Button>
            </Box>
        )
    }

    return (
        <>
            <Box flex='1 0 auto' display='flex' justifyContent='center' alignItems='center'>
                <Box as='main' display='grid' flexDirection='column' gap='4rem' gridTemplateColumns={`repeat(${MODES[gameMode].columns}, 1fr)`} gridTemplateRows={`repeat(${MODES[gameMode].rows}, 1fr)`}>
                    {
                        desk.map((card, cardIndex) => {
                            return card
                                ? <Card
                                    key={cardIndex}
                                    value={card.value}
                                    isActived={card.actived}
                                    handleCard={() => handleCard(cardIndex)}
                                    x={cardIndex % MODES[gameMode].columns + 1}
                                    y={cardIndex % MODES[gameMode].rows + 1}
                                />
                                : undefined
                        })
                    }
                </Box>
            </Box>
        </>
    )
}

export default MemoryGame
