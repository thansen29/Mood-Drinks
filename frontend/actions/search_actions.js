import axios from 'axios';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';

export const receiveSongs = (songData) => {
  return {
    type: RECEIVE_SONGS,
    songData
  }
}

export const searchTunes = params => dispatch => {
  const artist = params.split('by')[1];
  debugger
  axios.get(`https://itunes.apple.com/search?media=music&term=${params}`)
    .then((response) => {
      const songData = response.data.results.slice(0, 5);
      dispatch(receiveSongs(songData));
    })
    .catch((error) => {
      debugger
    })
}
