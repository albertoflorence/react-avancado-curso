import { render, screen } from 'utils/tests'
import Showcase, { ShowcaseProps } from './Showcase'
import gameCards from 'components/GameCardSlider/mock'
import highlight from 'components/Highlight/mock'

const init = (props?: Partial<ShowcaseProps>) => {
  render(<Showcase {...props} />)
}

const heading = (name: string) => screen.getByRole('heading', { name })

describe('<Showcase />', () => {
  it('should render with title', () => {
    init({ title: 'any title' })
    expect(heading('any title')).toBeInTheDocument()
  })

  it('should render with game cards', () => {
    init({ gameCards: gameCards.slice(0, 1) })
    expect(heading(gameCards[0].title)).toBeInTheDocument()
  })

  it('should render with highlight', () => {
    init({ highlight })
    expect(heading(highlight.title)).toBeInTheDocument()
  })
})
