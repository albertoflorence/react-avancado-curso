import { useState } from 'react'
import Base from 'templates/Base'
import MediaMatch from 'components/MediaMatch'
import * as S from './GamesStyles'
import ExploreSidebar, { ExploreSidebarProps } from 'components/ExploreSidebar'
import Overlay from 'components/Overlay'
import Icon from 'components/Icon'
import Grid from 'components/Grid'
import GameCard, { GameCardProps } from 'components/GameCard'

export interface GamesTemplateProps {
  filters: ExploreSidebarProps['items']
  games?: GameCardProps[]
}

const Games = ({ filters, games = [] }: GamesTemplateProps) => {
  const [open, setOpen] = useState(false)

  const handleFilter = () => {
    return
  }
  const handleShowMore = () => {
    return
  }

  const sideBar = <ExploreSidebar items={filters} onFilter={handleFilter} />
  return (
    <Base>
      <S.Wrapper>
        <MediaMatch greaterThan="medium">{sideBar}</MediaMatch>
        <S.Content>
          <MediaMatch lessThan="medium">
            <Icon label="Menu" size={25} color={'white'} onClick={() => setOpen(true)} />
            <Overlay open={open} handleClose={() => setOpen(false)}>
              {sideBar}
            </Overlay>
          </MediaMatch>
          <Grid>
            {games.length
              ? games.map(props => <GameCard key={props.title} {...props} />)
              : 'Nada Encontrado'}
          </Grid>
          <S.ShowMore role="button">
            <span onClick={handleShowMore}>show more</span>
          </S.ShowMore>
        </S.Content>
      </S.Wrapper>
    </Base>
  )
}

export default Games
