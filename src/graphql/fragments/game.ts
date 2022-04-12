import { gql } from '@apollo/client'

export const GameFragment = gql`
  fragment GameFragment on Game {
    id
    release_date
    name
    slug
    cover {
      url
    }
    price
    developers {
      name
    }
  }
`
