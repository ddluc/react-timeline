import styled, { Theme } from 'styled-components';

export interface ThemedProps  {
  theme: Theme;
}

export const Line = styled.div` 
  flex-grow: 1; 
  width: 1px;
  border-left: solid 1px; 
  border-color: ${ ({ theme }: ThemedProps ) => theme.timeline.color };
`; 