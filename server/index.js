import * as dotenv from 'dotenv'
import server from './src/app.js'

dotenv.config()

const PORT = process.env.PORT
const PLATFORM = process.platform

server.listen(PORT, () => {
    console.log('Server ready')
    console.log('Port:', PORT)
    console.log('Platform:', PLATFORM)
})