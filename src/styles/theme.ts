type SpacingType = number | 'auto'
type SpacingArgs = [SpacingType, SpacingType?, SpacingType?, SpacingType?]
const spacing = (...args: SpacingArgs): string =>
  args.map(arg => (typeof arg === 'number' ? `${8 * arg}px` : arg)).join(' ')

export default {
  grid: {
    container: '1300px',
    gutter: '32px'
  },
  border: {
    radius: '4px'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '0.75rem',
      small: '0.875rem',
      medium: '1rem',
      large: '1.125rem',
      xlarge: '1.250rem',
      xxlarge: '1.75rem',
      huge: '3.25rem'
    }
  },
  colors: {
    primary: '#F231A5',
    secondary: '#3CD3C1',
    mainBg: '#06092B',
    lightBg: '#F2F2F2',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#EAEAEA',
    lightGray2: '#F3F3F3',
    gray: '#8F8F8F',
    gray2: '#BBBBBB',
    gray3: '#C7C7C7C7',
    darkGray: '#2E2F42',
    red: '#FF6347'
  },
  gradients: {
    primary: 'linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%)'
  },
  spacing,
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  breakpoints: {
    huge: '1440px',
    large: '1170px',
    medium: '768px',
    small: '450px'
  }
} as const
