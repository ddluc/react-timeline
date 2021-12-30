import React from 'react';
import ReactDOM from 'react-dom';

const ReactTimeline = () => (
  <div>React Timeline</div>
); 

// Expose a render method for development
export const render = () => { 
  ReactDOM.render(<ReactTimeline />, document.getElementById('root'));
}

export default { ReactTimeline, render }; 

