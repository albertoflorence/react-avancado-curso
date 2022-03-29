export const getImageUrl = (url?: string): string => {
  return `http://localhost:1337${url}`
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(price)
}
