import theme from 'styles/theme'
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
    circular: <Circular color={props.color} />
  }
  return (
    <S.Wrapper {...props} aria-label="loading">
      {types[props.type]}
    </S.Wrapper>
  )
}

const Circular = ({ color = 'primary' }: Omit<LoadingProps, 'type'>) => (
  <svg
    width="100%"
    height="100%"
    viewBox="-3 -3 42 42"
    xmlns="http://www.w3.org/2000/svg"
    stroke={theme.colors[color]}
  >
    <title>loading</title>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)" strokeWidth="3">
        <circle strokeOpacity=".2" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>
)

export default Loading
