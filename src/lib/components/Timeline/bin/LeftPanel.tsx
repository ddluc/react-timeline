import styled, { Theme } from 'styled-components';

export interface Props { }; 

export interface ThemedProps extends Props {
  theme: Theme;
}

export const LeftPanel = styled.div<Props>`
  width: 500px; 
  height: 100%; 
  overflow: scroll; 
  padding-left: 10px; 
  flex-shrink: 0; 
`; 