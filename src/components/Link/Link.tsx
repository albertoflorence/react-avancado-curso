import LinkNext, { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'

interface InternalLink extends NextLinkProps {
  internal?: boolean
  children?: React.ReactNode
}

export type LinkProps = InternalLink & React.ComponentPropsWithoutRef<'a'>

const Link = ({ internal, children, href, className, ...props }: LinkProps) =>
  internal ? (
    <LinkNext href={href} {...props}>
      <a className={className}>{children}</a>
    </LinkNext>
  ) : (
    <a {...props} href={href} className={className}>
      {children}
    </a>
  )

export default Link
