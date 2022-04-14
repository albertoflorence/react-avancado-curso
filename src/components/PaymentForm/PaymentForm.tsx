import Button from 'components/Button'
import Heading from 'components/Heading'
import Icon from 'components/Icon'
import * as S from './PaymentFormStyles'

export interface PaymentFormProps {
  handlePayment: () => void
}

const PaymentForm = ({ handlePayment }: PaymentFormProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        <Heading color="black" line="bottom" lineColor="primary">
          Payment
        </Heading>
      </S.Content>

      <S.Buttons>
        <Button text fullWidth>
          Continue shopping
        </Button>
        <Button fullWidth onClick={handlePayment} startIcon={<Icon label="ShoppingCart" />}>
          Buy now
        </Button>
      </S.Buttons>
    </S.Wrapper>
  )
}

export default PaymentForm
