import { useEffect, useState } from 'react'
import { MODES } from './memoryconstants'

const deckCards = [
    { value: 'A' },
    { value: 'B' },
    { value: 'C' },
    { value: 'D' },
    { value: 'E' },
    { value: 'F' },
    { value: 'G' },
    { value: 'H' },
    { value: 'I' },
    { value: 'J' },
    { value: 'K' },
    { value: 'L' },
    { value: 'M' },
    { value: 'N' },
    { value: 'O' },
    { value: 'P' },
    { value: 'Q' },
    { value: 'R' },
    { value: 'S' },
    { value: 'T' },
    { value: 'U' },
    { value: 'V' },
    { value: 'W' },
    { value: 'X' },
    { value: 'Y' },
    { value: 'Z' },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
]

const useCards = (size) => {
    const [desk, setDesk] = useState([])
    const [currentCards, setCurrentCards] = useState([])
    const [gameMode, setGameMode] = useState(0)

    const handleGameMode = (index) => {
        setGameMode(index)
    }

    const createDesk = () => {
        deckCards.sort(() => 0.5 - Math.random())
        const size = MODES[gameMode].columns * MODES[gameMode].rows
        const customDeck = [...deckCards.slice(0, size / 2), ...deckCards.slice(0, size / 2)].map((card, index) => { return { id: index, value: card.value, actived: true } }).sort(() => 0.5 - Math.random())
        return customDeck
    }

    const startGame = () => {
        setDesk(createDesk())
        setTimeout(() => {
            setDesk(desk => desk.map(card => {
                if (card) {
                    card.actived = false
                }
                return card
            }))
        }, 1000)
    }

    const isEnded = () => {
        return !desk.filter(card => card !== undefined).length
    }

    const handleCard = (cardIndex) => {
        if (currentCards.length < 2) {
            const card = desk[cardIndex]

            if (!card.actived) {
                setCurrentCards([...currentCards, card])
            } else {
                setCurrentCards(currentCards => currentCards.filter(cardActive => cardActive.id !== card.id))
            }

            card.actived = !card.actived
            setDesk(desk => desk.map((deskCard, index) => index === cardIndex ? card : deskCard))
        }
    }

    useEffect(() => {
        if (currentCards.length >= 2) {
            setTimeout(() => {
                const first = currentCards[0]
                const last = currentCards[1]

                if (first.value === last.value) {
                    setDesk(desk => desk.map(card => card?.value === first.value ? undefined : card))
                    setCurrentCards([])
                } else {
                    setCurrentCards([])
                    setDesk(desk => desk.map(card => {
                        if (card) {
                            card.actived = false
                        }
                        return card
                    }))
                }
            }, 1000)
        }
    }, [currentCards])
    /*
    useEffect(() => {
        setDesk([])
    }, [size])
    */
    return { desk, startGame, isEnded, handleCard, gameMode, handleGameMode }
}

export default useCards
