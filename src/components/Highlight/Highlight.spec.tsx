import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import Highlight, { HighlightProps } from './Highlight'

const init = (props: HighlightProps) => {
  renderWithTheme(<Highlight {...props} />)
  return (name: string, role: string, prop?: string) =>
    screen.getByRole(role, { [prop || 'name']: new RegExp(name, 'i') })
}

const mockHighlightProps = (): HighlightProps => ({
  image: 'https://i.ibb.co/Sc0NPJw/Image.png',
  background: 'https://i.ibb.co/56F2tQQ/Background.png',
  title: "Read Dead it's back",
  subtitle: "Come see John's new adventures",
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
})

describe('<Highlight />', () => {
  it('should render correctly', () => {
    const props = mockHighlightProps()
    const makeElement = init(props)
    expect(screen.getByAltText('floating')).toHaveAttribute('src', props.image)
    expect(screen.getByAltText('background')).toHaveAttribute('src', props.background)
    expect(makeElement(props.title, 'heading')).toBeInTheDocument()
    expect(makeElement(props.subtitle, 'heading')).toBeInTheDocument()
    expect(makeElement(props.buttonLabel, 'link')).toBeInTheDocument()
    expect(makeElement(props.buttonLabel, 'link')).toHaveAttribute('href', props.buttonLink)
  })

  it('should render reversed', () => {
    const { container } = renderWithTheme(<Highlight {...mockHighlightProps()} reverse />)
    expect(container.firstChild).toHaveStyleRule('grid-template-areas', "'content image'")
  })
})
