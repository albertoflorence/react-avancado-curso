import * as S from './ButtonStyles'
import Loading from 'components/Loading'

type ButtonTypes = React.ComponentPropsWithoutRef<'button'> | React.ComponentPropsWithoutRef<'a'>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  as?: React.ElementType
  text?: boolean
  loading?: boolean
  disabled?: boolean
} & ButtonTypes

const Button = ({ children, startIcon, endIcon, loading, disabled, ...props }: ButtonProps) => (
  <S.Wrapper {...props} hasIcon={Boolean(startIcon || endIcon)} disabled={disabled || loading}>
    {startIcon && loading ? <Loading type="circular" color="white" /> : startIcon}
    {children && <span> {children} </span>}
    {endIcon && loading ? <Loading type="circular" color="white" /> : endIcon}
  </S.Wrapper>
)

export default Button
