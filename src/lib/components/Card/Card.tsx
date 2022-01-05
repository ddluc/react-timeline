import styled, { Theme } from 'styled-components';

export interface Props { 
  active?: Boolean; 
  backgroundColor: string; 
  color?: string;
}; 

export interface ThemedProps extends Props {
  theme: Theme;
}

const Card = styled.button<Props>`
  padding: 10px; 
  margin-top: ${ ({ theme }: ThemedProps ) => theme.card.spacing.top};
  margin-bottom: ${ ({ theme }: ThemedProps ) => theme.card.spacing.bottom };
  width: ${ ({ theme }: ThemedProps ) => theme.card.width || '430px' };
  min-height: 120px; 
  display: flex; 
  cursor: pointer; 
  flex-direction: column; 
  justify-content: space-between;
  background-color: ${ ({ theme, active, backgroundColor }: ThemedProps ) => 
    (active ? backgroundColor || theme.card.colors.active.background : theme.card.colors.background ) 
  }; 
  border: solid 1px; 
  border-color: ${ ({ theme, active, color }: ThemedProps ) => 
    (active ? color || theme.card.colors.active.border : theme.border.color ) 
  };
  border-radius: ${ ({ theme }: ThemedProps ) => theme.border.radius };
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: ${ ({ theme, active }: ThemedProps ) => 
    (active ? theme.card.shadow : 'none' )
  };
  @media screen and (max-width: ${ ({ theme }: ThemedProps ) => theme.breakpoints.md }) {
    width: 300px; 
  }
  @media screen and (max-width: ${ ({ theme }: ThemedProps ) => theme.breakpoints.sm }) {
    width: auto;   
  } 
`; 

export default Card; 