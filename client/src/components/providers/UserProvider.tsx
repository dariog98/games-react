import { createContext, useContext, useEffect, useState } from 'react'
import { useLocalStorage } from '../../hooks'
import { User, UserFormData } from '../../types'

const userContext = createContext()

const createNewUser = () : User => {
    const userId : string = Date.now().toString(32)
    const user : User = {
        id: userId,
        username: userId,
        games: 0,
        victories: 0,
        defeats: 0,
        level: 0,
        experience: 0
    }
    return user
}

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(undefined)
    const { setItem, getItem } = useLocalStorage('USER')
    const userId : string = user?.id

    const storagedUser = getItem()
    if (!user && storagedUser) {
        try {
            setUser(storagedUser)
        } catch (error) {
            // Do nothing
        }
    }

    const updateUserData = (data : UserFormData) => {
        const { username } = data
        const newUser = { ...user, username }
        setItem(newUser)
        setUser(newUser)
    }

    const updateUserColor = (color : string) => {
        const newUser = { ...user, color }
        setItem(newUser)
        setUser(newUser)
    }

    const userController = { user, userId, updateUserData, updateUserColor }

    useEffect(() => {
        if (!user) {
            const newUser = createNewUser()
            setItem(newUser)
            setUser(newUser)
        }
    }, [])

    return (
        <userContext.Provider value={userController}>
            {children}
        </userContext.Provider>
    )
}

const useUserContext = () => {
    return useContext(userContext)
}

export { UserProvider, useUserContext }