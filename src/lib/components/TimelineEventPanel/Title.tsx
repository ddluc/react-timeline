import styled, { Theme } from 'styled-components';


export interface ThemedProps {
  theme: Theme;
}

export const Title = styled.h3`
  padding-bottom: 10px; 
  font-size: 28px; 
  font-weight: bold;
  font-family: ${({ theme }: ThemedProps ) => theme.fonts.mono }; 
  color: ${({ theme }: ThemedProps ) => theme.palette.common.charcoal }; 
  margin: 20px 0px 10px 0px; 
`; 