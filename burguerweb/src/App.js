import React, { Component } from 'react';
import './App.css';
import HomeHOC from './containers/Home';
import HeaderHOC from './containers/Header/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderHOC />
        {/* <HomeHOC /> */}
      </div>
    );
  }
}

export default App;
