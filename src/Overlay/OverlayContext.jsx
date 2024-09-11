import { Children } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

const OverlayContext = createContext()

export const OverlayProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [overlayClickHandler, setOverlayClickHandler] = useState(null)

  const showOverlay = (callback) => {
    setIsVisible(true)
    setOverlayClickHandler(() => callback)
  }
  const hideOverlay = () => {
    setIsVisible(false)
    setOverlayClickHandler(null)
  }

  return (
    <OverlayContext.Provider
      value={{ showOverlay, hideOverlay, isVisible, overlayClickHandler }}
    >
      {children}
    </OverlayContext.Provider>
  )
}

export const useOverlay = () => useContext(OverlayContext)
