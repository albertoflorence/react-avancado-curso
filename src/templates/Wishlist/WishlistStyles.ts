import Container from 'components/Container'

import styled, { css } from 'styled-components'

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(4)};
  `}
`

export const Text = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`
