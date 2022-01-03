import styled, { Theme } from 'styled-components';

export interface ThemedProps  {
  theme: Theme;
}

export const Condensed = styled.li` 
  display: flex; 
  flex-direction: column; 
  justify-content: flex-start;
  position: relative;
  margin-top: ${ ({ theme }: ThemedProps ) => theme.timeline.spacing.top};
  margin-bottom: ${ ({ theme }: ThemedProps ) => theme.timeline.spacing.bottom };

  > h3 {
    font-family: ${ ({ theme }: ThemedProps ) => theme.fonts.main };
    color: ${ ( { theme }: ThemedProps ) => theme.card.colors.text };
    text-align: left; 
    font-size: 16px; 
    font-weight: bold; 
    margin: 0px; 
  }

  > span {
    font-family: ${ ({ theme }: ThemedProps ) => theme.fonts.main };
    color: ${ ( { theme }: ThemedProps ) => theme.card.colors.text };
    font-size: 12px; 
    font-weight: normal; 
  }

`; 