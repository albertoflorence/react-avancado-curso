import { createGlobalStyle, css, DefaultTheme, GlobalStyleComponent } from 'styled-components'

interface GlobalStyleProps {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<GlobalStyleProps, DefaultTheme> = createGlobalStyle`
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: local(''), url('../fonts/poppins-v19-latin-300.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local(''), url('../fonts/poppins-v19-latin-regular.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: local(''), url('../fonts/poppins-v19-latin-600.woff2') format('woff2');
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    html {
      font-size: 100%;
    }
  ${({ theme, removeBg }) => css`
    body {
      font-family: ${theme.font.family};
      ${!removeBg &&
      css`
        background-color: ${theme.colors.mainBg};
      `}
    }
  `}
`

export default GlobalStyles
