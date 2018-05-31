import { combineReducers } from 'redux';
import genres from './genres';
import drinks from './drinks';
import ui from './ui';
import { reducer as jPlayers } from 'react-jplayer';

const rootReducer = combineReducers({
  genres,
  drinks,
  ui,
  jPlayers
});

export default rootReducer;
