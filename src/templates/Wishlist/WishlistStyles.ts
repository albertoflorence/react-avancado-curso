import { Container } from 'components'
import styled, { css } from 'styled-components'

export const Wrapper = styled(Container).attrs({ center: true })`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(4)};
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacing(4)};
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    justify-items: center;

    padding-bottom: ${theme.spacing(16)};
    margin-bottom: ${theme.spacing(4)};
    border-bottom: 1px solid rgba(181, 181, 181, 0.3);
  `}
`
export const Text = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`
