import Menu from 'components/Menu'
import Container from 'components/Container'
import Footer from 'components/Footer'

import * as S from './BaseStyles'
import { useSession } from 'next-auth/react'

export interface BaseProps {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => {
  const { data, status } = useSession()

  return (
    <S.Wrapper>
      <Container>
        <Menu username={data?.user?.name as string} loading={status === 'loading'} />
      </Container>

      <S.Content>{children}</S.Content>

      <S.Footer>
        <Container>
          <Footer />
        </Container>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Base
