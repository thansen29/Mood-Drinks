import { connect } from 'react-redux';
import { fetchDrinks } from '../../actions/drink_actions';
import DrinksIndex from './drinks_index';

const mapStateToProps = state => {
    debugger
  return {
    drinks: state.drinks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDrinks: () => dispatch(fetchDrinks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinksIndex);
