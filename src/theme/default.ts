// theme.ts
import { Theme } from 'styled-components'

export const theme: Theme = {
  borderRadius: '4px',
  fonts: { 
    mono: 'IBM Plex Mono',
    sans:'IBM Plex Sans',
    serif: 'serif'
  },
  palette: {
    common: {
      black: '#5F646A',
      white: '#FFFFFF', 
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