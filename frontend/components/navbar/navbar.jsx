import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetStore } from '../../actions/drink_actions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.resetStore = this.resetStore.bind(this);
  }

  resetStore() {
    this.props.resetStore();
  }

  render() {
    return (
      <nav className="navbar">
        <span>
          <Link to="/">
            <img
              onClick={ this.resetStore }
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
}

const mapDispatchToProps = dispatch => {
  return {
    resetStore: () => dispatch(resetStore())
  }
}

export default connect(null, mapDispatchToProps)(Navbar);
