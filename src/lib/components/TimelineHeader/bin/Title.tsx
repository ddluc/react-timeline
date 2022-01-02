import styled, { Theme } from 'styled-components';


export interface ThemedProps {
  theme: Theme;
}

export const Title = styled.h2`
  padding-bottom: 10px; 
  font-family: ${({ theme }: ThemedProps ) => theme.fonts.mono }; 
  color: ${({ theme }: ThemedProps ) => theme.palette.common.black }; 
  border-bottom: solid 1px; 
  border-color: ${({ theme }: ThemedProps ) => theme.palette.common.grey }; 
  margin: 0px; 
`; 