import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacing(4)};
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    justify-items: center;
  `}
`
