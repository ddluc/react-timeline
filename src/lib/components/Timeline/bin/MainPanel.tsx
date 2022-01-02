import styled, { Theme } from 'styled-components';

export interface Props { 
  height: number;
  width: number; 
}; 

export interface ThemedProps extends Props {
  theme: Theme;
}

export const MainPanel = styled.div<Props>`
  display: flex; 
  flex-wrap: no-wrap;
  height: ${ ({ height }: ThemedProps ) => `${height}px` };
  width: ${ ({ width }: ThemedProps ) => (width ? `${width}px` : '100%' )};
`;