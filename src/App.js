
import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './containers/Header.js'
import Body from './containers/Body.js'
import Footer from './containers/Footer.js'

class App extends Component  {

  render() {
  return (
    <div>
          <Header />
          <Body />
          <Footer />
    </div>
  );}
}

export default App;
