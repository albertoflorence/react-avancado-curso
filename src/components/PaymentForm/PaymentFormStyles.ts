import { ButtonStyles } from 'components/Button'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(1)};
    padding: ${theme.spacing(2)};
  `}
`

export const Buttons = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    background: ${theme.colors.lightGray2};
    padding: ${theme.spacing(2)};
    gap: ${theme.spacing(1)};
    ${ButtonStyles.Wrapper} {
      padding-left: 0;
      padding-right: 0;
    }
    ${media.lessThan('medium')`
      flex-direction: column;
    `};
  `}
`
