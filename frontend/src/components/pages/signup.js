import React, { Component } from 'react';

import "../../assets/css/custom.min.css";

class signUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
   this.setState({value: event.target.value});
  }

  handleSubmit(event) {
   alert('A name was submitted: ' + this.state.value);
   event.preventDefault();
  }

  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
            <div class="col-4">
              <form class="form-signin">
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <input type="email" value={this.state.value} onChange={this.handleChange} class="form-control" placeholder="Email address" required autofocus/>
                <input type="password" value={this.state.value} onChange={this.handleChange} class="form-control" placeholder="Password" required/>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default signUp;
