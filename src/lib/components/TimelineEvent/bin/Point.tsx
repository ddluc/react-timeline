import styled, { Theme } from 'styled-components';

export interface ContainerProps { 
  icon: string
}

export interface ThemedProps extends ContainerProps {
  theme: Theme;
}

export const Point = styled.div`
  margin: 0px; 
  > svg {
    fill: ${ ({ theme } : ThemedProps) => theme.timeline.color }
  }
`; 
