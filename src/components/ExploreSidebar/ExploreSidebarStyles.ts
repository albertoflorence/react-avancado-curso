import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HeadingStyles } from 'components/Heading'
import { CheckboxStyles } from 'components/Checkbox'
import { RadioStyles } from 'components/Radio'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
      > :last-child {
        margin: ${theme.spacing(3, 0)};
      }
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(3)};

    > div:not(:last-child) {
      border-bottom: 1px solid rgba(181, 181, 181, 0.3);
      padding-bottom: ${theme.spacing(3)};
    }

    ${media.lessThan('medium')`
      > div:not(:last-child) {
        border: 0;
      }
      border-bottom: 1px solid rgba(181, 181, 181, 0.3);

      max-height: 75vh;
      overflow-y: auto;
    `}
  `}
`

export const ItemWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(1)};
    font-size: ${theme.font.sizes.small};

    > :first-child {
      margin-bottom: ${theme.spacing(2)};
    }

    ${media.lessThan('medium')`
      ${CheckboxStyles.Label},
      ${RadioStyles.Label}{
        font-size: 1rem;
        color: ${theme.colors.black};
      }

      ${HeadingStyles.Wrapper} {
        font-size: 1.5rem;
        color: ${theme.colors.black};
      }
    `}
  `}
`

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing(0, 3)};
  `}
`
