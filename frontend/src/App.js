import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Chatroom from './components/pages/chatroom.js';
import SignUp from './components/pages/signup.js';
import Header from './components/header/header.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={SignUp} />
            <Route exact path='/chatroom' component={Chatroom} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
