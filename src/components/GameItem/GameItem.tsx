import Price from 'components/Price'
import Image from 'components/Image'
import * as S from './GameItemStyles'
import Icon from 'components/Icon'

export interface GameItemProps {
  title: string
  price: string
  image: string
  downloadLink?: string
  paymentInfo?: {
    number: string
    flag: string
    image: string
    purchaseDate: string
  }
}

const GameItem = ({ title, price, image, downloadLink, paymentInfo }: GameItemProps) => (
  <S.Wrapper>
    <S.GameContent>
      <S.Thumbnail>
        <Image width={150} height={70} src={image} alt={`Thumbnail - ${title}`} objectFit="cover" />
      </S.Thumbnail>

      <div>
        <S.Title>
          {title}{' '}
          {downloadLink && (
            <S.DownloadLink href={downloadLink} target="_blank" aria-label={`Get ${title} here`}>
              <Icon label="Download" />
            </S.DownloadLink>
          )}
        </S.Title>
        <Price light>{price}</Price>
      </div>
    </S.GameContent>

    {paymentInfo && (
      <S.Payment>
        <S.CardInfo>
          <span>{paymentInfo.number}</span>
          <Image src={paymentInfo.image} width={38} height={24} alt={paymentInfo.flag} />
        </S.CardInfo>
        <p> {paymentInfo.purchaseDate} </p>
      </S.Payment>
    )}
  </S.Wrapper>
)

export default GameItem
