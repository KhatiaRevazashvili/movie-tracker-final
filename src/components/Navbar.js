
import React from 'react'; 
import { Link } from 'react-router-dom';
import './navbar.css';  
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h1>Movie Tracker</h1>
      </div>
      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/watchlist">Watchlist</Link>
      </div>
    </nav>
  );
};

export default Navbar;
