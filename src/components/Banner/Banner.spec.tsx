import { render, screen } from 'utils/tests'
import Banner, { BannerProps } from './Banner'

const init = (props: BannerProps) => {
  render(<Banner {...props} />)
  return (name: string, role: string, prop?: string) =>
    screen.getByRole(role, { [prop || 'name']: new RegExp(name, 'i') })
}

const mockBannerProps = (): BannerProps => ({
  image: 'any_image',
  title: 'any_title',
  subtitle: 'any_subtitle',
  buttonLabel: 'any_label',
  buttonLink: 'any_link'
})

describe('<Banner />', () => {
  it('should render correctly', () => {
    const props = mockBannerProps()
    const makeItem = init(props)

    expect(makeItem(props.title, 'heading')).toBeInTheDocument()
    expect(makeItem(props.subtitle, 'heading')).toBeInTheDocument()
    expect(makeItem(props.buttonLabel, 'link')).toBeInTheDocument()
    expect(makeItem(props.image, 'img', 'src')).toBeInTheDocument()
    expect(makeItem(props.buttonLink, 'link', 'href')).toBeInTheDocument()
  })

  it('should render with Ribbon', () => {
    const props = mockBannerProps()
    init({
      ...props,
      ribbon: 'best seller'
    })
    expect(screen.getByText('best seller')).toBeInTheDocument()
  })
})
