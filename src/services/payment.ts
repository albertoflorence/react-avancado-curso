import { PaymentIntent } from '@stripe/stripe-js'
import { getApiUrl } from 'utils/helpers'

interface ApiOptions {
  method?: 'GET' | 'POST'
  token?: string
  body?: {
    [key: string]: unknown
  }
}

const API = async (url: string, { method = 'GET', token, body }: ApiOptions) => {
  const response = await fetch(getApiUrl(url), {
    method,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  return await response.json()
}

type CardList = Array<{ id: string }>

export interface PaymentIntentParams {
  cart: CardList
  token: string
}

export const createPaymentIntent = async ({ cart, token }: PaymentIntentParams) => {
  const data = await API('/orders/create-payment-intent', {
    method: 'POST',
    token,
    body: { cart }
  })

  if (data.error) return { error: data.error.message }

  return data
}

export interface CreatePaymentParams {
  cart: CardList
  paymentIntent?: PaymentIntent
  token: string
}

export const createPayment = async ({ cart, token, paymentIntent }: CreatePaymentParams) => {
  const data = await API('/orders', {
    method: 'POST',
    token,
    body: {
      cart,
      paymentIntentId: paymentIntent?.id,
      paymentMethod: paymentIntent?.payment_method,
      token
    }
  })

  if (data.error) return { error: data.error.message }

  return data
}
