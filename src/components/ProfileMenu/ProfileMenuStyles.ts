import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import Link from 'components/Link'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    background: ${theme.colors.white};

    ${media.lessThan('medium')`
      border-bottom: 1px solid ${theme.colors.lightGray};
      display: flex;
    `}
  `}
`

interface ItemProps {
  active?: boolean
}

const handleActive = (theme: DefaultTheme) => css`
  color: ${theme.colors.white};
  background: ${theme.colors.primary};
`

export const Item = styled(Link)<ItemProps>`
  ${({ theme, active }) => css`
    color: ${theme.colors.black};
    display: flex;
    width: 100%;
    padding: ${theme.spacing(2)};
    gap: ${theme.spacing(1)};
    transition: background, color, ${theme.transition.fast};
    text-decoration: none;
    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
    }

    ${media.lessThan('medium')`
      justify-content: center;
      > span {
        display: none;
      }
    `}

    ${active && handleActive(theme)}
  `}
`
