import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import Footer from './Footer'

const init = () => {
  renderWithTheme(<Footer />)
  return (text: string) => screen.getByRole('heading', { name: new RegExp(text, 'i') })
}

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    const makeColumn = init()

    expect(makeColumn('contact us')).toBeInTheDocument()
    expect(makeColumn('follow us')).toBeInTheDocument()
    expect(makeColumn('links')).toBeInTheDocument()
    expect(makeColumn('location')).toBeInTheDocument()
  })
})
