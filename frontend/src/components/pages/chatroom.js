import React, { Component } from 'react';

import "../../assets/css/custom.min.css";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      messages: [],
      textValue: '',
      mode: 'loading',
      token: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMessages = this.getMessages.bind(this);
  }

  handleChange(event) {
    this.setState({textValue: event.target.value});
  }

  handleSubmit(event) {
    fetch('/newmessage', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: this.state.token,
        message: this.state.textValue
      })
    })

    this.setState({textValue: ''});
    event.preventDefault();
  }

  async getLoginInfo() {
    let token = localStorage.getItem('uvec-login-token');

    let timer = 0;
    while (token === undefined && timer < 10) {
      console.log('trying to get token');
      token = localStorage.getItem('uvec-login-token')
      await sleep(100);
      timer++;
    }

    if (timer === 10) {
      this.setState({mode: 'unauthorized'});
      return;
    }

    if (token === null) {
      this.setState({mode: 'unauthorized'});
      clearInterval(this.updateInterval);
    } else {
      this.setState({token: token});
      this.setState({mode: 'ready'});
    }

  }

  componentDidMount() {
    this.updateInterval = setInterval(this.getMessages, 1000);
    this.getLoginInfo()
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  async getMessages() {
    if (this.state.token === null) {
      console.log('no token');
      return;
    }

    let theBody = JSON.stringify({token: this.state.token});

    const res = await fetch('/messages', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: theBody,
    })

    if (res.status === 200) {
      res.json().then(json => {
        this.setState({messages: json.messages});
        this.setState({mode: 'ready'});
      });
    }
    else if (res.status === 401) {
      localStorage.removeItem('uvec-login-token')
      this.setState({mode: 'authError'});
      return
    } else {
      res.text().then(text => alert(text));
    }
}

getMessageTable() {
  return (
    <table style={{width: '100%'}}>
      <tbody>
        {this.state.messages.map(val =>{
          return (
            <tr>
              <td>{val.name.toString()}: </td>
              <td> {val.message.toString()}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

render() {
  if (this.state.mode === 'loading') {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <div className='loader-large'></div>
        </div>
      </div>
    )
  } else if (this.state.mode === 'unauthorized') {
    return (
      <div>
        <div className="container">
          <div className="row" style={{marginTop: 100}}>
            <div className="col-md" style={{marginTop: 100}}>
              <h1 className="display-4">Unauthorized</h1>
              <p>You are not logged in.</p>
              <a href="/">Go to the login page</a>
            </div>
          </div>
        </div>
      </div>
    )
  } else if (this.state.mode === 'authError') {
    return (
      <div>
        <div className="container">
          <div className="row" style={{marginTop: 100}}>
            <div className="col-md" style={{marginTop: 100}}>
              <h1 className="display-4">Authorization Error</h1>
              <p>Please log in again.</p>
              <a href="/">Go to the login page</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="form-send" style={{width: '100%'}} onSubmit={this.handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Chatroom</h1>
          <div className="chatroom">
            {this.getMessageTable()}
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Type here..."
              aria-label="Recipient's username" aria-describedby="button-addon2" value={this.state.textValue} onChange={this.handleChange}></input>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
}

export default Chatroom;
