import { connect } from 'react-redux';
import { searchTunes } from '../../actions/search_actions';
import HeaderComponent from './header';

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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
