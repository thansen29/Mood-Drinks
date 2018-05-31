import { START_LOADING, STOP_LOADING } from '../actions/ui_actions';

const initialState = {
    loading: false
};

const uiReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
    case START_LOADING:
        newState.loading = true;
        return newState;
    case STOP_LOADING:
        newState.loading = false;
        return newState;
    default:
      return state;
  }
}

export default uiReducer;
