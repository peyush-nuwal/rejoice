import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LenisScrollProvider from './Lenis.jsx'

createRoot(document.getElementById('root')).render(
    
       <LenisScrollProvider>
           <App />
      </LenisScrollProvider>
  
)
