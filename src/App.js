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
            <form action="#" className='search'>
              <input type="text" className='search__input' placeholder="placeholder text" />
              <button className='search__button'>
                <SVGIcon name="magnifying-glass" className='search__icon' />
              </button>
            </form>
            <nav className="stations-nav">
              <div className="stations-nav__icon-box">
                <SVGIcon name="globe" className='stations-nav__icon' />
                <span className="stations-nav__notification">3</span>
              </div>
            </nav>
          </header>
          <div className='tune-view'>
            tune
          </div>
        </div>
        <nav className='sidebar'>
          <div className='sidebar__station-card left'>
            <h3 className='name'><a>BBC Radio 2</a></h3>
            <p className='artist'>Skeewiff</p>
          </div>
          <div className='sidebar__station-card right'>
            <h3 className='name'><a>Radio X</a></h3>
            <p className='artist'>Ocean Colour Scene</p>
          </div>
          <div className='sidebar__station-card left'>
            <h3 className='name'><a>Planet Rock</a></h3>
            <p className='artist'>Cee Cee James</p>
          </div>
          <div className='sidebar__station-card right'>
            <h3 className='name'><a>Planet Rock</a></h3>
            <p className='artist'>Cee Cee James</p>
          </div>
          <div className='sidebar__station-card left'>
            <h3 className='name'><a>Planet Rock</a></h3>
            <p className='artist'>Cee Cee James</p>
          </div>
          <div className='sidebar__station-card right'>
            <h3 className='name'><a>Planet Rock</a></h3>
            <p className='artist'>Cee Cee James</p>
          </div>
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
