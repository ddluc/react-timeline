// Import the main app package
import Package from './lib'; 


// If the package is in development mode, rende
if (process.env.NODE_ENV === 'development') {
  // Render the app
  Package.render(); 
}


export default Package.ReactTimeline; 
