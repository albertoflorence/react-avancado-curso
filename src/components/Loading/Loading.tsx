import * as S from './LoadingStyles'

export type Color = 'primary' | 'secondary' | 'white'

export interface LoadingProps {
  type: 'linear' | 'dots'
  color?: Color
}

const Loading = (props: LoadingProps) => {
  const types = {
    linear: <></>,
    dots: (
      <>
        <div />
        <div />
        <div />
        <div />
      </>
    )
  }
  return (
    <S.Wrapper {...props} aria-label="loading">
      {types[props.type]}
    </S.Wrapper>
  )
}

export default Loading
