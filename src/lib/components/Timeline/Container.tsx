import styled, { Theme } from 'styled-components';

export interface Props { 
  height: number
}; 

export interface ThemedProps extends Props {
  theme: Theme;
}

export const Container = styled.div<Props>`
  display: flex; 
  flex-wrap: wrap;
  height: ${ ({ height }: ThemedProps ) => height }px;
`;