import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import GameItem, { GameItemProps } from './GameItem'

const init = (props?: Partial<GameItemProps>) => {
  renderWithTheme(<GameItem {...mockProps} {...props} />)
}

const mockProps = {
  title: 'any name',
  price: 'any price',
  image: 'any image'
}

describe('<GameItem />', () => {
  it('should render correctly', () => {
    init()

    expect(screen.getByRole('heading', { name: 'any name' })).toBeInTheDocument()
    expect(screen.getByText('any price')).toBeInTheDocument()
    expect(screen.getByAltText('Thumbnail - any name')).toHaveAttribute('src', 'any image')
  })

  it('should render width download link', () => {
    init({ downloadLink: '/any_link' })

    expect(screen.getByRole('link', { name: 'Get any name here' })).toHaveAttribute(
      'href',
      '/any_link'
    )
  })

  it('should render with payment', () => {
    init({
      paymentInfo: {
        flag: 'any flag',
        image: 'any image',
        number: 'any number',
        purchaseDate: 'any date'
      }
    })

    expect(screen.getByText('any number')).toBeInTheDocument()
    expect(screen.getByText('any date')).toBeInTheDocument()
    expect(screen.getByAltText('any flag')).toHaveAttribute('src', 'any image')
  })
})
