import Icon, { IconProps } from 'components/Icon'
import * as S from './FormMessageStyles'

export interface FormMessageProps {
  type?: 'error' | 'success'
  children?: React.ReactNode
}
const FormMessage = ({ type, children }: FormMessageProps) => {
  if (!children || !type) return <></>

  const icons = {
    error: {
      label: 'ErrorCircle',
      title: 'error',
      color: 'red'
    },
    success: {
      label: 'CheckCircle',
      title: 'success',
      color: 'green'
    }
  }

  const iconProps = icons[type] as IconProps

  return (
    <S.Wrapper type={type}>
      <Icon {...iconProps} size={14} />
      {children}
    </S.Wrapper>
  )
}

export default FormMessage
