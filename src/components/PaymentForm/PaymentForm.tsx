import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { PaymentIntent, StripeElementChangeEvent } from '@stripe/stripe-js'

import Button from 'components/Button'
import FormMessage from 'components/FormMessage'
import Heading from 'components/Heading'
import Icon from 'components/Icon'
import Link from 'components/Link'
import { useCart } from 'hooks'
import { Session } from 'next-auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { createPayment, createPaymentIntent } from 'services/payment'
import * as S from './PaymentFormStyles'

export interface PaymentFormProps {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const [error, setError] = useState('')
  const [isFreeGames, setIsFreeGames] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const [loading, setLoading] = useState(false)
  const [isEmpty, setIsEmpty] = useState(true)
  const { items, loading: cartLoading } = useCart()
  const stripe = useStripe()
  const elements = useElements()
  const { push } = useRouter()

  const handleChange = (event: StripeElementChangeEvent) => {
    setError(event.error?.message || '')
    setIsEmpty(event.empty)
  }

  useEffect(() => {
    async function paymentMethod() {
      const cart = items.map(item => ({ id: item.id }))
      setLoading(true)
      const response = await createPaymentIntent({ cart, token: session.jwt as string })
      setLoading(false)
      if (response.error) return setError(response.error)

      setIsFreeGames(response.freeGames)
      setClientSecret(response.client_secret)
    }

    if (items.length) {
      paymentMethod()
    }
  }, [items, session])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const saveOrder = async (paymentIntent?: PaymentIntent) => {
      if (!loading) setLoading(true)

      const cart = items.map(item => ({ id: item.id }))
      const response = await createPayment({
        cart,
        token: session.jwt as string,
        paymentIntent: paymentIntent
      })

      if (response.error) {
        setError(response.error)
        setLoading(false)
        return
      }

      setError('')
      push('/success')
    }

    if (isFreeGames) return await saveOrder()

    if (!stripe || !elements || !clientSecret)
      return setError('Something bad happened, please try again later')

    const card = elements.getElement(CardElement)
    if (!card) return setError('Something bad happened, please try again later')

    setLoading(true)
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card }
    })

    if (payload.error) {
      setError('Payment failed ' + payload.error.message)
      setLoading(false)
      return
    }

    await saveOrder(payload.paymentIntent)
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.Content>
        <Heading color="black" line="bottom" lineColor="primary">
          Payment
        </Heading>

        {isFreeGames ? (
          <FormMessage type="success">You can get for free ! </FormMessage>
        ) : (
          <>
            <CardElement options={{ hidePostalCode: true }} onChange={handleChange} />
            <FormMessage type="error">{error}</FormMessage>
          </>
        )}
      </S.Content>

      <S.Buttons>
        <Button text fullWidth as={Link} href="/">
          Continue shopping
        </Button>
        <Button
          fullWidth
          type="submit"
          loading={loading || cartLoading}
          disabled={Boolean(!isFreeGames && (error || isEmpty))}
          startIcon={<Icon label="ShoppingCart" />}
        >
          Buy now
        </Button>
      </S.Buttons>
    </S.Wrapper>
  )
}

export default PaymentForm
