import { BannerFragment } from 'graphql/generated/BannerFragment'
import { GameFragment } from 'graphql/generated/GameFragment'
import { HighlightFragment } from 'graphql/generated/HighlightFragment'
import { mapperBanner, mapperGame, mapperHighlight, mapperSection } from './mappers'

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
    slug: 'any_slug'
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
      title: 'any name',
      subtitle: 'any developer',
      slug: 'any_slug',
      image: 'http://localhost:1337/any_url',
      price: '$100.00'
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
