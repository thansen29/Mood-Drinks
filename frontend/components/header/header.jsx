import React from 'react';
import * as _ from 'lodash';
// import SearchResultItem from './search_result_item';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: '',
      searchResults: [],
      selected: false,
      playingSong: ''
    };

    this.timer = null;

    this.handleChange = this.handleChange.bind(this);
    this.triggerSearch = this.triggerSearch.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.fetchGenres = this.fetchGenres.bind(this);
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

  triggerSearch() {
    this.props.searchTunes(this.state.searchField)
      .then((response) => {
        const songData = response.data.results.slice(0, 5);
        this.setState({ searchResults: songData });
      });
  }

  handleSelection(item) {
    return () => {
      const details = `${item.trackName} by ${item.artistName}`;
      this.setState({ searchField: details, searchResults: [], selected: true, playingSong: item.previewUrl });
    }
  }

  fetchGenres(e) {
    e.preventDefault();
    this.setState({ selected: false, searchField: '' })
    const array = this.state.searchField.split('by ');
    const artist = array[array.length-1];
    this.props.fetchGenres(artist);
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

      {/* <audio controls>
        <source src="https://p.scdn.co/mp3-preview/5597144cc3b18d706d3cd7ee9e1802af6dcaddd4?cid=7c4536cf355f48158c3b16701da1d677" type="audio/mp3" />        
      </audio>  */}

        <label className="input-label">
          What are you listening to?
        </label>

        <form
          className="container"
          onSubmit={ this.fetchGenres }>

          <div className="input-wrapper">
            <input
              className="search-field"
              value={ this.state.searchField }
              onChange={ this.handleChange('searchField') } />

            <button
              className={ this.state.selected ? "submit-button" : "submit-button-disabled" }
              disabled={ !this.state.selected }>
              Find me drinks!
            </button>
            
          </div>

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
