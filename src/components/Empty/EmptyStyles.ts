import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  text-align: center;
  img {
    max-width: 100%;
    height: auto;
  }
  p:last-child {
    margin-bottom: 0;
  }
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    color: ${theme.colors.gray2};
    margin-bottom: ${theme.spacing(4)};
  `}
`
