import { RECEIVE_DRINKS } from '../actions/drink_actions';

const initialState = {
  drinks: []
};

const drinksReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_DRINKS:
      newState.drinks = action.drinks;
      return newState;
    default:
      return state;
  }
}

export default drinksReducer;
