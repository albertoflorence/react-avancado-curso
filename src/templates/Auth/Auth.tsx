import { Heading, Logo, Image, Copyright } from 'components'

import * as S from './AuthStyles'

export interface AuthProps {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Image src="/img/auth-bg.jpg" layout="fill" objectFit="cover" alt="background auth page" />
      <S.BannerContent>
        <Logo toHome></Logo>
        <div>
          <Heading size="huge">All your favorite games in one place</Heading>
          <S.Subtitle>
            <strong>WON</strong> is the best and most complete gaming platform.
          </S.Subtitle>
        </div>
        <S.Footer>
          <Copyright color="white" />
        </S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.ContentWrapper>
      <S.Content>
        <Logo toHome size="large" color="black" id="content" />
        <Heading line="left" lineColor="secondary" color="black">
          {title}
        </Heading>
        {children}
      </S.Content>
    </S.ContentWrapper>
  </S.Wrapper>
)

export default Auth
