import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import Menu, { MenuProps } from './Menu'

const init = (props?: MenuProps) => {
  renderWithTheme(<Menu {...props} />)
  const makeIcon = (name: string) => screen.getAllByLabelText(new RegExp(name, 'i'))
  const makeLink = (name: string) => screen.queryAllByText(new RegExp(name, 'i'))
  const logo = screen.getByRole('img', { name: /won games/i })
  const menuFull = screen.getByRole('navigation', { hidden: true })
  return {
    makeLink,
    makeIcon,
    logo,
    menuFull
  }
}

type MakeLink = (name: string) => Element[]
type Elements = [string, number][]
const testElements = (makeLink: MakeLink, elements: Elements) =>
  elements.forEach(([name, qtd]) => expect(makeLink(name)).toHaveLength(qtd))

describe('<Menu />', () => {
  it('should render the menu with correct elements', () => {
    const { makeIcon, logo } = init()
    testElements(makeIcon, [
      ['open menu', 1],
      ['open search', 1],
      ['open shopping cart', 1]
    ])
    expect(logo).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    const { menuFull, makeIcon } = init()
    expect(menuFull.getAttribute('aria-hidden')).toBe('true')
    expect(menuFull).toHaveStyle({ opacity: 0 })

    fireEvent.click(makeIcon('open menu')[0])
    expect(menuFull.getAttribute('aria-hidden')).toBe('false')
    expect(menuFull).toHaveStyle({ opacity: 1 })

    fireEvent.click(makeIcon('close menu')[0])
    expect(menuFull.getAttribute('aria-hidden')).toBe('true')
    expect(menuFull).toHaveStyle({ opacity: 0 })
  })

  it('should render logged out elements', () => {
    const { makeLink } = init()
    testElements(makeLink, [
      ['home', 2],
      ['explore', 2],
      ['log in now', 1],
      ['sign in', 1],
      ['my account', 0],
      ['wishlist', 0]
    ])
  })

  it('should show logged in elements', () => {
    const { makeLink } = init({ userName: 'any_name' })
    testElements(makeLink, [
      ['home', 2],
      ['explore', 2],
      ['my account', 1],
      ['wishlist', 1],
      ['log in now', 0],
      ['sign in', 0]
    ])
  })
})
