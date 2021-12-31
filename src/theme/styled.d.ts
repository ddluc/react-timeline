// styled.d.ts
import 'styled-components';

interface Palette {
  main: string;
  contrastText: string;
}
declare module 'styled-components' {

  export interface Theme {
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
      };
      primary: Palette;
      secondary: Palette;
   };
  }

}