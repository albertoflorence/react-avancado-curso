import Slider, { SliderSettings } from 'components/Slider'
import Banner, { BannerProps } from 'components/Banner'
import * as S from './BannerSliderStyles'

export interface BannerSliderProps {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>{items.map(RenderBanner)}</Slider>
  </S.Wrapper>
)

const RenderBanner = (props: BannerProps) => <Banner key={props.title} {...props}></Banner>

export default BannerSlider
