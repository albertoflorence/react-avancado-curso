import LinkNext, { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'

interface InternalLink extends NextLinkProps {
  internal?: boolean
  children?: React.ReactNode
}

type LinkProps = InternalLink & React.ComponentPropsWithoutRef<'a'>

const Link = ({ internal, children, href, ...props }: LinkProps) =>
  internal ? (
    <LinkNext href={href} {...props}>
      <a>{children}</a>
    </LinkNext>
  ) : (
    <a {...props} href={href}>
      {children}
    </a>
  )

export default Link
