export const getImageUrl = (url?: string): string => {
  if (!url) return 'https://source.unsplash.com/random'
  return `http://localhost:1337${url}`
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(price)
}
