import { DateRange } from './types';

export const logBuild = () => { 
  console.log('[react-timeline]: Render Build v0.0.1. See https://github.com/ddluc/react-timeline for for more information'); 
}; 

export const renderDate = (date: Date | DateRange): string => { 
  if (date instanceof Date) {
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`; 
  } else {
    return `${date.start.toLocaleDateString()} - ${date.end.toLocaleDateString()}`;
  }
}; 