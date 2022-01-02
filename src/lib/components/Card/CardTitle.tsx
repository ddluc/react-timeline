import styled, { Theme } from 'styled-components';

export interface ThemedProps {
  theme: Theme;
}

export const CardTitle = styled.div`
  > h3 {
    font-family: ${ ({ theme }: ThemedProps ) => theme.fonts.mono };
    color: ${ ( { theme }: ThemedProps ) => theme.palette.common.charcoal };
    text-align: left; 
    font-size: 16px; 
    font-weight: bold; 
    margin: 0px; 
  }
`; 