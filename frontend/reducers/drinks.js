import { RECEIVE_DRINKS, RECEIVE_DRINK } from '../actions/drink_actions';

const initialState = {
  drinks: [],
  selectedDrink: {}
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
    default:
      return state;
  }
}

export default drinksReducer;
