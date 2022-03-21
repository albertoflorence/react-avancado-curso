import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'components'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    align-items: center;
    padding: ${theme.spacing(2, 0)};
    margin-bottom: ${theme.spacing(4)};
    z-index: ${theme.layers.menu};
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

import { MenuFullProps } from './Menu'

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, open }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    overflow: hidden;
    opacity: ${open ? 1 : 0};
    pointer-events: ${open ? 'all' : 'none'};
    transition: opacity ${theme.transition.default};
    z-index: ${theme.layers.modal};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacing(2)};
      cursor: pointer;
      width: 24px;
      height: 24px;
    }

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
      transform: ${open ? 'translateY(0)' : 'translateY(30px)'};
      transition: transform ${theme.transition.default};
    }

    ${RegisterBox} {
      transform: ${open ? 'translateY(0)' : 'translateY(30px)'};
      transition: transform ${theme.transition.default};
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
