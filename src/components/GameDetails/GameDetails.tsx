import Heading from 'components/Heading'
import Icon from 'components/Icon'
import MediaMatch from 'components/MediaMatch'
import * as S from './GameDetailsStyles'

export type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'
export type Platform = 'windows' | 'linux' | 'mac'

export interface GameDetailsProps {
  developer: string
  publisher: string
  platforms: Platform[]
  releaseDate: string
  rating: Rating
  genres: string[]
}

const GameDetails = ({
  developer,
  publisher,
  platforms,
  releaseDate,
  rating,
  genres
}: GameDetailsProps) => (
  <S.Wrapper>
    <MediaMatch greaterThan="small">
      <Heading line="left" lineColor="secondary">
        Game details
      </Heading>
    </MediaMatch>
    <S.Content>
      <S.Details>
        <h3>Developer</h3>
        <span>{developer}</span>
      </S.Details>

      <S.Details>
        <h3>Publisher</h3>
        <span>{publisher}</span>
      </S.Details>

      <S.Details>
        <h3>Platforms</h3>
        <span>{platforms.map(item => Platforms[item])}</span>
      </S.Details>

      <S.Details>
        <h3>Release Date</h3>
        <span>
          {new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }).format(new Date(releaseDate))}
        </span>
      </S.Details>

      <S.Details>
        <h3>Rating</h3>
        <span>{rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`}</span>
      </S.Details>

      <S.Details>
        <h3>Genres</h3>
        <span>{genres.join(' / ')}</span>
      </S.Details>
    </S.Content>
  </S.Wrapper>
)

const Platforms = {
  windows: <Icon key="windows" title="Windows" label="Windows" size={18} />,
  linux: <Icon key="linux" title="Linux" label="Linux" size={18} />,
  mac: <Icon key="mac" title="Mac" label="Apple" size={18} />
}

export default GameDetails
