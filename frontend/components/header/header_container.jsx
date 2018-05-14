import { connect } from 'react-redux';
import { fetchGenres, searchTunes, fetchSong } from '../../actions/search_actions';
import HeaderComponent from './header';

const mapDispatchToProps = dispatch => {
  return {
    fetchGenres: (artist) => dispatch(fetchGenres(artist)),
    searchTunes: (params) => dispatch(searchTunes(params)),
    fetchSong: (song, details) => dispatch(fetchSong(song, details)),
  }
}

export default connect(null, mapDispatchToProps)(HeaderComponent);
