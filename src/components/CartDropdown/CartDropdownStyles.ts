import { CartListStyles } from 'components/CartList'
import { GameItemStyles } from 'components/GameItem'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${CartListStyles.Wrapper} {
      width: 560px;
      ${GameItemStyles.Title} {
        font-size: ${theme.font.sizes.medium};
      }
      ${GameItemStyles.Wrapper} {
        padding: ${theme.spacing(2)};
      }

      ${CartListStyles.Content} {
        max-height: 500px;
        overflow-y: scroll;
      }
    }
  `}
`
