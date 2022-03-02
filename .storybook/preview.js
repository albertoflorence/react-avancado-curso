import GlobalStyles from '../src/styles/global'
import { RouterContext } from 'next/dist/shared/lib/router-context'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
