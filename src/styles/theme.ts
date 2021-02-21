// theme.ts
import { DefaultTheme } from 'styled-components'
const defaultTheme: DefaultTheme = {
  borderRadius: '8px',
  palette: {
    common: {
      black: '#222831',
      white: '#ffffff'
    },
    primary: {
      main: '#004578',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#8F5500',
      contrastText: '#ffffff'
    }
  }
}
export default defaultTheme