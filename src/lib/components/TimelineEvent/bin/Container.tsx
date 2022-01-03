import styled, { Theme } from 'styled-components';

export interface ContainerProps { 
  icon: string
}

export interface ThemedProps extends ContainerProps {
  theme: Theme;
}

export const Container = styled.div<ContainerProps>`
  &:before { 
    content: '';
    background: url("${ ({ icon }: ThemedProps) => icon }"); 
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
    border-color: ${ ({ theme }: ThemedProps ) => theme.timeline.color };
  }
  position: relative;
  padding-left: 20px;
  margin: 30px 0px;  
`; 