// theme.ts
import { Theme } from 'styled-components'

export const theme: Theme = {
  id: '__default', 
  fonts: { 
    main: 'IBM Plex Sans',
    secondary:'IBM Plex Mono',
  },
  border: { 
    color: '#1E526B', 
    radius: '12px'
  },
  timeline: {
    color: '#2D7CA1'
  }, 
  header: { 
    color: '#E6E6E6'
  },
  card: {
    colors: {
      text: '#5F646A', 
      background: '#E3ECFA', 
      active: {
        border: '#42B7ED', 
        background: '#42B7ED', 
        text: '#FFFFFF'
      }
    },
    shadow: '2px 2px 4px 0px rgba(0,0,0, 0.2)',
  }, 
  panel: { 
    colors: { 
      title: '#E6E6E6',
      subtitle: '#E6E6E6', 
      content: '#E6E6E6' 
    },
    padding: { 
      left: '40px',  
      right: '20px' 
    }
  }, 
  background: '#09181F', 
  breakpoints: { 
    lg: '1200px', 
    md: '1040px', 
    sm: '720px', 
    xs: '400px'
  }
}