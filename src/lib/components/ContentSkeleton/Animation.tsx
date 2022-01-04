import { keyframes } from 'styled-components';

export const skeletonAnimation = keyframes`
    0% {
    opacity: 0.3;
    transform: scaleX(0);
    transform-origin: left;
  }
  20% {
    opacity: 1;
    transform: scaleX(1);
    transform-origin: left;
  }
  28% {
    transform: scaleX(1);
    transform-origin: right;
  }
  51% {
    transform: scaleX(0);
    transform-origin: right;
  }
  58% {
    transform: scaleX(0);
    transform-origin: right;
  }
  82% {
    transform: scaleX(1);
    transform-origin: right;
  }
  83% {
    transform: scaleX(1);
    transform-origin: left;
  }
  96% {
    transform: scaleX(0);
    transform-origin: left;
  }
  100% {
    opacity: 0.3;
    transform: scaleX(0);
    transform-origin: left;
  }
`; 


