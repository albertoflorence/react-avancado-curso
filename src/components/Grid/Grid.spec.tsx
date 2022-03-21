import { renderWithTheme } from "utils/tests";
import Grid from "./Grid";

describe("<Grid />", () => {
  it("should render", () => {
    const { container } = renderWithTheme(<Grid>children</Grid>);

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        gap: 32px;
        grid-template-columns: repeat(auto-fill,minmax(240px,1fr));
        justify-items: center;
      }

      <div>
        <div
          class="c0"
        >
          children
        </div>
      </div>
    `);
  });
});
