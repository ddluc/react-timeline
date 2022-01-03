import styled, { Theme } from 'styled-components';

export interface ThemedProps {
  theme: Theme;
}

export const Container = styled.div`
  border-left: solid 1px; 
  padding: 0px 20px 0px 40px; 
  height: 100%; 
  border-color: ${({ theme }: ThemedProps ) => theme.border.color }; 
`; 