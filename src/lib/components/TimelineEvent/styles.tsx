import { Props } from './types';
import styled, { Theme } from 'styled-components';

interface EventContainerProps { 
  icon: string
}

interface ThemedEventContainerProps extends EventContainerProps {
  theme: Theme;
}

export const EventContainer = styled.div<EventContainerProps>`
  &:before { 
    content: '';
    background: url("${ ({ icon }: ThemedEventContainerProps) => icon }"); 
    background-repeat: no-repeat;
    background-position: center; 
    background-size: cover; 
    height: 14px; 
    width: 14px; 
    position: absolute; 
    top: -6px; 
    left: -6px; 

  }; 
  &:after {
    content: '';
    position: absolute; 
    height: 100%; 
    width: 1px;
    top: 10px; 
    left: 0px;  
    border-left: solid 1px; 
    border-color: ${ ({ theme }: ThemedEventContainerProps ) => theme.palette.primary.main };
  }
  position: relative;
  padding-left: 20px;
  margin: 30px 0px;  
`; 


type CardProps = Pick<Props, 'active' | 'color' | 'backgroundColor' >; 

interface ThemedCardProps extends CardProps {
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
  box-shadow: ${ ({ theme, active }: ThemedCardProps ) => 
    (active ? 'rgba(0, 0, 0, 0.5) 0px 2px 4px 0px' : 'none' )
  };
`; 

export const Title = styled.div`
  > h3 {
    font-family: ${ ({ theme }: ThemedCardProps ) => theme.fonts.mono };
    color: ${ ( { theme }: ThemedCardProps ) => theme.palette.common.charcoal };
    font-size: 16px; 
    font-weight: bold; 
    margin: 0px; 
  }
`; 

export const Description = styled.div`
  > p {
    font-family: ${ ({ theme }: ThemedCardProps ) => theme.fonts.mono };
    color: ${ ( { theme }: ThemedCardProps ) => theme.palette.common.charcoal };
    font-size: 12px; 
    font-weight: normal; 
  }
`; 

export const Date = styled.div`
  > span {
    font-family: ${ ({ theme }: ThemedCardProps ) => theme.fonts.mono };
    color: ${ ( { theme }: ThemedCardProps ) => theme.palette.common.charcoal };
    font-size: 12px; 
    font-weight: normal; 
  }
`; 