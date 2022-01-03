// theme.ts
import { Theme } from 'styled-components'

export const theme: Theme = {
  id: '__default', 
  background: '#FFFFFF', 
  fonts: { 
    main: 'IBM Plex Mono',
    secondary:'IBM Plex Sans',
  },
  border: { 
    color: '#E6E6E6', 
    radius: '4px'
  },
  timeline: {
    color: '#A3ACB9', 
    spacing: {
      top: '10px', 
      bottom: '10px'
    },
    point: {
      spacing: {
        top: '0px', 
        bottom: '2px'
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
        border: '#69B56A',
        background: '#FFFFFF',
        text: '#5F646A', 
      }
    },
    shadow: '2px 2px 4px 0px rgba(0,0,0, 0.2)',
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