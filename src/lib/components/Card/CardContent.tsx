import React from 'react';
import styled, { Theme } from 'styled-components';

interface ThemedProps {
  theme: Theme;
}

export const CardContent = styled.div`
  display: none;
  @media screen and (max-width: ${ ({ theme }: ThemedProps ) => theme.breakpoints.sm }) {
    display: block;   
  } 
`;

export interface Props { 
  children: React.ReactNode
}