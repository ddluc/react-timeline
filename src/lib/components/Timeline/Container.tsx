import styled, { Theme } from 'styled-components';

export interface Container { }; 

export interface ThemedProps extends Container {
  theme: Theme;
}

export const Container = styled.div`
  
`; 

