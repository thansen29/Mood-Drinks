import { connect } from 'react-redux';
import { fetchDrinks } from '../../actions/drink_actions';
import DrinksIndex from './drinks_index';
import * as _ from 'lodash';

const mapStateToProps = state => {
  const drinks = state.drinks.drinks;
  const genres = state.genres.genreResults;
  let merged = [];
  let newMerged;
  // need to figure out a way to make this not run every single time someone starts searching
  // maybe detach the itunes search results from the store?
  if (genres.length) {
    _.forEach(drinks, drink => {
      let count = _.intersection(drink.genres, genres).length
      if (count) {
        merged.push({ drink, count});
      } 
    });
    newMerged = _.sortBy(merged, ['count']).reverse().slice(0, 4);
  }
  return {
    drinks: newMerged
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDrinks: () => dispatch(fetchDrinks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinksIndex);
