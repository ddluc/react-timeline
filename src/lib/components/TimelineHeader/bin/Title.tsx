import styled, { Theme } from 'styled-components';


export interface ThemedProps {
  theme: Theme;
}

export const Title = styled.h2`
  padding-bottom: 10px; 
  font-family: ${({ theme }: ThemedProps ) => theme.fonts.main }; 
  color: ${({ theme }: ThemedProps ) => theme.header.color }; 
  border-bottom: solid 1px; 
  border-color: ${({ theme }: ThemedProps ) => theme.border.color }; 
  margin: 0px; 
`; 