// theme.ts
import { Theme } from 'styled-components'

export const theme: Theme = {
  id: '__default', 
  background: '#FFFFFF', 
  fonts: { 
    main: 'IBM Plex Sans',
    secondary:'IBM Plex Mono',
  },
  border: { 
    color: '#FFFFFF', 
    radius: '0px'
  },
  timeline: {
    color: '#A3ACB9', 
    spacing: {
      top: '10px', 
      bottom: '100px'
    },
    point: {
      spacing: {
        top: '0px', 
        bottom: '0px'
      }
    }
  }, 
  header: { 
    color: '#313C4C'
  },
  card: {
    colors: {
      text: '#5F646A', 
      background: '#FFFFFF',
      active: { 
        border: '#FFFFFF',
        background: '#FFFFFF',
        text: '#5F646A', 
      }
    },
    shadow: 'none',
    spacing: {
      top: '10px', 
      bottom: '15px'
    }
  }, 
  panel: { 
    colors: { 
      title: '#5F646A',
      subtitle: '#5F646A', 
      content: '#5F646A' 
    },
    padding: { 
      left: '40px',  
      right: '20px' 
    }
  }, 
  breakpoints: { 
    lg: '1200px', 
    md: '1040px', 
    sm: '720px', 
    xs: '400px'
  }
}