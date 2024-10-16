import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LenisScrollProvider from './Lenis.jsx'
import { BrowserRouter } from 'react-router-dom'
 BrowserRouter
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
       <LenisScrollProvider>
           <App />
      </LenisScrollProvider>
    </BrowserRouter>
)
