import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <span>
        <a href="http://www.copperandkings.com">
          <img
            className="main-logo"
            src="http://www.copperandkings.com/wordpress/wp-content/uploads/2015/11/logo-orange.png"
            alt="main logo" />
        </a>
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
