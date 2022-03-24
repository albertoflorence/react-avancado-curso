import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    color: ${theme.colors.black};
    padding: ${theme.spacing(1)};
    display: flex;
    gap: ${theme.spacing(2)};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing(4, 0)};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(1.5)};
  `}
`
