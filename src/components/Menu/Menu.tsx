import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import Icon from 'components/Icon'
import Link from 'components/Link'
import Button from 'components/Button'

import { useState } from 'react'
import * as S from './MenuStyles'

export interface MenuProps {
  userName?: string
}

const Menu = ({ userName }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <MenuItem icon="Menu" aria-label="Open Menu" onClick={() => setIsOpen(true)} />
      </MediaMatch>

      <S.LogoWrapper>
        <Logo hideOnMobile toHome />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="/" internal>
            Home
          </S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuRight>
        <MenuItem icon="Search" aria-label="Open Search" />
        <MenuItem icon="ShoppingCart" aria-label="Open Shopping Cart" />
        {!userName && (
          <MediaMatch greaterThan="medium">
            <Button as={Link} href="/login" internal>
              Sign In
            </Button>
          </MediaMatch>
        )}
      </S.MenuRight>

      <MenuFull open={isOpen}>
        <Icon label="Close" aria-label="Close Menu" onClick={() => setIsOpen(false)}></Icon>
        <S.MenuNav>
          <S.MenuLink href="/" internal>
            Home
          </S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
          {userName && (
            <>
              <S.MenuLink href="#">My Account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>
        {!userName && (
          <S.RegisterBox>
            <Button as={Link} href="/login" internal fullWidth>
              Log in now
            </Button>
            <span>or</span>
            <S.SignUp href="/signup" internal>
              Sign Up
            </S.SignUp>
          </S.RegisterBox>
        )}
      </MenuFull>
    </S.Wrapper>
  )
}

interface MenuItemProps extends React.ComponentPropsWithoutRef<'svg'> {
  icon: 'Menu' | 'Search' | 'ShoppingCart'
}

const MenuItem = ({ icon, ...props }: MenuItemProps) => (
  <S.IconWrapper>
    <Icon label={icon} {...props}></Icon>
  </S.IconWrapper>
)

export interface MenuFullProps {
  open: boolean
  children: React.ReactNode
}

const MenuFull = ({ open, children, ...props }: MenuFullProps) => (
  <S.MenuFull aria-hidden={!open} open={open} {...props}>
    {children}
  </S.MenuFull>
)

export default Menu
