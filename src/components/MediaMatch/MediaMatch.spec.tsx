import { render, screen, theme } from 'utils/tests'
import MediaMatch, { MediaMatchProps } from './MediaMatch'

type Type = 'mobile' | 'desktop'

const init = (type: Type, props?: Partial<MediaMatchProps>): Element | null => {
  render(
    <MediaMatch {...props}>
      <h1 data-testid={type}></h1>
    </MediaMatch>
  )
  return screen.getByTestId(type).parentElement
}

describe('<MediaMatch />', () => {
  it('should render nothing', () => {
    const mobile = init('mobile')
    const desktop = init('desktop')
    expect(desktop).toHaveStyle({ display: 'none' })
    expect(mobile).toHaveStyle({ display: 'none' })
  })

  it('should render on desktop screen', () => {
    const desktop = init('desktop', { greaterThan: 'medium' })
    expect(desktop).toHaveStyleRule('display', 'block', {
      media: `(min-width: ${theme.breakpoints.medium})`
    })
  })

  it('should render mobile screen', () => {
    const mobile = init('mobile', { lessThan: 'medium' })
    expect(mobile).toHaveStyleRule('display', 'block', {
      media: `(max-width: ${theme.breakpoints.medium})`
    })
  })
})
