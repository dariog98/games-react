import React from 'react'
import { createRoot } from 'react-dom/client'
import { SettingsProvider } from './components/providers/SettingsProvider'
import { UserProvider } from './components/providers/UserProvider'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css'
import '@fontsource/pixelify-sans'
import '@fontsource/vt323'

const root = createRoot(document.getElementById('app')!)

root.render(
    <React.StrictMode>
        <SettingsProvider>
            <UserProvider>
                <App/>
            </UserProvider>
        </SettingsProvider>
    </React.StrictMode>
)