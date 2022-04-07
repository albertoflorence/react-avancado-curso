import { render } from 'utils/tests'

import Divider from './Divider'

describe('<Divider />', () => {
  it('should render correctly', () => {
    const { container } = render(<Divider />)
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background: rgba(181,181,181,0.3);
        margin: 56px auto 32px;
        height: 1px;
        border: 0;
        width: 100%;
      }

      @media (min-width:768px) {
        .c0 {
          margin: 136px auto 56px;
        }
      }

      <div>
        <hr
          class="c0"
        />
      </div>
    `)
  })
})
