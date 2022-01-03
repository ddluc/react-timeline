// styled.d.ts
import 'styled-components';

interface Palette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {

  export interface Theme {
    id?: '__default' | undefined, 
    fonts: {
      main: string, 
      secondary: string, 
    };
    border: { 
      radius: string, 
      color: string
    }; 
    timeline: {
      color: string; 
    }; 
    header: {
      color: string; 
    }
    card: { 
      colors: {
        text: string; 
        background: string; 
        active: { 
          border: string, 
          background: string; 
          text: string;
        }
      }; 
      shadow: string; 
    }; 
    panel: { 
      colors: { 
        title: string; 
        subtitle: string; 
        content: string; 
      }
      padding: { 
        left: string; 
        right: string; 
      }
    }; 
    background: string; 
    breakpoints: {
      lg: string; 
      md: string; 
      sm: string; 
      xs: string; 
    }
  }

}