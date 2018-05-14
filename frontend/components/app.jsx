import React from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar/navbar';
import HeaderContainer from './header/header_container';
import DrinksIndex from './drinks/drinks_container';
import AudioPlayer from './audio_player';
import DrinkShow from './drinks/drink_show';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const drinkShow = this.props.location.pathname.includes('drink');
    return (
      <section className="whole-container">
      { !drinkShow 
      ?
      <div>
        <Navbar />
        
        <HeaderContainer />
        
        <DrinksIndex />
      </div>
      :
        <DrinkShow />
      }


        <AudioPlayer />
      </section>
    );
  }
}

export default connect(null, null)(App);
