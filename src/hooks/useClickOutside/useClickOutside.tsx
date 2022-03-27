import { useEffect, useRef } from 'react'

export const useClickOutside = <T extends HTMLElement>(handler: () => void) => {
  const nodeDOM = useRef<T>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!nodeDOM.current?.contains(event.target as Node)) {
        handler()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return nodeDOM
}
