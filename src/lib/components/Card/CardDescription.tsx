import styled, { Theme } from 'styled-components';

export interface ThemedProps {
  theme: Theme;
}

export const CardDescription = styled.div`
  > p {
    font-family: ${ ({ theme }: ThemedProps ) => theme.fonts.mono };
    color: ${ ( { theme }: ThemedProps ) => theme.palette.common.charcoal };
    text-align: left; 
    font-size: 12px; 
    font-weight: normal; 
  }
`; 
