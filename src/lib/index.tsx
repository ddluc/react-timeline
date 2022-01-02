import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Theme } from "styled-components";

import GlobalFonts from '../theme/fonts';
import { theme as DEFAULT_THEME } from '../theme/default';

import { logBuild } from './util';

import { Timeline } from './components/Timeline';
import { ITimelineEvent } from './types';

import { getMockEvents } from './mocks';


export interface Props {
  events: ITimelineEvent[];
  title?: string; 
  height?: number; 
  showHeader?: boolean; 
  showDetailPanel?: boolean;
  theme?: Theme; 
}

const ReactTimeline = ({ 
  events,  
  title, 
  height,
  showHeader, 
  showDetailPanel,
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
      />
    </ThemeProvider>
  ); 
  
}

// Expose a render method for development
export const render = (): void => { 
  ReactDOM.render(<ReactTimeline events={getMockEvents(12)} />, document.getElementById('root'));
}

export default { ReactTimeline, render }; 