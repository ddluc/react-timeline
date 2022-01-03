import styled, { Theme } from 'styled-components';

export interface Props { 
  active?: Boolean; 
}; 

interface ThemedProps extends Props {
  theme: Theme;
}

export const CardTitle = styled.div<Props>`
  > h3 {
    font-family: ${ ({ theme }: ThemedProps ) => theme.fonts.main };
    color: ${ ( { active, theme }: ThemedProps ) => 
      (active ? theme.card.colors.active.text : theme.card.colors.text) 
    };
    text-align: left; 
    font-size: 16px; 
    font-weight: bold; 
    margin: 0px; 
  }
`; 