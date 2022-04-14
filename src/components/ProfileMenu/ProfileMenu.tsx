import Icon, { IconProps } from 'components/Icon'
import * as S from './ProfileMenuStyles'

export type Links = '/profile/me' | '/profile/cards' | '/profile/orders'

export interface ProfileMenuProps {
  activeLink?: Links
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Wrapper>
    {items.map(props => (
      <Item key={props.title} {...props} active={activeLink === props.link} />
    ))}
  </S.Wrapper>
)

interface ItemProps {
  title: string
  icon: IconProps['label']
  link: string
  active?: boolean
}

const Item = ({ title, icon, link, active }: ItemProps) => (
  <S.Item href={link} active={active}>
    <Icon title={title} size={24} label={icon} />
    <p>{title}</p>
  </S.Item>
)

const items: ItemProps[] = [
  {
    title: 'My Profile',
    icon: 'AccountCircle',
    link: '/profile/me'
  },
  {
    icon: 'CreditCard',
    title: 'My Cards',
    link: '/profile/cards'
  },
  {
    title: 'My Orders',
    icon: 'List',
    link: '/profile/orders'
  },
  {
    title: 'Sign out',
    icon: 'ExitToApp',
    link: '/logout'
  }
]

export default ProfileMenu
