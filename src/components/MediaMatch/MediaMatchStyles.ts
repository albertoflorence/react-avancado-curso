import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { MediaMatchProps, Breakpoint } from './MediaMatch'

const handleLessThan = (breakpoint: Breakpoint) => css`
  ${media.lessThan(breakpoint)`
    display: block;
  `}
`
const handleGreaterThan = (breakpoint: Breakpoint) => css`
  ${media.greaterThan(breakpoint)`
    display: block;
  `}
`
export const Wrapper = styled.div<MediaMatchProps>`
  ${({ greaterThan, lessThan }) => css`
    display: none;
    ${greaterThan && handleGreaterThan(greaterThan)}
    ${lessThan && handleLessThan(lessThan)};
  `}
`
