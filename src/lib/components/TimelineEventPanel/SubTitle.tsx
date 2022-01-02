import styled, { Theme } from 'styled-components';


export interface ThemedProps {
  theme: Theme;
}

export const SubTitle = styled.h5`
  font-family: ${({ theme }: ThemedProps ) => theme.fonts.mono }; 
  font-weight: normal; 
  color: ${({ theme }: ThemedProps ) => theme.palette.common.black }; 
`;