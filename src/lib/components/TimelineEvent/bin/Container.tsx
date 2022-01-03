import styled, { Theme } from 'styled-components';

export interface ThemedProps  {
  theme: Theme;
}

export const Container = styled.div` 
  &:after {
    content: '';
    position: absolute; 
    height: 100%; 
    width: 1px;
    top: 12px; 
    left: 0px;  
    border-left: solid 1px; 
    border-color: ${ ({ theme }: ThemedProps ) => theme.timeline.color };
  }
  position: relative;
  padding-left: 20px;
  margin: 30px 0px;  
`; 