import { render, screen, theme } from 'utils/tests'
import FormMessage, { FormMessageProps } from './FormMessage'

const init = (props: FormMessageProps) => {
  return render(<FormMessage {...props} />)
}

const getIcon = (name: string) =>
  screen.getByRole('img', { name: new RegExp(name, 'i') }).parentNode

describe('<FormMessage />', () => {
  it('should render nothing if no children is provided', () => {
    const { container } = init({ type: 'error' })
    expect(container.firstChild).not.toBeInTheDocument()
  })

  it('should render error type', () => {
    init({ type: 'error', children: 'children' })

    expect(getIcon('error')).toHaveStyle({ color: theme.colors.red })
    expect(screen.getByText('children')).toHaveStyle({ color: theme.colors.red })
  })

  it('should render success type', () => {
    init({ type: 'success', children: 'children' })

    expect(getIcon('success')).toHaveStyle({ color: theme.colors.green })
    expect(screen.getByText('children')).toHaveStyle({ color: theme.colors.green })
  })
})
