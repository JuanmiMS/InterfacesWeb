import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import HomeHOC from './containers/Home/home';
import HeaderHOC from './containers/Header/header';
import FooterHOC from './containers/Footer/footer';
import AboutHOC from './containers/About/about';
import ContactHOC from './containers/Contact/contact';
import BlogHOC from './containers/Blog/blog';



class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderHOC />
        <Route exact path="/" component={HomeHOC} />
        <Route exact path="/home" component={HomeHOC} />
        <Route exact path="/about" component={AboutHOC} />
        <Route exact path="/menu" component={AboutHOC} />
        <Route exact path="/contact" component={ContactHOC} />
        <Route exact path="/blog" component={BlogHOC} />
        <FooterHOC />
      </div>
    );
  }
}

export default App;
