import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Main from './components/pages/main.js';
import Header from './components/header/header.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
