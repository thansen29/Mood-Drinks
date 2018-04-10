import { combineReducers } from 'redux';
import genres from './genres';
import songs from './songs';

const rootReducer = combineReducers({
  genres,
  songs
});

export default rootReducer;
