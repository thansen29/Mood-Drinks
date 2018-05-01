import axios from 'axios';

export const RECEIVE_DRINKS = 'RECEIVE_DRINKS';
export const RECEIVE_DRINK = 'RECEIVE_DRINK';
export const CLEAR_SELECTED = 'CLEAR_SELECTED';

export const receiveDrinks = (drinks) => {
  return {
    type: RECEIVE_DRINKS,
    drinks
  }
}

export const receiveDrink = (drink) => {
    return {
      type: RECEIVE_DRINK,
      drink
    }
  }

export const unselectDrink = () => {
    return {
    type: CLEAR_SELECTED,
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

export const fetchDrink = id => dispatch => {
    axios.get(`drinks/${id}`)
        .then((drink) => {
            dispatch(receiveDrink(drink));
        })
        .catch((error) => {
            debugger
        })
}

export const clearSelected = () => dispatch => {
    dispatch(unselectDrink());
}
