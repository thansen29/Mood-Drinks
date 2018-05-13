import axios from 'axios';
import { fetchDrinks } from './drink_actions';

export const RECEIVE_GENRES = 'RECEIVE_GENRES';
export const SET_DEFAULT = 'SET_DEFAULT';
export const CLEAR_DEFAULT = 'CLEAR_DEFAULT';


export const receiveGenres = (genres) => {
  return {
    type: RECEIVE_GENRES,
    genres
  }
}

export const setDefault = (drink) => {
  return {
    type: SET_DEFAULT,
    payload: drink
  }
}

export const clearDefault = () => {
  return {
    type: CLEAR_DEFAULT,
  }
}

export const searchTunes = params => dispatch => {
  return axios.get(`https://itunes.apple.com/search?media=music&term=${params}`);
}

export const fetchGenres = artist => dispatch => {
  axios.post('search', {
    artist: artist
  })
  .then(
    (response) => {
      const genres = response.data.genres;
      // console.log(genres);
      if (response.data.name === 'Sea of Clouds (negroni)') {
        dispatch(setDefault(response.data));
      } else {
        dispatch(receiveGenres(genres));
        dispatch(clearDefault());
      }

      if (response.data.cache) {
        cacheData(artist, genres);
      }
    }
  );
}

const cacheData = (artist, genres) => {
  axios.post('search/cache', {
    artist,
    genres
  });
}

export const fetchSong = song => dispatch => {
  axios.post('fetchSong', {
    song: song
  })
  .then((response) => {
    const previewUrl = response.data.previewUrl;
    const externalUrl = response.data.externalUrl;
    debugger
  })
  .catch((error) => {
    debugger
  })
}