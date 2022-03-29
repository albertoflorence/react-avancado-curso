import Ribbon from 'components/Ribbon'
import Button from 'components/Button'
import * as S from './BannerStyles'

export interface BannerProps {
  image: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: string
  ribbonColor?: 'primary' | 'secondary'
}

const Banner = ({
  image,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor
}: BannerProps) => (
  <S.Wrapper>
    {ribbon && <Ribbon color={ribbonColor}>{ribbon}</Ribbon>}
    <S.Image src={image} role="img" aria-label={title} />
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
