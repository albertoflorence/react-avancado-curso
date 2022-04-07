import { render, screen, waitFor } from 'utils/tests'
import userEvent from '@testing-library/user-event'
import ExploreSidebar, { ExploreSidebarProps, FilterProps } from './ExploreSidebar'
import mockItems from './mock'

const init = (props?: Partial<ExploreSidebarProps>) => {
  render(<ExploreSidebar items={mockItems as FilterProps[]} onFilter={jest.fn()} {...props} />)
}

const byRole = (role: string, name: string) => screen.getByRole(role, { name })

describe('<ExploreSidebar />', () => {
  it('should render correctly', () => {
    init()
    expect(byRole('heading', 'Price'))
    expect(byRole('checkbox', 'FREE')).toBeInTheDocument()
    expect(byRole('heading', 'Sort By'))
    expect(byRole('radio', 'High to low')).toBeInTheDocument()

    expect(byRole('button', 'Filter')).toBeInTheDocument()
  })

  it('should render with initial values', () => {
    init({ initialValues: { platforms: ['windows'], sortBy: 'low-to-high' } })

    expect(byRole('checkbox', 'Windows')).toBeChecked()
    expect(byRole('radio', 'Low to high')).toBeChecked()
  })

  it('should call onFilter with selected values', () => {
    const onFilter = jest.fn()
    init({ onFilter })

    userEvent.click(byRole('checkbox', 'FREE'))
    userEvent.click(byRole('checkbox', 'Linux'))
    userEvent.click(byRole('checkbox', 'Under $150'))
    userEvent.click(byRole('radio', 'High to low'))

    expect(onFilter).toHaveBeenCalledTimes(5)

    expect(onFilter).toHaveBeenCalledWith({
      price: ['free', 'under-150'],
      platforms: ['linux'],
      sortBy: 'high-to-low'
    })
  })

  it('should call onFilter with selected values and initial values', () => {
    const onFilter = jest.fn()
    init({ onFilter, initialValues: { platforms: ['windows'] } })

    userEvent.click(byRole('checkbox', 'Mac'))

    expect(onFilter).toHaveBeenCalledWith({
      platforms: ['windows', 'mac']
    })
  })

  it('should remove if selected', async () => {
    const onFilter = jest.fn()
    init({ onFilter, initialValues: { platforms: ['windows'], sortBy: 'low-to-high' } })

    userEvent.click(byRole('checkbox', 'Windows'))
    userEvent.click(byRole('radio', 'High to low'))

    await waitFor(() => {
      expect(onFilter).toHaveBeenCalledWith({
        sortBy: 'high-to-low',
        platforms: []
      })
    })
  })

  it('should call onClose when filter button is clicked', () => {
    const onClose = jest.fn()
    init({ onClose })
    userEvent.click(byRole('button', 'Filter'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
