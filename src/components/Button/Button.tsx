import * as S from './ButtonStyles'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Button = ({ children, startIcon, endIcon, ...props }: ButtonProps) => (
  <S.Wrapper {...props} hasIcon={Boolean(startIcon || endIcon)}>
    {startIcon}
    {children && <span> {children} </span>}
    {endIcon}
  </S.Wrapper>
)

export default Button
