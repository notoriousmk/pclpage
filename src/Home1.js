import * as React from 'react';
import './App.css';
import Header from './Header1.js';


export default function Home (){
return (
    <div className="App">
     <Header></Header>
      <div className="homepage" style={{ width: '1002.37px', height: '897px' }}>
        {/* Include Header component here */}
        <section className="main-section">
          <h1>Lessons and insights from 8 years</h1>
          <p>Where to grow your business as a photographer site or social media?</p>
          <a href="#" className="register-btn">Register</a>
        </section>
        <section className="clients-section">
          <h3>Our Clients</h3>
          <p>We have been working with some Fortune 500+ clients</p>
        </section>
        <section className="community-section">
          <h2>Manage your entire community in a single system</h2>
          <p>Who is Nextcent suitable for?</p>
          <div className="info-blocks">
            <div className="info-block">
              <h3>Membership Organisations</h3>
              <p>Our membership management system provides full automation of customer renewal and joining processes.</p>
            </div>
            <div className="info-block">
              <h3>National Associations</h3>
              <p>Our membership management software provides all aspects of association recruitment, retention & management.</p>
            </div>
            <div className="info-block">
              <h3>Clubs And Groups</h3>
              <p>Our membership management software provides full automation of member renewal and joining processes.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}