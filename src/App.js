import React, { Component } from 'react';
import './App.css';

import axios from 'axios';


class App extends Component {

  constructor() {
    super();
    this.state = {
      name: "Shubham Mathur",
      greet: "Welcome back!",
      url: "https://dineshsprabu.github.io/pictures-api/1.json",
      data: []
    }
  }


  componentDidMount() {
    axios.get(this.state.url)
      .then((response) => {
        this.setState({ data: response.data.data.images })
      })
  }


  render() {

    console.log(this.state.data)

    return (
      <div>


        <div className = "images-wrapper">{this.state.data ? this.state.data.map(obj =><img key={obj.id} src={obj.src} alt={obj.id} className="images" />) : null}</div>

      </div>

    )
  }

}


export default App;
