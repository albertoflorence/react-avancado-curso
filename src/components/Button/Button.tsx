import { LinkProps } from 'components/Link/Link'
import * as S from './ButtonStyles'

type ButtonTypes =
  | React.ComponentPropsWithoutRef<'button'>
  | React.ComponentPropsWithoutRef<'a'>
  | LinkProps

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  as?: React.ElementType
  text?: boolean
} & ButtonTypes

const Button = ({ children, startIcon, endIcon, ...props }: ButtonProps) => (
  <S.Wrapper {...props} hasIcon={Boolean(startIcon || endIcon)}>
    {startIcon}
    {children && <span> {children} </span>}
    {endIcon}
  </S.Wrapper>
)

export default Button
