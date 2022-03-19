import { screen } from '@testing-library/react'
import { renderWithTheme, theme } from 'utils/tests'
import Copyright, { CopyrightProps } from './Copyright'

const init = (props?: CopyrightProps) => {
  renderWithTheme(<Copyright {...props} />)
  const currentYear = new Date().getFullYear()
  return screen.getByText(`Won Games ${currentYear} © All rights reserved`)
}

describe('<Copyright />', () => {
  it('should render with gray color as default', () => {
    const sut = init()
    expect(sut).toHaveStyle({
      color: theme.colors.gray
    })
  })

  it('should render with white color', () => {
    const sut = init({ color: 'white' })
    expect(sut).toHaveStyle({
      color: theme.colors.white
    })
  })
})
