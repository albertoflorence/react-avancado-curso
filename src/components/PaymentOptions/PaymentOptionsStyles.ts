import { ButtonStyles } from 'components/Button'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacing(3)};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(1)};
    margin: ${theme.spacing(5, 0)};
  `}
`
export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacing(1.5)};
    gap: ${theme.spacing(1)};
    background: ${theme.colors.lightGray};
    cursor: pointer;

    > :nth-child(2) {
      flex: 1;
    }
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
