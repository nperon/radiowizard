import React, { Component } from 'react';
import './App.css';
// import socket from './utilities/socketConnection';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render () {
    return (
      <div className="App">
        <h1>Sanity check!</h1>
      </div>
    );
  }

  componentDidMount() {
    /* socket.on('tunes', data => {
      console.log('received: ', data);
    }); */
  }
}

export default App;
