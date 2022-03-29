import { gql } from '@apollo/client'

export const BannerFragment = gql`
  fragment BannerFragment on Banner {
    title
    subtitle
    image {
      url
      alternativeText
    }
    ribbon {
      text
      color
    }
    button {
      href
      label
    }
  }
`
