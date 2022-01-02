// styled.d.ts
import 'styled-components';

interface Palette {
  main: string;
  contrastText: string;
}
declare module 'styled-components' {

  export interface Theme {
    id?: '__default' | undefined, 
    borderRadius: string;
    fonts: {
      mono: string;
      sans: string;
      serif: string; 
    };
    palette: {
      common: {
        black: string;
        white: string;
        grey: string;
        charcoal: string; 
      };
      primary: Palette;
      secondary: Palette;
   };
   breakpoints: {
     lg: string; 
     md: string; 
     sm: string; 
     xs: string; 
   }
  }

}