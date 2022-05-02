export const getImageUrl = (url?: string): string => {
  if (!url) return '/img/not-found.jpg'
  if (process.env.NEXT_PUBLIC_IMAGE_HOST) return process.env.NEXT_PUBLIC_IMAGE_HOST + url

  return url
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(price)
}

export const formattedPriceToNumber = (str: string): number =>
  Number(str.replace('$', '').replace('.00', ''))

export const getApiUrl = (url: string) => process.env.NEXT_PUBLIC_API_URL + url
