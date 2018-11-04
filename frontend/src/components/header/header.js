import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderLinks() {
    let url = window.location.href
    if (url.endsWith("chatroom") || url.endsWith("manager")) {
      return ([
        <ul key="dashLinks" className="navbar-nav ml-auto">
          <li key="logoutLink" className="nav-item">
            <Link to="/logout" className="nav-link">Log Out</Link>
          </li>
        </ul>
      ]);
    } else {
      return ([
        <ul key="normalLinks" className="navbar-nav ml-auto">
          <li key="loginLink" className="nav-item">
            <Link to="/" className="nav-link">Login</Link>
          </li>
        </ul>
      ]);
    }
  }

  render() {
    let links = this.renderLinks();
    return (
      <header>
        <div className="container-fluid" style={{padding:0}}>
          <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Messaging App</a>
            <div className="collapse navbar-collapse" id="navbarNav">
              {links}
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
