import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/motion.css'
import './utils/gsap-init'
import { SmoothScrollProvider } from './context/SmoothScrollContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SmoothScrollProvider>
            <App />
        </SmoothScrollProvider>
    </React.StrictMode>,
)