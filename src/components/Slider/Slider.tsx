import SlickSlider, { Settings } from 'react-slick'

import * as S from './SliderStyles'

export type SliderSettings = Settings

export interface SliderProps {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider = ({ children, settings }: SliderProps) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
)

export default Slider
