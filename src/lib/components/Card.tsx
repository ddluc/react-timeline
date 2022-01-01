import styled, { Theme } from 'styled-components';

export interface CardProps { 
  active?: Boolean; 
  backgroundColor: string; 
  color?: string;
}; 

export interface ThemedCardProps extends CardProps {
  theme: Theme;
}

export const Card = styled.div<CardProps>`
  padding: 10px; 
  width: 430px; 
  min-height: 120px; 
  display: flex; 
  flex-direction: column; 
  justify-content: space-between;
  background-color: ${ ({ theme, backgroundColor }: ThemedCardProps ) => backgroundColor || theme.palette.common.white}; 
  border: solid 1px; 
  border-color: ${ ({ theme, active, color }: ThemedCardProps ) => 
    (active ? color || theme.palette.secondary.main : theme.palette.common.grey ) 
  };
  border-radius: ${ ({ theme }: ThemedCardProps ) => theme.borderRadius };
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: ${ ({ theme, active }: ThemedCardProps ) => 
    (active ? '2px 2px 4px 0px rgba(0,0,0, 0.2) ' : 'none' )
  };
`; 

export const CardTitle = styled.div`
  > h3 {
    font-family: ${ ({ theme }: ThemedCardProps ) => theme.fonts.mono };
    color: ${ ( { theme }: ThemedCardProps ) => theme.palette.common.charcoal };
    font-size: 16px; 
    font-weight: bold; 
    margin: 0px; 
  }
`; 

export const CardDescription = styled.div`
  > p {
    font-family: ${ ({ theme }: ThemedCardProps ) => theme.fonts.mono };
    color: ${ ( { theme }: ThemedCardProps ) => theme.palette.common.charcoal };
    font-size: 12px; 
    font-weight: normal; 
  }
`; 

export const CardDate = styled.div`
  > span {
    font-family: ${ ({ theme }: ThemedCardProps ) => theme.fonts.mono };
    color: ${ ( { theme }: ThemedCardProps ) => theme.palette.common.charcoal };
    font-size: 12px; 
    font-weight: normal; 
  }
`; 