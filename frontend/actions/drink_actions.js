import axios from 'axios';

export const RECEIVE_DRINKS = 'RECEIVE_DRINKS';

export const receiveDrinks = (drinks) => {
  return {
    type: RECEIVE_DRINKS,
    drinks
  }
}

export const fetchDrinks = () => dispatch => {
    axios.get('drinks')
        .then((response) => {
            const drinks = response.data;
            dispatch(receiveDrinks(drinks))
        })
        .catch((error) => {
            debugger
        });
}
