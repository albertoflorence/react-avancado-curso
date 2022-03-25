import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import Icon from 'components/Icon'
import Link from 'components/Link'
import Button from 'components/Button'

import { useState } from 'react'
import * as S from './MenuStyles'
import Overlay from 'components/Overlay'

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
          <S.MenuLink href="/">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuRight>
        <MenuItem icon="Search" aria-label="Open Search" />
        <MenuItem icon="ShoppingCart" aria-label="Open Shopping Cart" />
        {!userName && (
          <MediaMatch greaterThan="medium">
            <Button as={Link} href="/login">
              Sign In
            </Button>
          </MediaMatch>
        )}
      </S.MenuRight>

      <Overlay open={isOpen} handleClose={() => setIsOpen(false)}>
        <S.OverlayContent>
          <S.MenuNav>
            <S.MenuLink href="/">Home</S.MenuLink>
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
              <Button as={Link} href="/login" fullWidth>
                Log in now
              </Button>
              <span>or</span>
              <S.SignUp href="/signup">Sign Up</S.SignUp>
            </S.RegisterBox>
          )}
        </S.OverlayContent>
      </Overlay>
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

export default Menu
