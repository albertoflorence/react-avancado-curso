import { BannerFragment } from 'graphql/generated/BannerFragment'
import { GameFragment } from 'graphql/generated/GameFragment'
import { HighlightFragment } from 'graphql/generated/HighlightFragment'
import { mapperBanner, mapperGame, mapperHighlight, mapperOrder, mapperSection } from './mappers'

const bannerMock = () =>
  ({
    title: 'any title',
    subtitle: 'any subtitle',
    image: {
      url: '/any_url',
      alternativeText: 'any alt'
    },
    ribbon: {
      text: 'any text',
      color: 'primary'
    },
    button: {
      href: 'any href',
      label: 'any label'
    }
  } as BannerFragment)

const gameMock = () =>
  ({
    cover: {
      url: '/any_url'
    },
    developers: [{ name: 'any developer' }],
    name: 'any name',
    price: 100,
    release_date: 'any date',
    slug: 'any_slug',
    id: 'any_id'
  } as GameFragment)

const highlightMock = () =>
  ({
    background: {
      url: '/any_url'
    },
    buttonLabel: 'any label',
    buttonLink: 'any href',
    image: {
      url: '/any_url'
    },
    reverse: true,
    subtitle: 'any subtitle',
    title: 'any title'
  } as HighlightFragment)

describe('mapperBanner()', () => {
  it('should map correctly', () => {
    const sut = mapperBanner(bannerMock())
    expect(sut).toEqual({
      title: 'any title',
      subtitle: 'any subtitle',
      buttonLabel: 'any label',
      buttonLink: 'any href',
      image: 'http://localhost:1337/any_url',
      ribbon: 'any text',
      ribbonColor: 'primary'
    })
  })

  it('should return undefined color if null color is provided', () => {
    const sut = mapperBanner({
      ...bannerMock(),
      ribbon: { color: null, text: 'any text' }
    } as BannerFragment)

    expect(sut).toEqual({
      title: 'any title',
      subtitle: 'any subtitle',
      buttonLabel: 'any label',
      buttonLink: 'any href',
      image: 'http://localhost:1337/any_url',
      ribbon: 'any text',
      ribbonColor: undefined
    })
  })
})

describe('mapperGame()', () => {
  it('should map correctly', () => {
    const sut = mapperGame(gameMock())
    expect(sut).toEqual({
      id: 'any_id',
      title: 'any name',
      subtitle: 'any developer',
      slug: 'any_slug',
      image: 'http://localhost:1337/any_url',
      price: '$100.00'
    })
  })
  it('should map with discount', () => {
    const sut = mapperGame({ ...gameMock(), discount: 80 })
    expect(sut).toEqual({
      id: 'any_id',
      title: 'any name',
      subtitle: 'any developer',
      slug: 'any_slug',
      image: 'http://localhost:1337/any_url',
      price: '$100.00',
      discount: '$80.00',
      ribbon: '20% OFF'
    })
  })
})

describe('mapperHighlight()', () => {
  it('should map correctly', () => {
    const sut = mapperHighlight(highlightMock())
    expect(sut).toEqual({
      title: 'any title',
      subtitle: 'any subtitle',
      background: 'http://localhost:1337/any_url',
      image: 'http://localhost:1337/any_url',
      buttonLabel: 'any label',
      buttonLink: 'any href',
      reverse: true
    })
  })
})

describe('mapperSection()', () => {
  it('should map correctly', () => {
    const sut = mapperSection(highlightMock(), [gameMock()])
    expect(sut).toEqual({
      highlight: {
        title: 'any title',
        subtitle: 'any subtitle',
        background: 'http://localhost:1337/any_url',
        image: 'http://localhost:1337/any_url',
        buttonLabel: 'any label',
        buttonLink: 'any href',
        reverse: true
      },
      gameCards: [
        {
          id: 'any_id',
          title: 'any name',
          subtitle: 'any developer',
          slug: 'any_slug',
          image: 'http://localhost:1337/any_url',
          price: '$100.00'
        }
      ]
    })
  })

  it('should return empty gameCards array if nothing is provided', () => {
    const sut = mapperSection()
    expect(sut).toEqual({
      gameCards: []
    })
  })
})

describe('mapperOrder()', () => {
  it('should map correctly', () => {
    const sut = mapperOrder({
      __typename: 'Order',
      id: 'any id',
      card_brand: 'visa',
      card_last4: '4242',
      created_at: '2022-04-18T14:53:48.358Z',
      games: [gameMock()]
    })
    expect(sut).toEqual([
      {
        id: 'any_id',
        title: 'any name',
        price: '$100.00',
        image: 'http://localhost:1337/any_url',
        downloadLink: '',
        slug: 'any_slug',
        paymentInfo: {
          number: '**** **** **** 4242',
          image: '/img/cards/visa.png',
          flag: 'visa',
          purchaseDate: 'Purchased made on Apr 18, 2022'
        }
      }
    ])
  })
  it('should handle free game', () => {
    const sut = mapperOrder({
      __typename: 'Order',
      id: 'any id',
      card_brand: null,
      card_last4: null,
      created_at: '2022-04-18T14:53:48.358Z',
      games: [gameMock()]
    })
    expect(sut).toEqual([
      {
        id: 'any_id',
        title: 'any name',
        price: '$100.00',
        image: 'http://localhost:1337/any_url',
        downloadLink: '',
        slug: 'any_slug',
        paymentInfo: {
          number: 'Free Game',
          image: null,
          flag: null,
          purchaseDate: 'Purchased made on Apr 18, 2022'
        }
      }
    ])
  })
})
