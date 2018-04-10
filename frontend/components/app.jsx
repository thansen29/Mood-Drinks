import React from 'react';
import Navbar from './navbar/navbar';
import Header from './header';

class App extends React.Component {
  render() {
    return (
      <section className="whole-container">
        <Navbar />

        <Header />
      </section>
    );
  }
}

export default App;
