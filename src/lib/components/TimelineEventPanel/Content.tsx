import styled, { Theme } from 'styled-components';


export interface ThemedProps {
  theme: Theme;
}

export const Content = styled.div`
  max-width: 100%; 
  font-family: ${({ theme }: ThemedProps ) => theme.fonts.mono }; 
  font-size: 14px; 
  font-weight: normal;
  line-height: 20px; 
`; 