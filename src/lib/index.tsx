import React from 'react';
import { ThemeProvider, Theme } from "styled-components";

import GlobalFonts from '../theme/fonts';
import { theme as DEFAULT_THEME } from '../theme/default';

import { logBuild } from './util';
import { isSkeletonProps } from './types';

import { 
  Timeline, 
  Props as TimelineProps, 
} from './components/Timeline';

export interface Props extends TimelineProps {
  isLoading?:boolean; 
  theme?: Theme; 
}

export const ReactTimeline = ({ 
  theme = DEFAULT_THEME, 
  isLoading,
  ...props
}: Props): JSX.Element => {

  React.useEffect((() => {
    logBuild(); 
  }), []); 

  return (
    <ThemeProvider theme={theme}>
      { theme.id === '__default' && <GlobalFonts /> }
      { isLoading ? <Timeline {...props} skeleton /> : <Timeline {...props} /> }
    </ThemeProvider>
  ); 
  
}