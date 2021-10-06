import { createGlobalStyle } from 'styled-components'
import RobotoFont from '../Fonts/fonts'

const GlobalStyle = createGlobalStyle`
  ${RobotoFont}
  body {
    font: 1rem Roboto, sans-serif;
  }
`

export default GlobalStyle
