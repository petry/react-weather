import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};

    this.onInputchange = this.onInputchange.bind(this);
  }

  onInputchange(event) {
    console.log(event.target.value);
    this.setState({'term':event.target.value})
  }

  render(){
    return (
      <form className="input-group">
        <input
          placeholder="get a five-day forecast in your favorite cities"
          className ="form-control"
          value={this.state.term}
          onChange={this.onInputchange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
