export const getImageUrl = (url?: string): string => {
  if (!url) return 'https://source.unsplash.com/random'
  return process.env.NEXT_PUBLIC_API_URL + url
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(price)
}

export const formattedPriceToNumber = (str: string): number =>
  Number(str.replace('$', '').replace('.00', ''))
