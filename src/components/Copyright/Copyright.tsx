import * as S from './CopyrightStyles'

const currentYear = new Date().getFullYear()

export interface CopyrightProps {
  color?: 'gray' | 'white'
}

const Copyright = (props: CopyrightProps) => (
  <S.Wrapper {...props}>Won Games {currentYear} © All rights reserved</S.Wrapper>
)

export default Copyright
