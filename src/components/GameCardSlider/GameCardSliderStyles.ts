import styled, { css } from 'styled-components'
import { GameCardSliderProps } from './GameCardSlider'

export const Wrapper = styled.div<Pick<GameCardSliderProps, 'arrowColor'>>`
  ${({ theme, arrowColor = 'white' }) => css`
    ${ArrowIcon} {
      color: ${theme.colors[arrowColor]};
    }

    .slick-track,
    .slick-list {
      display: flex;
      padding: ${theme.spacing(0.5)};
      margin: -${theme.spacing(0.5)};
    }

    .slick-slide > div {
      height: 100%;
      margin-right: ${theme.spacing(2)};
    }

    .slick-next {
      right: -30px;
    }
    .slick-prev {
      left: -40px;
    }
    .slick-disabled {
      visibility: hidden !important;
    }
  `}
`

export const ArrowIcon = styled.div`
  position: absolute;
  text-align: center;
  width: 24px;
  height: 24px;
  top: 50%;
  transform: translateY(-50%);
  align-items: center;
`
