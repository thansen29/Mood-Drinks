import React from 'react';
import { connect } from 'react-redux';
import { searchTunes } from '../actions/search_actions';

const mapStateToProps = state => {
  return {
    searchResults: state.songs.searchResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchTunes: (params) => dispatch(searchTunes(params))
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: '',
      timer: 0,
      searchResults: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.triggerSearch = this.triggerSearch.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  componentWillReceiveProps(newProps) {
    debugger
    if (newProps.searchResults) {
      this.setState({ searchResults: newProps.searchResults });
    }
  }

  triggerSearch() {
    this.props.searchTunes(this.state.searchField);
  }

  render() {
    return (
      <header className="header">

        <label className="input-label">
          What are you listening to?
        </label>

        <input
          className="search-field"
          value={ this.state.searchField }
          onChange={ this.handleChange('searchField') } />

        <button onClick={ this.triggerSearch }>Click me</button>


      </header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
