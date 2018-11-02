import React, { Component } from 'react';

import "../../assets/css/header.min.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="row" style={{width: '100%'}}>
          <div className="col">
            <h1>
              <a href="/">
                App Name
              </a>
            </h1>
          </div>
          <div className="col-md-auto" style={{margin: 0}}>
            <button type="button" className="btn btn-secondary">
              Link one
            </button>
            <button type="button" className="btn btn-secondary">
              Link two
            </button>
            <button type="button" className="btn btn-secondary">
              Link three
            </button>
          </div>
        </div>

      </div>
    );
  }
}

export default Header;
