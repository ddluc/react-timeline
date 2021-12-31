import React from 'react';
import ReactDOM from 'react-dom';

const ReactTimeline = (): JSX.Element => (
  <div>React Timeline</div>
); 

// Expose a render method for development
export const render = (): void => { 
  ReactDOM.render(<ReactTimeline />, document.getElementById('root'));
}

export default { ReactTimeline, render }; 

