import React, { Component, Fragment } from 'react';
import socket from './utilities/socketConnection';
import antenna from './assets/antenna-pngrepo-com.png';
import SVGIcon from './SVGIcon';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render () {
    return (
      <Fragment>
        <div className='content'>
          <header className='header'>
            <img src={antenna} alt="antenna" className='logo' />
            <SVGIcon class="wifi" fill="#000" />
            <form action="#" className='search'>
              <input type="text" className='search__input' placeholder="..." />
              <button className='search__button'>
                <SVGIcon name="magnifying-glass" className='icon' />
              </button>
            </form>
          </header>
          <div className='tune-view'>
            tune
          </div>
        </div>
        <nav className='sidebar'>
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
