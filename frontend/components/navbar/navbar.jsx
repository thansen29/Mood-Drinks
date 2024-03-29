import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetGenres } from '../../actions/drink_actions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.resetStore = this.resetGenres.bind(this);
  }

  resetGenres() {
    this.props.resetGenres();
  }

  render() {
    return (
      <nav className="navbar">
        <span>
          <Link to="/">
            <img
              onClick={ this.resetStore }
              className="main-logo"
              src="/images/main-logo.png"
              alt="main logo" />
          </Link>
        </span>
  
        <span className="small-logo">
          <img
            className="small-logo"
            src="/images/small-logo.png"
            alt="main logo" />
        </span>
      </nav>
    );

  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetGenres: () => dispatch(resetGenres())
  }
}

export default connect(null, mapDispatchToProps)(Navbar);
