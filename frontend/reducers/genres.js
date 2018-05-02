import { RECEIVE_GENRES } from '../actions/search_actions';
import { CLEAR_GENRES } from '../actions/drink_actions';


const initialState = {
  genreResults: []
};

const genreReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_GENRES:
      newState.genreResults = action.genres;
      return newState;
    case CLEAR_GENRES:
      return initialState;
    default:
      return state;
  }
}

export default genreReducer;
