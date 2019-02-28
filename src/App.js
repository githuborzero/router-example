import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HomeComponent from './HomeComponent.js'
import SetComponent from './SetComponent.js'
import ItemComponent from './ItemComponent.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Link className="App-link" to="/">Home</Link>
            <Link className="App-link" to="/set">Sets</Link>
            <Link className="App-link" to="/item">Items</Link>
          </div>
          <div>
            <Route exact path='/' component={HomeComponent} />
            <Route exact path='/set' component={SetComponent} />
            <Route exact path='/item' component={ItemComponent} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
