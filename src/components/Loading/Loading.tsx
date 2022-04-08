import * as S from './LoadingStyles'

export type Color = 'primary' | 'secondary' | 'white' | 'black'

export interface LoadingProps {
  type: 'linear' | 'dots' | 'circular'
  color?: Color
}

const repeatDiv = (qtd: number) => new Array(qtd).fill('').map((__, i) => <div key={i} />)

const Loading = (props: LoadingProps) => {
  const types = {
    linear: <></>,
    dots: repeatDiv(4),
    circular: repeatDiv(5)
  }
  return (
    <S.Wrapper {...props} aria-label="loading">
      {types[props.type]}
    </S.Wrapper>
  )
}

export default Loading
