import React from 'react';
import { ThemeProvider, Theme } from "styled-components";

import GlobalFonts from '../theme/fonts';
import { theme as DEFAULT_THEME } from '../theme/default';

import { logBuild } from './util';
import { isSkeletonProps } from './types';

import { 
  Timeline, 
  Props as TimelineProps, 
  SkeletonProps as TimelineSkeletonProps
} from './components/Timeline';

export interface Props extends TimelineProps {
  theme?: Theme; 
}

export const ReactTimeline = (props: Props | TimelineSkeletonProps): JSX.Element => {

  if (isSkeletonProps(props)) {
    return <Timeline skeleton {...props} />
  }

  const { theme = DEFAULT_THEME } = props; 

  React.useEffect((() => {
    logBuild(); 
  }), []); 

  return (
    <ThemeProvider theme={theme}>
      { theme.id === '__default' && <GlobalFonts /> }
      <Timeline {...props} />
    </ThemeProvider>
  ); 
  
}