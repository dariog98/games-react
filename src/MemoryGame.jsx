import { Box, Text, Button, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { useState } from 'react'
import deckCards from './database/cards'

const Card = ({ x, y, value, isActived, handleActive }) => {
    const { colorMode } = useColorMode()
    return (
        <Box className={`card ${isActived ? 'active' : ''}`} onClick={handleActive} gridColumn={x} gridRow={y}>
            <Box background={useColorModeValue('white', 'gray.800')} borderRadius='0.5rem' borderWidth='0.15rem' display='flex' position='absolute' w='128px' h='160px'>
                <Box
                    background={`repeating-linear-gradient(45deg, ${colorMode === 'light' ? '#1A202C' : '#ffffff'}, ${colorMode === 'light' ? '#1A202C' : '#ffffff'} 5px, ${colorMode === 'light' ? '#ffffff' : '#1A202C'} 5px, ${colorMode === 'light' ? '#ffffff' : '#1A202C'} 20px)`}
                    borderRadius='0.5rem'
                    w='100%'
                    h='100%'
                />
            </Box>
            <Box background={colorMode === 'light' ? '#ffffff' : '#1A202C'} borderRadius='0.5rem' display='flex' position='absolute' w='128px' h='160px' borderWidth='0.15rem' justifyContent='center' alignItems='center' transform='rotateY(180deg) translateZ(1px)'>
                <Text fontSize="3rem">{value}</Text>
            </Box>
        </Box>
    )
}

const MemoryGame = () => {
    const [cards, setCards] = useState([])
    const [currentCards, setCurrentCards] = useState([])

    const isEnded = () => {
        for (let index = 0; index < cards.length; index++) {
            if (cards[index]) {
                return false
            }
        }
        return true
    }

    const createGame = () => {
        const deck = [...deckCards, ...deckCards].map((card, index) => { return { id: index, value: card.value, actived: false } }).sort((a, b) => 0.5 - Math.random())
        setCards(deck)
    }

    const handleActive = (card) => {
        if (!currentCards.find(c => c.id === card.id)) {
            if (currentCards.length < 2) {
                card.actived = !card.actived
                setCurrentCards(currentCards => [...currentCards, card])
                setCards(cards => cards.map(c => c ? c.id === card.id ? card : c : c))

                if (currentCards.length === 1) {
                    setTimeout(() => {
                        const first = currentCards[0]
                        const last = card

                        if (first.value === last.value) {
                            setCards(cards => cards.map(c => c ? c.value === first.value ? undefined : c : c))
                            setCurrentCards([])
                        } else {
                            setCurrentCards([])
                            setCards(cards => cards.map(card => {
                                if (card) {
                                    card.actived = false
                                }
                                return card
                            }))
                        }
                    }, 1000)
                }
            }
        }
    }

    if (isEnded()) {
        return (
            <>
                <Box>
                    <Text>Is Ended</Text>
                </Box>
                <Button onClick={createGame}>New Game</Button>
            </>
        )
    }

    return (
        <>
            <Box as='main' display='grid' flexDirection='column' gap='4rem' gridTemplateColumns='repeat(4, 1fr)' gridTemplateRows='repeat(3, 1fr)'>
                {
                    cards.map((card, cardIndex) => {
                        return card ? <Card key={cardIndex} value={card.value} isActived={card.actived} handleActive={() => handleActive(card)} x={cardIndex % 4 + 1} y={cardIndex % 3 + 1}/> : undefined
                    })
                }
            </Box>
        </>
    )
}

export default MemoryGame
