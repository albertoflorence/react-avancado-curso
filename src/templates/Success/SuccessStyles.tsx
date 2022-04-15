import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing(4)};
    padding: ${theme.spacing(1)};
    margin: ${theme.spacing(10, 0, 25)};
  `}
`
export const CheckWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    * {
      box-shadow: ${theme.colors.primary} 0px 0px 8px;
    }
  `}
`
export const Line = styled.div`
  ${({ theme }) => css`
    max-width: 300px;
    width: 100%;
    height: 1px;
    background: ${theme.gradients.primary};
    ${media.lessThan('large')`
      display: none;
    `}
  `}
`
export const Check = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background: ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${theme.spacing(0, 5)};

}

    &::after {
      content: '';
      position: absolute;

      width: 30px;
      height: 50px;
      border: 9px solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;

      transform: rotate(42deg) translateY(-15%);
    }
  `}
`
export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    max-width: 600px;
    text-align: center;
    a {
      color: ${theme.colors.primary};
    }
  `}
`
