import GlobalStyles from '../src/styles/global'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import * as nextImage from 'next/image'

const NextImage = nextImage.default

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => {
    const { ...rest } = props
    return <NextImage {...rest} unoptimized />
  }
})

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.lightBg
      },
      {
        name: 'dark',
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
