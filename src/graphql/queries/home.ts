import { gql } from '@apollo/client'
import { BannerFragment, GameFragment, HighlightFragment, SectionFragment } from 'graphql/fragments'

export const QUERY_HOME = gql`
  query QueryHome($date: Date!) {
    banners {
      ...BannerFragment
    }
    newGames: games(where: { release_date_lte: $date }, sort: "release_date:desc", limit: 9) {
      ...GameFragment
    }
    upComingGames: games(where: { release_date_gt: $date }, sort: "release_date:asc", limit: 18) {
      ...GameFragment
    }
    freeGames: games(where: { price: 0 }, sort: "release_date:desc", limit: 9) {
      ...GameFragment
    }
    sections: home {
      upComing {
        ...SectionFragment
      }
      newGames {
        ...SectionFragment
      }
      mostPopular {
        title
        highlight {
          ...HighlightFragment
        }
        games {
          ...GameFragment
        }
      }
      freeGames {
        ...SectionFragment
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
  ${HighlightFragment}
  ${SectionFragment}
`
