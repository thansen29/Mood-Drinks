import { connect } from 'react-redux';
import { fetchGenres, searchTunes, fetchSong } from '../../actions/search_actions';
import { startLoading, stopLoading } from '../../actions/ui_actions';
import HeaderComponent from './header';

const mapStateToProps = state => {
  return {
    loading: state.ui.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGenres: (artist) => dispatch(fetchGenres(artist)),
    searchTunes: (params) => dispatch(searchTunes(params)),
    fetchSong: (song, details) => dispatch(fetchSong(song, details)),
    startLoading: () => dispatch(startLoading()),
    stopLoading: () => dispatch(stopLoading()),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
