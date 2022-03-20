import { forwardRef } from 'react'
import SlickSlider, { Settings } from 'react-slick'

import * as S from './SliderStyles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
  beforeChange?: () => void
  afterChange?: () => void
}

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings, ...props },
  ref
) => (
  <S.Wrapper>
    <SlickSlider {...settings} ref={ref} {...props}>
      {children}
    </SlickSlider>
  </S.Wrapper>
)

export default forwardRef(Slider)
