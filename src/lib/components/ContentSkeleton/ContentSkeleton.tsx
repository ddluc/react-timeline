import styled, { Theme } from 'styled-components';
import { skeletonAnimation } from './Animation'; 

export interface Props { 
  width: string; 
  height: string; 
  spacing?: [number, number]; 
}; 

interface ThemedProps extends Props { 
  theme: Theme; 
}

const ContentSkeleton = styled.div<Props>`

  width: ${ ({ width }: ThemedProps ) => width};  
  height: ${ ({ height }: ThemedProps ) => height};  
  margin-top: ${ ({ spacing = [10, 10] }: ThemedProps ) => spacing[0]}px;  
  margin-bottom: ${ ({ spacing = [10, 10] }: ThemedProps ) => spacing[1]}px;  

  position: relative;
  padding: 0;
  border: none;
  background-color: #EBEBEB; 
  box-shadow: none;
  pointer-events: none;

  &:hover,
  &:focus,
  &:active {
    border: none;
    cursor: default;
    outline: none;
  }

  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: 3000ms ease-in-out ${skeletonAnimation} infinite;
    background: #adadad; 
    content: '';
    will-change: transform-origin, transform, opacity;
  }

`; 

export default ContentSkeleton; 