import React, { Component, Fragment } from 'react';
import socket from './utilities/socketConnection';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render () {
    return (
      <Fragment>
        <div class="content">
          <header class="header">
            Header part
          </header>
          <div class="tune-view">
            tune
          </div>
        </div>
        <nav class="sidebar">
          Navigation
        </nav>
      </Fragment>
    );
  }

  componentDidMount() {
    socket.on('tunes', data => {
      console.log('received: ', data);
    });
  }
}

export default App;
