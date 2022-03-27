import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import Link from 'components/Link'
import { IconStyles } from 'components/Icon'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    align-items: center;
    padding: ${theme.spacing(2, 0)};
    z-index: ${theme.layers.menu};
    ${IconStyles.Wrapper} {
      cursor: pointer;
    }
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 24px;
    height: 24px;
    cursor: pointer;
  `}
`

export const MenuRight = styled.div`
  ${({ theme }) => css`
    display: flex;
    div {
      margin-left: ${theme.spacing(1)};
    }
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin-left: ${theme.spacing(3)};
    `}
  `}
`

export const MenuLink = styled(Link)`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
    margin: ${theme.spacing(0.5, 3, 0)};

    &:hover::after {
      content: '';
      position: absolute;
      display: block;
      height: 3px;
      width: 100%;
      background-color: ${theme.colors.primary};
      animation: hoverAnimation 0.2s forwards;
    }

    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  `}
`

export const OverlayContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;

    ${MenuNav} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacing(3)};
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacing(6, 6)};

    > span {
      display: block;
      margin: ${theme.spacing(1, 0)};
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const SignUp = styled(Link)`
  ${({ theme }) => css`
    text-decoration: none;
    cursor: pointer;
    color: ${theme.colors.primary};
    border-bottom: 2px solid ${theme.colors.primary};
  `}
`
