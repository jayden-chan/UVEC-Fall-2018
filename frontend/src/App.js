import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Test from './components/pages/test.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Test} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
