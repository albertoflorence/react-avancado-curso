import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import Icon, { IconProps } from 'components/Icon'
import Link from 'components/Link'
import Button from 'components/Button'

import { useState } from 'react'
import * as S from './MenuStyles'
import Overlay from 'components/Overlay'
import CartDropdown from 'components/CartDropdown'
import UserDropdown from 'components/UserDropdown'
import CartIcon from 'components/CartIcon'

export interface MenuProps {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
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
          <S.MenuLink href="/games">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuRight>
        <MenuItem icon="Search" aria-label="Open Search" />

        <MediaMatch greaterThan="medium">
          <CartDropdown />
        </MediaMatch>

        <MediaMatch lessThan="medium">
          <S.CartIconWrapper href="/cart">
            <CartIcon />
          </S.CartIconWrapper>
        </MediaMatch>

        <MediaMatch greaterThan="medium">
          {!username ? (
            <Button as={Link} href="/login">
              Sign In
            </Button>
          ) : (
            <UserDropdown username={username} />
          )}
        </MediaMatch>
      </S.MenuRight>

      <Overlay open={isOpen} handleClose={() => setIsOpen(false)}>
        <S.OverlayContent>
          <S.MenuNav>
            <S.MenuLink href="/">Home</S.MenuLink>
            <S.MenuLink href="/games">Explore</S.MenuLink>
            {username && (
              <>
                <S.MenuLink href="/profile/me">My Account</S.MenuLink>
                <S.MenuLink href="/wishlist">Wishlist</S.MenuLink>
              </>
            )}
          </S.MenuNav>
          {!username && (
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

interface MenuItemProps extends Omit<IconProps, 'label'> {
  icon: 'Menu' | 'Search'
}

const MenuItem = ({ icon, ...props }: MenuItemProps) => (
  <Icon label={icon} color="white" size={24} {...props} />
)

export default Menu
