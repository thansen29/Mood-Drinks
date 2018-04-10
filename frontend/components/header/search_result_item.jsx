import React from 'react';

class SearchResultItem extends React.Component {
  constructor(props) {
    super(props);
  }

  selectItem() {
    return e => {
      debugger
      this.props.handleSelection(item);
    }
  }

  render() {
    const { artworkUrl30, artistName, trackName, item } = this.props;
    debugger
    return (
      <div
        onClick={ this.selectItem }>

        <span>
          <img src={ artworkUrl30 } />
        </span>

        <span>
          { artistName }
        </span>

        <span>
          { trackName }
        </span>
      </div>
    );
  }
}

export default SearchResultItem;
