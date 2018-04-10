import React from 'react';
import * as _ from 'lodash';
import SearchResultItem from './search_result_item';

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
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.searchResults) {
      this.setState({ searchResults: newProps.searchResults });
    }
  }

  triggerSearch() {
    this.props.searchTunes(this.state.searchField);
  }

  handleSelection(item) {
    return () => {
      const details = `${item.trackName} by ${item.artistName}`;
      this.setState({ searchField: details, searchResults: [] });
    }
  }

  render() {
    const { searchResults } = this.state;
    const items = _.map(searchResults, (item, idx) => {
      return (
        <li
          className="list-item"
          key={ idx }
          onClick={ this.handleSelection(item) }>

          <span>
            <img src={ item.artworkUrl30 } />
          </span>

          <span>
            { item.artistName }
          </span>

          <span>
            { item.trackName }
          </span>
        </li>
      )
    });

    return (
      <header className="header">

        <label className="input-label">
          What are you listening to?
        </label>

        <button onClick={ this.triggerSearch }>Click me</button>

        <div className="container">

          <input
            className="search-field"
            value={ this.state.searchField }
            onChange={ this.handleChange('searchField') } />

          <div className="results-wrapper">
            <ul className="list-ul">
              { items }
            </ul>
          </div>

        </div>

      </header>
    );
  }
}

export default Header;
