import Dropdown from 'components/Dropdown'
import Icon from 'components/Icon'
import * as S from './UserDropdownStyles'

export interface UserDropdownProps {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown title={<Title username={username} />}>
    <S.Content>
      <Item href="/profile/me" text="My Account" icon="AccountCircle" />
      <Item href="/wishlist" text="Wishlist" icon="FavoriteBorder" />
      <Item href="/logout" text="Sign Out" icon="ExitToApp" />
    </S.Content>
  </Dropdown>
)

const Title = ({ username }: { username: string }) => (
  <S.Title>
    <Icon label="AccountCircle" title="Account Dropdown" size={24} />
    <p>{username}</p>
    <Icon label="KeyboardArrowDown" size={24} color="gray" />
  </S.Title>
)

interface ItemProps {
  href: string
  text: string
  icon: 'AccountCircle' | 'FavoriteBorder' | 'ExitToApp'
}

const Item = ({ href, text, icon }: ItemProps) => (
  <S.ItemWrapper href={href}>
    <Icon label={icon} color="black" size={24} title={text} />
    {text}
  </S.ItemWrapper>
)
export default UserDropdown
