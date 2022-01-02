import styled, { Theme } from 'styled-components';

export interface Props { }; 

export interface ThemedProps extends Props {
  theme: Theme;
}

export const LeftPanel = styled.div<Props>`
  width: 500px; 
`; 