import styled, { Theme } from 'styled-components';

export interface ThemedProps  {
  theme: Theme;
}

export const Separator = styled.div` 
  display: flex;  
  flex-direction: column; 
  align-items: center;
  margin-right: 10px; 
`; 