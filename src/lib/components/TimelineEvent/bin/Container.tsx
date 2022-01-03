import styled, { Theme } from 'styled-components';

export interface ThemedProps  {
  theme: Theme;
}

export const Container = styled.li` 
  display: flex; 
  flex-direction: row; 
  justify-content: flex-start;
  position: relative;
  margin-top: ${ ({ theme }: ThemedProps ) => theme.timeline.spacing.top};
  margin-bottom: ${ ({ theme }: ThemedProps ) => theme.timeline.spacing.bottom };
`; 