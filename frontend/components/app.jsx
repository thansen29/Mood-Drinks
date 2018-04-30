import React from 'react';
import Navbar from './navbar/navbar';
import HeaderContainer from './header/header_container';
import DrinksIndex from './drinks/drinks_container';


class App extends React.Component {
  render() {
    return (
      <section className="whole-container">
        <Navbar />

        <HeaderContainer />

        <DrinksIndex />
      </section>
    );
  }
}

export default App;
