import { screen } from '@testing-library/react'
import { renderWithTheme, theme } from 'utils/tests'
import Loading, { LoadingProps } from './Loading'

const init = (props: LoadingProps) => {
  renderWithTheme(<Loading {...props} />)
}

const getLoading = () => screen.getByLabelText('loading')
describe('<Loading />', () => {
  it('should render', () => {
    init({ type: 'linear' })

    expect(getLoading()).toBeInTheDocument()
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
