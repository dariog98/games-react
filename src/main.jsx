import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './theme.css'
import theme from './theme'

const root = createRoot(document.getElementById('app'))

root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript/>
            <App/>
        </ChakraProvider>
    </React.StrictMode>
)
