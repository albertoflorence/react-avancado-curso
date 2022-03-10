import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as BannerStyles from 'components/Banner/BannerStyles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: 100%;
    .slick-dots {
      display: flex !important;
      list-style: none;
      justify-content: center;
      gap: ${theme.spacing(1)};
      margin-top: ${theme.spacing(2)};

      li {
        background: ${theme.colors.white};
        cursor: pointer;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        transition: box-shadow ${theme.transition.default};
        &:focus-within {
          box-shadow: 0 0 0 1px ${theme.colors.secondary};
        }
      }

      .slick-active {
        background: ${theme.colors.primary};
      }

      button {
        opacity: 0;
        width: 8px;
        height: 8px;
        position: absolute;
        cursor: pointer;
      }
    }

    ${media.greaterThan('large')`
      ${BannerStyles.Wrapper} {
        max-width: 1040px;
        margin: 0 auto;
      }

      .slick-dots {
        flex-direction: column;
        position: absolute;
        right: 0;
        top: 50%;
      }
    `}
  `}
`
