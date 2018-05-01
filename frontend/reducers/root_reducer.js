import { combineReducers } from 'redux';
import genres from './genres';
import drinks from './drinks';

const rootReducer = combineReducers({
  genres,
  drinks
});

export default rootReducer;
