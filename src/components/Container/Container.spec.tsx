import { renderWithTheme } from 'utils/tests'
import Container from './Container'

describe('<Container />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 1300px;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(32px,2);
        padding-right: calc(32px,2);
      }

      <div
        class="c0"
      >
        <span>
          Won Games
        </span>
      </div>
    `)
  })
})
