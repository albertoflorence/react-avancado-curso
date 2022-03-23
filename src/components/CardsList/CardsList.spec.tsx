import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import CardsList, { CardsListProps } from './CardsList'

const init = (props?: CardsListProps) => {
  renderWithTheme(<CardsList {...props} />)
}

const mockProps: CardsListProps = {
  cards: [
    {
      flag: 'any flag',
      image: 'any image',
      number: 'any number'
    }
  ]
}

describe('<CardsList />', () => {
  it('should render correctly', () => {
    init(mockProps)

    expect(screen.getByRole('heading', { name: 'My Cards' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'any flag' })).toHaveAttribute('src', 'any image')
    expect(screen.getByText('any number')).toBeInTheDocument()
  })
})
