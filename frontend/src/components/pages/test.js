import React, { Component } from 'react';

import "../../assets/css/custom.min.css";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
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
        <div className="container-fluid bg">
            <h1 className="display-1">
              {this.state.title}
            </h1>
      </div>
    );
  }
}

export default Test;
