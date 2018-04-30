import { connect } from 'react-redux';
import { searchTunes, fetchGenres } from '../../actions/search_actions';
import HeaderComponent from './header';

const mapStateToProps = state => {
  debugger
  return {
    searchResults: state.songs.searchResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchTunes: (params) => dispatch(searchTunes(params)),
    fetchGenres: (artist) => dispatch(fetchGenres(artist))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
