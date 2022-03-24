import Heading from 'components/Heading'
import ProfileMenu, { Links } from 'components/ProfileMenu'
import Base from 'templates/Base'
import * as S from './ProfileStyles'

export interface ProfileProps {
  children: React.ReactNode
  activeLink?: Links
}

const Profile = ({ children, activeLink }: ProfileProps) => (
  <Base>
    <S.Wrapper>
      <Heading line="left" lineColor="secondary">
        My Profile
      </Heading>
      <S.Content>
        <ProfileMenu activeLink={activeLink} />
        {children}
      </S.Content>
    </S.Wrapper>
  </Base>
)

export default Profile
