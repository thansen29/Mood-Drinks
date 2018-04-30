import { RECEIVE_GENRES } from '../actions/search_actions';

const initialState = {
  genreResults: []
};

const genreReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_GENRES:
      newState.genreResults = action.genres;
      return newState;
    default:
      return state;
  }
}

export default genreReducer;
