import * as S from './EmptyStyles'
import Button from 'components/Button'
import Link from 'components/Link'
import Image from 'components/Image'

export interface EmptyProps {
  title: string
  description: string
  toHome?: boolean
  size?: 'small' | 'normal'
}

const Empty = ({ title, description, toHome, size }: EmptyProps) => (
  <S.Wrapper size={size}>
    <Image
      src="/img/empty.svg"
      alt="a gamer in a couch playing videogame"
      width={380}
      height={285}
    />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {toHome && (
      <Button href="/" as={Link}>
        Go back to store
      </Button>
    )}
  </S.Wrapper>
)

export default Empty
