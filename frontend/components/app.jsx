import React from 'react';
// Styles the jPlayer to look nice
// import 'react-jplayer/src/less/skins/sleek.less';
// Styles Play/Pause/Mute etc when icons (<i />) are used for them
// import 'react-jplayer/src/less/controls/iconControls.less';

import Navbar from './navbar/navbar';
import HeaderContainer from './header/header_container';
import DrinksIndex from './drinks/drinks_container';
import AudioPlayer from './audio_player';


class App extends React.Component {
  render() {
    return (
      <section className="whole-container">
        <Navbar />

        <HeaderContainer />

        <DrinksIndex />

        <AudioPlayer />
      </section>
    );
  }
}

export default App;
