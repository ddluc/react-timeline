// Import the main app package
import * as Package from './lib'; 

// Render the component for development purposes
if (process.env.NODE_ENV === 'development') {
  // Inject the package into the html file
  Package.render(); 
}

export default Package.ReactTimeline; 
