import { CartListStyles } from 'components/CartList'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${CartListStyles.Wrapper} {
      width: 560px;
    }
    ${CartListStyles.Content} {
      max-height: 500px;
      overflow-y: auto;
    }
    h3 {
      font-size: ${theme.font.sizes.small};
    }
  `}
`
