import Button from 'components/Button'
import Heading from 'components/Heading'
import Icon from 'components/Icon'
import Image from 'components/Image'
import Radio from 'components/Radio'
import { useState } from 'react'
import * as S from './PaymentOptionsStyles'

export interface PaymentCard {
  number: string
  flag: string
  image: string
}

export interface PaymentOptionsProps {
  cards?: PaymentCard[]
  handlePayment: () => void
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [creditCard, setCreditCard] = useState('')

  return (
    <S.Wrapper>
      <Heading color="black" line="bottom" lineColor="primary">
        Payment
      </Heading>

      <S.Content>
        {cards?.map(({ number, flag, image }) => (
          <S.Row key={number} as="label">
            <Image src={image} alt={flag} width={38} height={24} />
            <span>{number}</span>
            <Radio
              id={number}
              name="credit-card"
              value={number}
              onCheck={value => value && setCreditCard(value.toString())}
            />
          </S.Row>
        ))}
        <S.Row role="button" onClick={() => window.alert('k')}>
          <Icon label="Add" size={25} />
          <span>Add new credit card</span>
        </S.Row>
      </S.Content>

      <S.Buttons>
        <Button text fullWidth>
          Continue shopping
        </Button>
        <Button
          disabled={!creditCard}
          fullWidth
          onClick={handlePayment}
          startIcon={<Icon label="ShoppingCart" />}
        >
          Buy now
        </Button>
      </S.Buttons>
    </S.Wrapper>
  )
}

export default PaymentOptions
