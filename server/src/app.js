import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { Server} from 'socket.io'
import { createServer } from 'node:http'
import minesweeperHandler from './minesweeper.js'

const app = express()
const server = createServer(app)
const io = new Server(server, {cors: { origin: "*" }})
const rooms = []

io.on('connection', (socket) => {
    console.log({ socketId: socket.id, clientId: socket.client.id })
    console.log('an user is connected!')

    minesweeperHandler(io, socket, rooms)
})

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (request, response) => {
    response.send('Hello world!')
})

export default server