// styled.d.ts
import 'styled-components';

interface Palette {
  main: string;
  contrastText: string;
}

interface FontFamily { 
  regular: string; 
  light?: string;
  bold?: string;
  italic?: string;
}

declare module 'styled-components' {

  export interface Theme {
    borderRadius: string;
    fonts: {
      mono: FontFamily;
      sans: FontFamily;
    };
    palette: {
      common: {
        black: string;
        white: string;
        grey: string;
      };
      primary: Palette;
      secondary: Palette;
   };
  }

}