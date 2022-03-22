import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`

export const Total = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    background: #f3f3f3;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacing(2.5)};

    span:last-child {
      color: ${theme.colors.primary};
    }
  `}
`
