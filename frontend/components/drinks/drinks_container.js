import { connect } from 'react-redux';
import * as _ from 'lodash';
import { fetchDrinks } from '../../actions/drink_actions';
import { stopLoading } from '../../actions/ui_actions';
import DrinksIndex from './drinks_index';
import { mergeDrinks } from '../../reducers/selectors';

const mapStateToProps = state => {
  const drinks = state.drinks.drinks;
  const genres = state.genres.genreResults;
  let newMerged;
  let cleared;

  if (genres.length) {
    newMerged = mergeDrinks(drinks, genres);
  } 

  if (state.drinks.defaultDrink) {
    newMerged = [{ drink: state.drinks.defaultDrink }]
  }

  if (state.genres.justCleared) {
    cleared = true;
  }
  return {
    drinks: newMerged,
    cleared,
    loading: state.ui.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDrinks: () => dispatch(fetchDrinks()),
    stopLoading: () => dispatch(stopLoading())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinksIndex);
