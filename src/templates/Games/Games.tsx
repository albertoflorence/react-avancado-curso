import { useState } from 'react'
import Base from 'templates/Base'
import MediaMatch from 'components/MediaMatch'
import * as S from './GamesStyles'
import ExploreSidebar, { FilterProps } from 'components/ExploreSidebar'
import Overlay from 'components/Overlay'
import Icon from 'components/Icon'
import Grid from 'components/Grid'
import GameCard from 'components/GameCard'
import { useGetGames } from 'services'
import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'
import Empty from 'components/Empty'
import Loading from 'components/Loading'

export interface GamesTemplateProps {
  filters: FilterProps[]
}

const Games = ({ filters }: GamesTemplateProps) => {
  const { query, push } = useRouter()
  const [open, setOpen] = useState(false)

  const { data, loading, fetchMore, hasMore } = useGetGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 12,
      where: parseQueryStringToWhere({ queryString: query, filterItems: filters }),
      sort: query.sort as string
    }
  })

  const games = data || []

  const handleFilter = (values: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: values
    })
  }

  const handleShowMore = () => {
    fetchMore({
      variables: {
        limit: 12,
        start: games.length
      }
    })
  }

  const sideBar = (
    <ExploreSidebar
      items={filters}
      onFilter={handleFilter}
      initialValues={parseQueryStringToFilter({ queryString: query, filterItems: filters })}
      onClose={() => setOpen(false)}
    />
  )

  return (
    <Base>
      <S.Wrapper>
        <MediaMatch greaterThan="medium">{sideBar}</MediaMatch>
        <S.Content isLoading={loading}>
          <MediaMatch lessThan="medium">
            <Icon
              label="FilterList"
              size={25}
              color="white"
              onClick={() => setOpen(true)}
              aria-label="open filter"
            />
            <Overlay open={open} handleClose={() => setOpen(false)}>
              {sideBar}
            </Overlay>
          </MediaMatch>
          {games.length || loading ? (
            <>
              <Grid>
                {games.map(props => (
                  <GameCard key={props.slug} {...props} />
                ))}
              </Grid>
              {hasMore && (
                <S.ShowMore role="button">
                  {loading ? (
                    <Loading type={'dots'} color="white" />
                  ) : (
                    <span onClick={handleShowMore}>show more</span>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : (
            <Empty
              title=":("
              description="We couldn't find anything matching your criteria"
              toHome
            />
          )}
        </S.Content>
      </S.Wrapper>
    </Base>
  )
}

export default Games
