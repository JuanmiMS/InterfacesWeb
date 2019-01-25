import React, { Component } from 'react';
import './App.css';
import HomeHOC from './containers/Home/home';
import HeaderHOC from './containers/Header/header';
import FooterHOC from './containers/Footer/footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderHOC />
        <HomeHOC />
        <FooterHOC />
      </div>
    );
  }
}

export default App;
