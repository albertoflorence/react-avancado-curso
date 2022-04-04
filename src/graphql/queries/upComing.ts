import { gql } from '@apollo/client'
import { GameFragment, SectionFragment } from 'graphql/fragments'

export const QUERY_UPCOMING = gql`
  query QueryUpComing($date: Date!) {
    upComingGames: games(where: { release_date_gt: $date }, sort: "release_date:asc", limit: 9) {
      ...GameFragment
    }
    section: home {
      upComing {
        ...SectionFragment
      }
    }
  }
  ${GameFragment}
  ${SectionFragment}
`
