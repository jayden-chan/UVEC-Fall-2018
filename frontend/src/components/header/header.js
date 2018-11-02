import React, { Component } from 'react';

import "../../assets/css/header.min.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>
          <a href="/">
            App Name
          </a>
        </h1>

        <button type="button" class="btn btn-primary">Primary</button>
      </div>
    );
  }
}

export default Header;
