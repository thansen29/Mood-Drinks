import { connect } from 'react-redux';
import { fetchDrinks } from '../../actions/drink_actions';
import DrinksIndex from './drinks_index';
import * as _ from 'lodash';

const mapStateToProps = state => {
  const drinks = state.drinks.drinks;
  const genres = state.genres.genreResults;
  let merged = [];
  let newMerged;
  let cleared;

  if (genres.length) {
    _.forEach(drinks, drink => {

      let count = _.intersection(drink.genres, genres).length
      
      if (count) {
        merged.push({ drink, count});
      }
    });
    newMerged = _.sortBy(merged, ['count']).reverse().slice(0, 4);
    if (!newMerged.length) {
      newMerged = null;
    }
  }
  if (state.genres.justCleared) {
    cleared = true;
  }
  return {
    drinks: newMerged,
    cleared
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDrinks: () => dispatch(fetchDrinks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinksIndex);
