import { screen } from '@testing-library/react'
import { renderWithTheme, theme } from 'utils/tests'
import Empty, { EmptyProps } from './Empty'

const init = (props?: Partial<EmptyProps>) => {
  renderWithTheme(<Empty title="any title" description="any description" {...props} />)
}

const getTitle = () => screen.getByRole('heading', { name: 'any title' })
const getDescription = () => screen.getByText('any description')
const getImage = () => screen.getByAltText(/a gamer in a couch playing videogame/i)

describe('<Empty />', () => {
  it('should render correctly', () => {
    init()

    expect(getImage()).toBeInTheDocument()
    expect(getTitle()).toBeInTheDocument()
    expect(getDescription()).toBeInTheDocument()
  })

  it('should render with link to home', () => {
    init({ toHome: true })

    expect(screen.getByRole('link', { name: /go back to store/i })).toHaveAttribute('href', '/')
  })

  it('should render normal size as default', () => {
    init()

    expect(getTitle()).toHaveStyle({ fontSize: theme.font.sizes.xxlarge })
    expect(getDescription()).toHaveStyle({
      fontSize: theme.font.sizes.large,
      color: theme.colors.gray2
    })
  })

  it('should render small size', () => {
    init({ size: 'small' })

    expect(getTitle()).toHaveStyle({ fontSize: theme.font.sizes.large })
    expect(getDescription()).toHaveStyle({
      fontSize: theme.font.sizes.medium,
      color: theme.colors.black
    })
    expect(getImage()).toHaveStyle({
      width: '300px'
    })
  })
})
