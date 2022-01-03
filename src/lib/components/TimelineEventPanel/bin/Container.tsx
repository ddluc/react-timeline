import styled, { Theme } from 'styled-components';

export interface ThemedProps {
  theme: Theme;
}

export const Container = styled.div`
  border-left: solid 1px; 
  padding-top: 0px; 
  padding-bottom: 0px; 
  padding-right: ${({ theme }: ThemedProps ) => theme.panel.padding.right }; 
  padding-left: ${({ theme }: ThemedProps ) => theme.panel.padding.left }; 
  height: 95%; 
  border-color: ${({ theme }: ThemedProps ) => theme.border.color }; 
`; 