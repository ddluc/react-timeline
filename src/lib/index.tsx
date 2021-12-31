import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";

import GlobalFonts from '../theme/fonts';
import { theme } from '../theme/default';

import { Button } from './components/Button'; 
import { logBuild } from './util';


const ReactTimeline = (): JSX.Element => {

  React.useEffect((() => {
    logBuild(); 
  }), []); 

  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <div>React Timeline</div>
      <Button label='Test' />
    </ThemeProvider>
  ); 
  
}


// Expose a render method for development
export const render = (): void => { 
  ReactDOM.render(<ReactTimeline />, document.getElementById('root'));
}

export default { ReactTimeline, render }; 

