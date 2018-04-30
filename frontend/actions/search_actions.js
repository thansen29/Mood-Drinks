import axios from 'axios';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_GENRES = 'RECEIVE_GENRES';

export const receiveSongs = (songData) => {
  return {
    type: RECEIVE_SONGS,
    songData
  }
}

export const receiveGenres = (genres) => {
  return {
    type: RECEIVE_GENRES,
    genres
  }
}

export const searchTunes = params => dispatch => {
  axios.get(`https://itunes.apple.com/search?media=music&term=${params}`)
    .then((response) => {
      const songData = response.data.results.slice(0, 5);
      dispatch(receiveSongs(songData));
    })
    .catch((error) => {
      debugger
    });
}

export const fetchGenres = artist => dispatch => {
  axios.post('search', {
    artist: artist
  })
  .then(
    (response) => {
      const genres = response.data.genres;
      console.log(genres);
      dispatch(receiveGenres(genres));
    },
    (error) => {
      debugger
    }
  );
}
