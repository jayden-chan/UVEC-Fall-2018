import React, { Component } from 'react';

import "../../assets/css/custom.min.css";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name);
    console.log(value);

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('submitting');
    fetch('/login', {
      method: 'post',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => {
        if (res.status === 200) {
          console.log('status 200');
          return res.json();
        }
        else {
          console.log('status else');
          res.text().then(text => alert(text));
          return null;
        }
      })
      .then(json => {
        console.log('json:', json);
        if (json !== null) {
          localStorage.setItem('uvec-login-token', json.token)
          console.log('token stored');
          this.redirectToChat();
        }
      });

   event.preventDefault();
  }

  async redirectToChat() {
    await sleep(2000);
    this.props.history.push('/chatroom');
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-4">
              <form className="form-signin" onSubmit={this.handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange}
                  className="form-control" placeholder="Email address" required autoFocus/>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange}
                  className="form-control" placeholder="Password" required/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
              </form>
            </div>
          </div>
    );
  }
}

export default SignUp;
