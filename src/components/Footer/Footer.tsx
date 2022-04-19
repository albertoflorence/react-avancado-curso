import Logo from 'components/Logo'
import Copyright from 'components/Copyright'
import Heading from 'components/Heading'
import Link from 'components/Link'
import * as S from './FooterStyles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      {Items.map(item => (
        <FooterItem
          key={item.title}
          title={item.title}
          links={item.links}
          labelledby={item.labelledby}
        ></FooterItem>
      ))}
    </S.Content>
    <S.CopyRightWrapper>
      <Copyright />
    </S.CopyRightWrapper>
  </S.Wrapper>
)

export interface FooterItemProps {
  links: FooterLink[]
  title: string
  labelledby: string
}

interface FooterLink {
  href?: string
  text: string
  internal?: boolean
}

const FooterItem = ({ links, title, labelledby }: FooterItemProps) => {
  return (
    <S.Column aria-labelledby={labelledby}>
      <Heading color="black" line="bottom" lineColor="secondary" size="small">
        {title.toUpperCase()}
      </Heading>
      <nav id={labelledby}>
        {links.map(link =>
          link.href ? (
            link.internal ? (
              <Link key={link.text} href={link.href}>
                {link.text}
              </Link>
            ) : (
              <a key={link.text} href={link.href} target="_blank" rel="noreferrer">
                {link.text}
              </a>
            )
          ) : (
            <span key={link.text}>{link.text}</span>
          )
        )}
      </nav>
    </S.Column>
  )
}

const Items = [
  {
    title: 'CONTACT US',
    labelledby: 'contact',
    links: [
      { text: 'suporte@wongames.gg', href: '#' },
      { text: '+55 21 33283719', href: '#' }
    ]
  },
  {
    title: 'FOLLOW US',
    labelledby: 'social media',
    links: [
      { text: 'Instagram', href: '#' },
      { text: 'Twitter', href: '#' },
      { text: 'YouTube', href: '#' },
      { text: 'Facebook', href: '#' }
    ]
  },
  {
    title: 'LINKS',
    labelledby: 'resources',
    links: [
      { text: 'Loja', href: '/', internal: true },
      { text: 'Explorar', href: '/games', internal: true },
      { text: 'Buscar', href: '/search', internal: true },
      { text: 'FAQ', href: '/faq', internal: true }
    ]
  },
  {
    title: 'LOCATION',
    labelledby: 'address',
    links: [
      { text: 'Rua 7 de Maio' },
      { text: '527  - 89020330' },
      { text: 'Rio de Janeiro, Brasil' }
    ]
  }
]

export default Footer
