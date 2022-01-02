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
  width: 430px; 
  min-height: 120px; 
  display: flex; 
  cursor: pointer; 
  flex-direction: column; 
  justify-content: space-between;
  background-color: ${ ({ theme, backgroundColor }: ThemedProps ) => backgroundColor || theme.palette.common.white}; 
  border: solid 1px; 
  border-color: ${ ({ theme, active, color }: ThemedProps ) => 
    (active ? color || theme.palette.secondary.main : theme.palette.common.grey ) 
  };
  border-radius: ${ ({ theme }: ThemedProps ) => theme.borderRadius };
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: ${ ({ theme, active }: ThemedProps ) => 
    (active ? '2px 2px 4px 0px rgba(0,0,0, 0.2) ' : 'none' )
  };
  @media screen and (max-width: ${ ({ theme }: ThemedProps ) => theme.breakpoints.md }) {
    width: 300px; 
  }
  @media screen and (max-width: ${ ({ theme }: ThemedProps ) => theme.breakpoints.sm }) {
    width: auto;   
  } 
`; 

export default Card; 