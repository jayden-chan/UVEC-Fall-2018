import React, { Component } from 'react';

class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'loading'
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
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-1">
            {this.state.title}
          </h1>
        </div>
      </div>
    );
  }
}

export default Test;
