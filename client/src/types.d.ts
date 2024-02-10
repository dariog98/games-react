export interface TabProps {
    roomHandler: any
}

export interface UserFormData {
    username: string
}

export interface User {
    id: string
    username: string
    games: number
    victories: number
    defeats: number
    level: number
    experience: number
}