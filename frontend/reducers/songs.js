import { RECEIVE_SONGS } from '../actions/search_actions';

const initialState = {
  searchResults: [],
};

const songsReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SONGS:
      newState.searchResults = action.songData;
      return newState;
    default:
      return state;
  }
}

export default songsReducer;
