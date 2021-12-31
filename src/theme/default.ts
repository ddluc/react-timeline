// theme.ts
import { Theme } from 'styled-components'

export const theme: Theme = {
  borderRadius: '4px',
  fonts: { 
    mono: { 
      regular: 'IBM Plex Mono'
    }, 
    sans: { 
      regular: 'IBM Plex Sans'
    }
  },
  palette: {
    common: {
      black: '#222831',
      white: '#ffffff'
    },
    primary: {
      main: '#726a95',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#709fb0',
      contrastText: '#ffffff'
    }
  }
}