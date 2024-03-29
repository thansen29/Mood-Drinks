import React from 'react';
import * as _ from 'lodash';

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
    this.props.startLoading();
    this.props.searchTunes(this.state.searchField)
      .then((response) => {
        this.props.stopLoading();
        const songData = response.data.results.slice(0, 5);
        this.setState({ searchResults: songData });
      });
  }

  handleSelection(item) {
    return () => {
      const details = `${item.trackName} by ${item.artistName}`;
      this.setState({ searchField: details, searchResults: [], selected: true, playingSong: item.previewUrl });

      const song = `${item.trackName} ${item.artistName}`;
      this.props.fetchSong(song, details);
      this.props.startLoading();
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

          <div className="input-wrapper">
            <input
              className="search-field"
              value={ this.state.searchField }
              onChange={ this.handleChange('searchField') } />
            
          </div>

          <div className="results-wrapper">
          
            {/* { this.props.loading
            ?
              <div className="loader">Loading...</div>  
            : 
              <ul className="list-ul">
                { items }
              </ul>
            } */}

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
