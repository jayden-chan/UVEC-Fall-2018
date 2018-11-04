import React, { Component } from 'react';

class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem('uvec-login-token');
  }

  render() {
    return (
      <div>
        <div className="container">
          <form method="post" onSubmit={this.handleSubmit}>
            <div className="row" style={{marginTop: 100}}>
              <div className="col-md" style={{marginTop: 100}}>
                <h1 className="display-4">Thank You</h1>
                <p>You have been logged out.</p>
                <a href="/">Return to the homepage</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Logout;
