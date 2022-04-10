import { render, screen } from 'utils/tests'
import Menu, { MenuProps } from './Menu'

const init = (props?: MenuProps) => {
  render(<Menu {...props} />)
}

type MakeLink = (name: string) => Element[]
type Elements = [string, number][]
const testElements = (makeLink: MakeLink, elements: Elements) =>
  elements.forEach(([name, qtd]) => expect(makeLink(name)).toHaveLength(qtd))

const makeLink = (name: string) =>
  screen.queryAllByRole('link', { name: new RegExp(name, 'i'), hidden: true })
const makeIcon = (name: string) => screen.getAllByLabelText(new RegExp(name, 'i'))
const getLogo = () => screen.getByRole('img', { name: /won games/i, hidden: true })

describe('<Menu />', () => {
  it('should render the menu with correct elements', () => {
    init()
    testElements(makeIcon, [
      ['open menu', 1],
      ['open search', 1],
      ['open shopping cart', 2]
    ])
    expect(getLogo()).toBeInTheDocument()
  })

  it('should render logged out elements', () => {
    init()
    testElements(makeLink, [
      ['home', 2],
      ['explore', 2],
      ['log in now', 1],
      ['sign in', 1],
      ['sign up', 1],
      ['my account', 0],
      ['wishlist', 0]
    ])
  })

  it('should show logged in elements', () => {
    init({ username: 'any_name' })
    testElements(makeLink, [
      ['home', 2],
      ['explore', 2],
      ['my account', 2],
      ['wishlist', 2],
      ['log in now', 0],
      ['sign in', 0],
      ['sign up', 0]
    ])
  })

  it('should not show elements while loading', () => {
    init({ loading: true })
    testElements(makeLink, [
      ['home', 2],
      ['explore', 2],
      ['my account', 0],
      ['wishlist', 0],
      ['log in now', 0],
      ['sign in', 0],
      ['sign up', 0]
    ])
  })
})
