import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Chatroom from './components/pages/chatroom.js';
import Manager from './components/pages/manager.js';
import Logout from './components/pages/logout.js';
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
            <Route exact path='/manager' component={Manager} />
            <Route exact path='/logout' component={Logout} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
