import * as React from 'react';
import './App.css';

export default function Header(){
    return(
  <header className="header">
  <div className="logo">Pcl</div>
  <nav className="nav-menu">
   <a href="/" className="nav-item">Home</a>
   <a href="/features" className="nav-item">Features</a>
   <a href="/community" className="nav-item">Community</a>
   <a href="/blog" className="nav-item">Blog</a>
   <a href="/pricing" className="nav-item">Pricing</a>
  </nav>
 <button className="register-btn">Register Now →</button>
 </header>
    );
}
