import * as S from './RadioStyles'

type Input = React.ComponentPropsWithoutRef<'input'>
type Value = Input['value']

export type RadioProps = {
  label?: string
  color?: 'black' | 'white'
  value?: Value
  onCheck?: (value: Value) => void
} & Input

const Radio = ({ label, color, value, onCheck, ...props }: RadioProps) => {
  const onChange = () => {
    onCheck && onCheck(value)
  }

  const Input = <S.Input type="radio" {...props} onChange={onChange} value={value} />

  return (
    <S.Wrapper>
      {label ? (
        <S.Label color={color}>
          {Input}
          {label}
        </S.Label>
      ) : (
        Input
      )}
    </S.Wrapper>
  )
}

export default Radio
