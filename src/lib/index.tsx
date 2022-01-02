import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Theme } from "styled-components";

import GlobalFonts from '../theme/fonts';
import { theme as DEFAULT_THEME } from '../theme/default';

import { logBuild } from './util';

import { Timeline } from './components/Timeline';
import { ITimelineEvent } from './types';

import { events as MOCK_EVENTS } from './mocks';


export interface Props {
  events: ITimelineEvent[];
  showHeader?: boolean; 
  title?: string; 
  theme: Theme; 
}

const ReactTimeline = ({ events, showHeader, title, theme }: Props): JSX.Element => {

  React.useEffect((() => {
    logBuild(); 
  }), []); 

  return (
    <ThemeProvider theme={theme}>
      { theme.id === '__default' && <GlobalFonts /> }
      <Timeline showHeader={showHeader} title={title} events={events} />
    </ThemeProvider>
  ); 
  
}

// Expose a render method for development
export const render = (): void => { 
  ReactDOM.render(<ReactTimeline events={MOCK_EVENTS} theme={DEFAULT_THEME}/>, document.getElementById('root'));
}

export default { ReactTimeline, render }; 