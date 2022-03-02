const spacing = (n: number) => {
  return `${8 * n}px`
}

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
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    red: '#FF6347'
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
  }
} as const
