import { RECEIVE_DRINKS, RECEIVE_DRINK, CLEAR_SELECTED } from '../actions/drink_actions';
import { SET_DEFAULT, CLEAR_DEFAULT } from '../actions/search_actions';

const initialState = {
  drinks: [],
  selectedDrink: {},
  defaultDrink: null
};

const drinksReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_DRINKS:
      newState.drinks = action.drinks;
      return newState;
    case RECEIVE_DRINK:
      newState.selectedDrink = action.drink.data;
      return newState;
    case CLEAR_SELECTED:
      newState.selectedDrink = {};
      return newState;
    case SET_DEFAULT:
      newState.defaultDrink = action.payload;
      return newState;
    case CLEAR_DEFAULT: 
      newState.defaultDrink = null;
      return newState;
    default:
      return state;
  }
}

export default drinksReducer;
