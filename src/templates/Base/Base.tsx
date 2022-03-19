import { Menu, Container, Footer } from 'components'
import * as S from './BaseStyles'

export interface BaseProps {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <Container center>
      <Menu />
    </Container>
    {children}
    <S.Footer>
      <Container center>
        <Footer />
      </Container>
    </S.Footer>
  </S.Wrapper>
)

export default Base
