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

  const Input = <S.Input type="radio" {...props} onChange={onChange} />

  return (
    <S.Wrapper>
      {!label && Input}
      {label && (
        <S.Label color={color}>
          {Input}
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Radio
