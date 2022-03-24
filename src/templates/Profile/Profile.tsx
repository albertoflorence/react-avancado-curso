import Container from 'components/Container'
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
    <Container>
      <Heading line="left" lineColor="secondary">
        My Profile
      </Heading>
      <S.Wrapper>
        <ProfileMenu activeLink={activeLink} />
        <S.Content>{children}</S.Content>
      </S.Wrapper>
    </Container>
  </Base>
)

export default Profile
