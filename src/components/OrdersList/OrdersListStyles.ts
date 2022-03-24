import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    > :first-child {
      margin-bottom: ${theme.spacing(2)};
    }
    > :last-child {
      border: 0;
    }
  `}
`
