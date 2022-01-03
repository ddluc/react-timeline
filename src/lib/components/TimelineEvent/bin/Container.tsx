import styled, { Theme } from 'styled-components';

export interface ThemedProps  {
  theme: Theme;
}

export const Container = styled.div` 
  display: flex; 
  flex-direction: row; 
  justify-content: flex-start;
  position: relative;
  margin: 10px 0px 0px 0px;  
`; 