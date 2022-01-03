import styled, { Theme } from 'styled-components';

export interface ContainerProps { 
  icon: string
}

export interface ThemedProps extends ContainerProps {
  theme: Theme;
}

export const Point = styled.div`
  display: flex;
  padding-top: ${ ({ theme }: ThemedProps ) => theme.timeline.point.spacing.top };
  padding-bottom: ${ ({ theme }: ThemedProps ) => theme.timeline.point.spacing.bottom };
  > svg {
    fill: ${ ({ theme } : ThemedProps) => theme.timeline.color }
  }
`; 
