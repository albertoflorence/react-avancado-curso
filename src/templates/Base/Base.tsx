import Menu from 'components/Menu'
import Container from 'components/Container'
import Footer from 'components/Footer'

import * as S from './BaseStyles'

export interface BaseProps {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>

    <S.Content>{children}</S.Content>

    <S.Footer>
      <Container>
        <Footer />
      </Container>
    </S.Footer>
  </S.Wrapper>
)

export default Base
