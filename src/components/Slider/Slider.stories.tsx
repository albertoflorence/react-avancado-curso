import { Story, Meta } from '@storybook/react'
import styled from 'styled-components'
import Slider, { SliderProps, SliderSettings } from './Slider'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const Slide = styled.div`
  background: gray;
  width: 300px;
  padding: 100px 0;
  border: 1px solid red;
  color: white;
  text-align: center;
`

// eslint-disable-next-line react/display-name
const makeSlider = (settings: SliderSettings) => (args: SliderProps) =>
  (
    <Slider {...args} settings={settings}>
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
      <Slide>5</Slide>
    </Slider>
  )

const horizontalSettings: SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export const Horizontal: Story<SliderProps> = makeSlider(horizontalSettings)

const verticalSettings: SliderSettings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
}

export const Vertical: Story<SliderProps> = makeSlider(verticalSettings)
