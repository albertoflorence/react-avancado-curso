import Container from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import { useCart } from 'hooks'
import Link from 'next/link'
import { useEffect } from 'react'
import Base from 'templates/Base'
import * as S from './SuccessStyles'

export interface SuccessTemplateProps {
  recommended?: {
    gameCards: GameCardProps[]
    highlight?: HighlightProps
  }
}

const Success = ({ recommended }: SuccessTemplateProps) => {
  const { clear } = useCart()

  useEffect(() => {
    clear()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Base>
      <Container>
        <S.Wrapper>
          <S.Title>Your purchase was successful!</S.Title>
          <S.CheckWrapper>
            <S.Line />
            <S.Check />
            <S.Line />
          </S.CheckWrapper>

          <S.Description>
            Wait for your payment details by email. Your game is now available for download inside
            your <Link href="/profile/orders">Orders List.</Link> Enjoy!
          </S.Description>
        </S.Wrapper>

        {recommended && (
          <Showcase
            gameCards={recommended.gameCards}
            highlight={recommended.highlight}
            title="You may like these games"
          />
        )}
      </Container>
    </Base>
  )
}

export default Success
