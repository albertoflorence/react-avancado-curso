import * as S from './EmptyStyles'
import Button from 'components/Button'
import Link from 'components/Link'
import Image from 'components/Image'

export interface EmptyProps {
  title: string
  description: string
  toHome?: boolean
}

const Empty = ({ title, description, toHome }: EmptyProps) => (
  <S.Wrapper>
    <Image
      src="/img/empty.svg"
      alt="a gamer in a couch playing videogame"
      width={379}
      height={284}
    />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {toHome && (
      <Button href="/" internal as={Link}>
        Go back to store
      </Button>
    )}
  </S.Wrapper>
)

export default Empty
