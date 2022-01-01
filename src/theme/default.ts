// theme.ts
import { Theme } from 'styled-components'

export const theme: Theme = {
  id: '__default', 
  borderRadius: '4px',
  fonts: { 
    mono: 'IBM Plex Mono',
    sans:'IBM Plex Sans',
    serif: 'serif'
  },
  palette: {
    common: {
      black: '#000000',
      white: '#FFFFFF', 
      charcoal: '#5F646A',
      grey: '#E6E6E6'
    },
    primary: {
      main: '#A3ACB9',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#69B56A', 
      contrastText: '#FFFFFF'
    }
  }
}