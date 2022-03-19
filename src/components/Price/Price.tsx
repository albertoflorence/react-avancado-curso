import * as S from './PriceStyles'

export interface PriceProps {
  children: React.ReactNode
  discount?: boolean
}

const Price = ({ children, ...props }: PriceProps) => <S.Wrapper {...props}>{children}</S.Wrapper>

export default Price
