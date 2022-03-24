import LinkNext, { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'

interface LinkProps extends NextLinkProps {
  children?: React.ReactNode
  className?: string
}

const Link = ({ children, href, className, ...props }: LinkProps) => (
  <LinkNext href={href} {...props}>
    <a className={className}>{children}</a>
  </LinkNext>
)

export default Link
