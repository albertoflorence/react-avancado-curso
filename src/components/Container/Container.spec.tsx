import { renderWithTheme } from "utils/tests";
import Container from "./Container";

describe("<Container />", () => {
  it("should render", () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 1300px;
        width: 100%;
        padding-left: calc(32px * 2);
        padding-right: calc(32px * 2);
        margin-right: auto;
        margin-left: auto;
      }

      @media (max-width:768px) {
        .c0 {
          padding-left: 32px;
          padding-right: 32px;
        }
      }

      <div
        class="c0"
      >
        <span>
          Won Games
        </span>
      </div>
    `);
  });
});
