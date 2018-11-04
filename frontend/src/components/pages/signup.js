import React, { Component } from 'react';

import "../../assets/css/custom.min.css";

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
   alert('A name was submitted: ' + this.state.value);
   event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-4">
              <form className="form-signin" onSubmit={this.handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Email address" required autoFocus/>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Password" required/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default SignUp;
