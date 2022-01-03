import styled, { Theme } from 'styled-components';


export interface ThemedProps {
  theme: Theme;
}

export const SubTitle = styled.h5`
  font-family: ${({ theme }: ThemedProps ) => theme.fonts.main }; 
  font-size: 17px; 
  font-weight: normal;
  color: ${({ theme }: ThemedProps ) => theme.panel.colors.subtitle }; 
  margin: 0px 0px 20px 0px; 
`;