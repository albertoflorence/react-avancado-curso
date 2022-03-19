import { Menu, Container, Footer } from 'components'
import * as S from './BaseStyles'

export interface BaseProps {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => (
  <section>
    <Container>
      <Menu />
    </Container>
    {children}
    <S.Footer>
      <Container center>
        <Footer />
      </Container>
    </S.Footer>
  </section>
)

export default Base
