import { connect } from 'react-redux';
import { fetchGenres, searchTunes } from '../../actions/search_actions';
import HeaderComponent from './header';

const mapDispatchToProps = dispatch => {
  return {
    fetchGenres: (artist) => dispatch(fetchGenres(artist)),
    searchTunes: (params) => dispatch(searchTunes(params))
  }
}

export default connect(null, mapDispatchToProps)(HeaderComponent);
