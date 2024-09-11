import { createPortal } from 'react-dom'
import './Overlay.css'
import { useOverlay } from './OverlayContext'

export function Overlay() {
  const { isVisible, overlayClickHandler } = useOverlay()

  return createPortal(
    <div
      className="overlay"
      style={{
        opacity: isVisible ? '1' : '0',
        pointerEvents: isVisible ? '' : 'none'
      }}
      onClick={overlayClickHandler}
    ></div>,
    document.body
  )
}
