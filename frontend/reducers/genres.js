
const initialState = {
  genreResults: []
};

const genreReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    default:
      return state;
  }
}

export default genreReducer;
