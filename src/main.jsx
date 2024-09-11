import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Overlay } from './Overlay/Overlay.jsx'
import { OverlayProvider } from './Overlay/OverlayContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OverlayProvider>
      <App />
      <Overlay></Overlay>
    </OverlayProvider>
  </StrictMode>
)
