import styled, { Theme } from 'styled-components';

export interface Props { }; 

export interface ThemedProps extends Props {
  theme: Theme;
}

export const LeftPanel = styled.ul<Props>`
  height: 100%; 
  overflow: scroll; 
  padding-left: 10px; 
  padding-right: 40px; 
  margin: 0px; 
  flex-shrink: 0; 
  @media screen and (max-width: ${ ({ theme }: ThemedProps ) => theme.breakpoints.sm }) {
    width: 95%;
  } 
  @media screen and (max-width: ${ ({ theme }: ThemedProps ) => theme.breakpoints.xs }) {
    width: 85%;
  } 
`; 