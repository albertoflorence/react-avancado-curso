import Container from 'components/Container'
import Heading from 'components/Heading'
import ProfileMenu, { Links } from 'components/ProfileMenu'
import { useRouter } from 'next/router'
import Base from 'templates/Base'
import * as S from './ProfileStyles'

export interface ProfileProps {
  children: React.ReactNode
}

const Profile = ({ children }: ProfileProps) => {
  const { asPath } = useRouter()
  return (
    <Base>
      <Container>
        <Heading line="left" lineColor="secondary">
          My Profile
        </Heading>
        <S.Wrapper>
          <ProfileMenu activeLink={asPath as Links} />
          <S.Content>{children}</S.Content>
        </S.Wrapper>
      </Container>
    </Base>
  )
}

export default Profile
