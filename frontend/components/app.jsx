import React from 'react';
import Navbar from './navbar/navbar';
import HeaderContainer from './header/header_container';

class App extends React.Component {
  render() {
    return (
      <section className="whole-container">
        <Navbar />

        <HeaderContainer />
      </section>
    );
  }
}

export default App;
