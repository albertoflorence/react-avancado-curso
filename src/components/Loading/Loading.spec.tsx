import { render, screen, theme } from 'utils/tests'
import Loading, { LoadingProps } from './Loading'

const init = (props: LoadingProps) => {
  render(<Loading {...props} />)
}

const getLoading = () => screen.getByLabelText('loading')
describe('<Loading />', () => {
  it('should render linear', () => {
    init({ type: 'linear' })

    expect(getLoading()).toBeInTheDocument()
  })

  it('should render dots', () => {
    init({ type: 'dots' })

    expect(getLoading().firstChild).toBeInTheDocument()
  })

  it('should render circular', () => {
    init({ type: 'circular' })

    expect(getLoading().firstChild).toBeInTheDocument()
  })

  it('should render with primary color as default', () => {
    init({ type: 'linear' })

    expect(getLoading()).toHaveStyleRule('background-color', theme.colors.primary, {
      modifier: '::before'
    })
  })

  it('should render with secondary color', () => {
    init({ type: 'linear', color: 'secondary' })

    expect(getLoading()).toHaveStyleRule('background-color', theme.colors.secondary, {
      modifier: '::before'
    })
  })
})
