import React, { Component } from 'react';

import "../../assets/css/custom.min.css";

class Test extends Component {
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


  componentDidMount() {
    this.getTitle();
  }

  async getTitle() {
    fetch('/hello', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.status === 200) {
          res.text().then(text => this.setState({title: text}));
        } else {
          res.text().then(text => alert(text));
        }
      });
  }



  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
            <div class="col-med-8">
              <div class="row">
                <form class="form-send">
                  <h1 class="h3 mb-3 font-weight-normal">Chatroom</h1>
                    <div className="chatroom">
                    hello
                  </div>
                  <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Type here..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Send</button>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Test;
