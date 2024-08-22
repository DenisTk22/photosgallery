import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Jallery from './Components/Jallery/Jallery'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Jallery />
  </StrictMode>,
)
