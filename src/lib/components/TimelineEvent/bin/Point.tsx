import styled, { Theme } from 'styled-components';

export interface ContainerProps { 
  icon: string
}

export interface ThemedProps extends ContainerProps {
  theme: Theme;
}

export const Point = styled.div`
  height: 14px; 
  width: 14px; 
  top: -6px; 
  left: -6px;   
  position: absolute; 
  > svg {
    fill: ${ ({ theme } : ThemedProps) => theme.timeline.color }
  }
`; 
