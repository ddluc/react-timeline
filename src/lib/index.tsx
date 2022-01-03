import React from 'react';
import { ThemeProvider, Theme } from "styled-components";

import GlobalFonts from '../theme/fonts';
import { theme as DEFAULT_THEME } from '../theme/default';

import { logBuild } from './util';

import { Timeline } from './components/Timeline';
import { ITimelineEvent } from './types';

export interface Props {
  events: ITimelineEvent[];
  title?: string; 
  height?: number; 
  width?: number; 
  showHeader?: boolean; 
  showDetailPanel?: boolean;
  icon?: React.ReactNode; 
  theme?: Theme; 
}

export const ReactTimeline = ({ 
  events,  
  title, 
  height,
  width, 
  showHeader, 
  showDetailPanel,
  icon,
  theme = DEFAULT_THEME
}: Props): JSX.Element => {

  React.useEffect((() => {
    logBuild(); 
  }), []); 

  return (
    <ThemeProvider theme={theme}>
      { theme.id === '__default' && <GlobalFonts /> }
      <Timeline 
        title={title} 
        events={events}
        showHeader={showHeader} 
        showDetailPanel={showDetailPanel}
        height={height}
        width={width}
        icon={icon}
      />
    </ThemeProvider>
  ); 
  
}