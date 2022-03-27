import styled, { css } from 'styled-components'
import Link from 'components/Link'

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    display: flex;
    align-items: center;
    > p {
      margin-left: ${theme.spacing(1)};
      margin-right: ${theme.spacing(0.5)};
    }
  `}
`

export const Content = styled.nav`
  display: flex;
  flex-direction: column;
  width: max-content;
`

export const ItemWrapper = styled(Link)`
  ${({ theme }) => css`
    padding: ${theme.spacing(1.5)};
    display: flex;
    align-items: center;
    gap: ${theme.spacing(1)};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-decoration: none;
    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      svg {
        color: ${theme.colors.white};
      }
    }
  `}
`
