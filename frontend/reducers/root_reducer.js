import { combineReducers } from 'redux';
import genres from './genres';
import songs from './songs';
import drinks from './drinks';


const rootReducer = combineReducers({
  genres,
  songs,
  drinks
});

export default rootReducer;
