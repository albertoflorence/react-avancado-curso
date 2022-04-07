import { render, screen } from 'utils/tests'
import CartIcon from './CartIcon'

const init = () => {
  return render(<CartIcon />, {
    cartProviderProps: {
      quantity: 3
    }
  })
}

describe('<CartIcon />', () => {
  it('should render', () => {
    init()

    expect(screen.getByLabelText('Icon Badge')).toHaveTextContent('3')
  })
})
