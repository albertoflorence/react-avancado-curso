import Price from 'components/Price'
import Image from 'components/Image'
import * as S from './GameItemStyles'
import Icon from 'components/Icon'
import { useCart } from 'hooks'

export interface GameItemProps {
  title: string
  price: string
  image: string
  downloadLink?: string
  slug: string
  paymentInfo?: {
    number: string
    flag: string
    image: string
    purchaseDate: string
  }
}

const GameItem = ({ title, price, image, downloadLink, paymentInfo, slug }: GameItemProps) => {
  const { removeItem, hasItem } = useCart()

  return (
    <S.Wrapper>
      <S.GameContent>
        <S.Thumbnail>
          <Image layout="fill" src={image} alt={`Thumbnail - ${title}`} objectFit="cover" />
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

      {hasItem(slug) && (
        <S.Remove role="button" onClick={() => removeItem(slug)}>
          Remove
        </S.Remove>
      )}

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
}

export default GameItem
