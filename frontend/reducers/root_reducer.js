import { combineReducers } from 'redux';
import genres from './genres';
import drinks from './drinks';
import { reducer as jPlayers } from 'react-jplayer';

const rootReducer = combineReducers({
  genres,
  drinks,
  jPlayers
});

export default rootReducer;
