import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing(2)};
    border-bottom: 1px solid ${theme.colors.lightGray};
    ${media.greaterThan('medium')`
      display: flex;
      padding: ${theme.spacing(3)};
      gap: ${theme.spacing(2)};
    `}
  `}
`
export const Thumbnail = styled.div`
  position: relative;
  width: 150px;
  height: 70px;
  flex-shrink: 0;

  ${media.lessThan('medium')`
    width: 94px;
    height: 56px;
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xlarge};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const DownloadLink = styled.a`
  ${({ theme }) => css`
    svg {
      width: 24px;
      height: 24px;
      color: ${theme.colors.primary};
    }
  `}
`

export const GameContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing(2)};
  `}
`

export const Payment = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    text-align: end;
    display: flex;
    flex-direction: column;
    flex: 1;

    ${media.lessThan('medium')`
      flex-direction: column-reverse;
      text-align: start;
      margin-top: ${theme.spacing(1)};
    `}

    span {
      margin-right: ${theme.spacing(1)};
    }
  `}
`

export const CardInfo = styled.div``

export const Remove = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacing(1)};
    display: flex;
    flex: 1 0 auto;
    justify-content: end;
    align-items: center;
    cursor: pointer;
  `}
`
