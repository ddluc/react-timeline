import styled, { Theme } from 'styled-components';

export interface Props { }; 

export interface ThemedProps extends Props {
  theme: Theme;
}

export const RightPanel = styled.div<Props>`
  @media screen and (max-width: ${ ({ theme }: ThemedProps ) => theme.breakpoints.sm }) {
    display: none;   
  } 
`; 