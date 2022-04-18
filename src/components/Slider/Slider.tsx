import React, { forwardRef, useState } from 'react'
import SlickSlider, { Settings } from 'react-slick'

import * as S from './SliderStyles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings, ...props },
  ref
) => {
  const [dragging, setDragging] = useState(false)
  const handleClickCapture = (event: React.MouseEvent) => {
    if (dragging) {
      event.preventDefault()
      event.stopPropagation()
    }
  }
  return (
    <S.Wrapper onClickCapture={handleClickCapture}>
      <SlickSlider
        {...settings}
        ref={ref}
        {...props}
        beforeChange={() => setDragging(true)}
        afterChange={() => setDragging(false)}
      >
        {children}
      </SlickSlider>
    </S.Wrapper>
  )
}

export default forwardRef(Slider)
