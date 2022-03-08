import { Button } from 'components'
import * as S from './HighlightStyles'

export interface HighlightProps {
  background: string
  image: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  reverse?: boolean
}

const Highlight = ({
  background,
  image,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  reverse
}: HighlightProps) => (
  <S.Wrapper reverse={reverse}>
    <S.Image src={image} alt="floating" />
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
    <S.Background src={background} alt="background"></S.Background>
  </S.Wrapper>
)

export default Highlight
