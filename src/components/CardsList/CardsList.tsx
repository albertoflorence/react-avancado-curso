import Heading from 'components/Heading'
import Image from 'components/Image'
import { PaymentCard } from 'components/PaymentOptions'
import * as S from './CardsListStyles'

export interface CardsListProps {
  cards?: PaymentCard[]
}

const CardsList = ({ cards }: CardsListProps) => (
  <S.Wrapper>
    <Heading line="bottom" lineColor="secondary" size="small" color="black">
      My Cards
    </Heading>
    <S.Content>
      {cards?.map(({ number, flag, image }) => (
        <S.Card key={number}>
          <Image src={image} alt={flag} width={38} height={24} />
          {number}
        </S.Card>
      ))}
    </S.Content>
  </S.Wrapper>
)

export default CardsList
