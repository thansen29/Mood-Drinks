import React from 'react';
import * as _ from 'lodash';
import SearchResultItem from './search_result_item';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: '',
      searchResults: []
    };

    this.timer = null;

    this.handleChange = this.handleChange.bind(this);
    this.triggerSearch = this.triggerSearch.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleChange(field) {
    return e => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.triggerSearch();
      }, 500);
      this.setState({ [field]: e.target.value });
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ searchResults: newProps.searchResults });
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

        <form
          className="container">

          <input
            className="search-field"
            value={ this.state.searchField }
            onChange={ this.handleChange('searchField') } />

          <div className="results-wrapper">
            <ul className="list-ul">
              { items }
            </ul>
          </div>

        </form>

      </header>
    );
  }
}

export default Header;
