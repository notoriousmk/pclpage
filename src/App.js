import * as React from 'react';
import './App.css';
import Home from './Home1.js';

function App() {
  return (
     <div className="container">
      <Home></Home>
     <section className="section-one">
       <h1>The unseen of spending three years at Pixelgrade</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
       <button>Learn More</button>
     </section>

     <section className="section-two">
       <h2>Helping a local business reinvent itself</h2>
       <p>We reached here with our hard work and dedication</p>
       <div className="stats">
         <div className="stat">
           <h3>2,245,341</h3>
           <p>Orders</p>
         </div>
         <div className="stat">
           <h3>46,328</h3>
           <p>Clubs</p>
         </div>
         <div className="stat">
           <h3>828,867</h3>
           <p>Event Bookings</p>
         </div>
         <div className="stat">
           <h3>1,926436</h3>
           <p>Payments</p>
         </div>
       </div>
     </section>

     <section className="section-three">
       <h2>How to design your site footer like we did</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
       <button>Learn More</button>
     </section>

     <footer>
       <img src="/path-to-logo" alt="Logo" />
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
       <div className="social-icons">
         {/* Add social media icons here */}
       </div>
     </footer>
   </div>
 );
}


export default App;
