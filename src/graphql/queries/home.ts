import { gql } from '@apollo/client'

export const QUERY_BANNERS = gql`
  query QueryBanners {
    banners {
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
  }
`
