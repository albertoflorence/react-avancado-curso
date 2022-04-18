import { CartContextData } from 'hooks'
import { fireEvent, render, screen } from 'utils/tests'
import GameItem, { GameItemProps } from './GameItem'

const init = (props?: Partial<GameItemProps>, cartProviderProps?: Partial<CartContextData>) => {
  render(<GameItem {...mockProps} {...props} />, {
    cartProviderProps
  })
}

const mockProps = {
  id: 'string',
  title: 'any name',
  price: 'any price',
  image: 'any image',
  slug: 'any-slug'
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

  it('should render with free game', () => {
    init({
      paymentInfo: {
        flag: 'visa',
        image: null,
        number: 'free game',
        purchaseDate: 'any date'
      }
    })

    expect(screen.queryByAltText('visa')).not.toBeInTheDocument()
  })

  it('should show remove', () => {
    init({}, { hasItem: () => true })
    expect(screen.getByText('Remove')).toBeInTheDocument()
  })

  it('should remove an item', () => {
    const removeItem = jest.fn()
    init({}, { removeItem, hasItem: () => true })
    fireEvent.click(screen.getByText('Remove'))
    expect(removeItem).toHaveBeenCalledWith('any-slug')
  })
})
