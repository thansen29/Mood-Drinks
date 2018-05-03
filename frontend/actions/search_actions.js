import axios from 'axios';
import { fetchDrinks } from './drink_actions';

export const RECEIVE_GENRES = 'RECEIVE_GENRES';

export const receiveGenres = (genres) => {
  return {
    type: RECEIVE_GENRES,
    genres
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
      dispatch(receiveGenres(genres));
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
