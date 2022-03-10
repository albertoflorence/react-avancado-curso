import { render, screen } from '@testing-library/react'
import Slider from './Slider'

describe('<Slider />', () => {
  it('should render', () => {
    render(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>item 1</p>
        <p>item 2</p>
      </Slider>
    )

    expect(screen.getByText('item 1').parentElement?.parentElement).toHaveClass('slick-slide')
    expect(screen.getByText('item 2').parentElement?.parentElement).toHaveClass('slick-slide')
  })
})
