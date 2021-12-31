import React from 'react';
import ReactDOM from 'react-dom';

import GlobalFonts from '../theme/fonts';

const ReactTimeline = (): JSX.Element => (
  <>
    <GlobalFonts />
    <div>React Timeline</div>
  </>
); 

// Expose a render method for development
export const render = (): void => { 
  ReactDOM.render(<ReactTimeline />, document.getElementById('root'));
}

export default { ReactTimeline, render }; 

