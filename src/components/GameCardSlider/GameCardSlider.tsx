import Icon from 'components/Icon'
import GameCard, { GameCardProps } from 'components/GameCard'
import Slider, { SliderSettings } from 'components/Slider'
import * as S from './GameCardSliderStyles'

export type ArrowColor = 'black' | 'white'

export interface GameCardSliderProps {
  items: GameCardProps[]
  arrowColor?: ArrowColor
}

const makeSettings = (...args: [number, number][]) =>
  args.map(([breakpoint, slidesToShow]) => ({
    breakpoint,
    settings: {
      slidesToShow,
      arrows: false
    }
  }))

const Arrow = (direction: 'ArrowLeft' | 'ArrowRight') => (
  <S.ArrowIcon>
    <Icon label={direction} />
  </S.ArrowIcon>
)

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: Arrow('ArrowRight'),
  prevArrow: Arrow('ArrowLeft'),
  responsive: makeSettings([1375, 3.2], [1024, 2.2], [730, 1.5], [650, 1.2], [375, 1.1])
}

const GameCardSlider = ({ items, ...props }: GameCardSliderProps) => (
  <S.Wrapper {...props}>
    <Slider settings={settings}>{items.map(RenderGameCard)}</Slider>
  </S.Wrapper>
)

const RenderGameCard = (props: GameCardProps) => <GameCard key={props.title} {...props} />

export default GameCardSlider
