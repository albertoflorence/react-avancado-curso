import { Container } from 'components'
import styled, { css } from 'styled-components'

export const Wrapper = styled(Container).attrs({ center: true })`
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