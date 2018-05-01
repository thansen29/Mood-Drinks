import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <span>
        <Link to="/">
          <img
            className="main-logo"
            src="http://www.copperandkings.com/wordpress/wp-content/uploads/2015/11/logo-orange.png"
            alt="main logo" />
        </Link>
      </span>

      <span className="small-logo">
        <img
          className="small-logo"
          src="http://copperandkings.com/wordpress/wp-content/uploads/2015/11/potstill.png"
          alt="main logo" />
      </span>
    </nav>
  );
}

export default Navbar;
