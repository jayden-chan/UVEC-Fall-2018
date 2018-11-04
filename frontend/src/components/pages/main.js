import React, { Component } from 'react';

import "../../assets/css/custom.min.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      searchValue: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleSubmit(event) {
    console.log(this.state.searchValue);
    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="container-fluid bg">
        <h1 className="display-1">
          {this.state.title}
        </h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="form-row">
              <div className="form-group col">
                <input type="text" name="searchValue" id="inputSearch"
                  placeholder="Search for anything" className="form-control"
                  value={this.state.searchValue} onChange={this.handleChange}/>
              </div>
              <div className="form-group col-md-auto">
                <input type="submit" className="btn btn-primary" value="Search" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Main;
