const getKey = (key: string) => `WONGAMES_${key}`

export const getStorageItem = <T = unknown>(key: string): T | undefined => {
  if (!window) return

  const value = localStorage.getItem(getKey(key))

  return value && JSON.parse(value)
}

export const setStorageItem = (key: string, value: unknown): void => {
  if (!window) return

  localStorage.setItem(getKey(key), JSON.stringify(value))
}
