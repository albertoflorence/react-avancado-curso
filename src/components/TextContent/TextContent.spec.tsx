import { render, screen } from 'utils/tests'

import TextContent, { TextContentProps } from './TextContent'

const init = (props?: Partial<TextContentProps>) => {
  render(<TextContent {...mockProps} {...props} />)
}

const mockProps = {
  content: '<h1>html content</h1>'
}

const getHeading = (name: string) => screen.getByRole('heading', { name })

describe('<TextContent />', () => {
  it('should render the html content', () => {
    init()
    expect(getHeading('html content')).toBeInTheDocument()
  })

  it('should render the title', () => {
    init({ title: 'any title' })
    expect(getHeading('any title')).toBeInTheDocument()
  })
})
