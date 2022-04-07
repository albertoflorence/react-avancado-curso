import { getStorageItem, setStorageItem } from './localStorage'

const clearStorage = () => localStorage.clear()

describe('getStorageItem()', () => {
  beforeEach(clearStorage)

  it('should get item from localStorage', () => {
    localStorage.setItem('WONGAMES_cartItems', JSON.stringify(['1', '2', '3']))
    const sut = getStorageItem('cartItems')
    expect(sut).toEqual(['1', '2', '3'])
  })
})

describe('setStorageItem()', () => {
  beforeEach(clearStorage)

  it('should set item to localStorage', () => {
    setStorageItem('cartItems', ['1', '2', '3'])
    const item = localStorage.getItem('WONGAMES_cartItems')

    expect(JSON.parse(item as string)).toEqual(['1', '2', '3'])
  })
})
