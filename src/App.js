import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import socket from './utilities/socketConnection';
import antenna from './assets/antenna-pngrepo-com.png';
import SVGIcon from './SVGIcon';
import StationCard from './components/StationCard';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render () {
    const { stations } = this.props;
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
          {stations.map( (station, id) => 
            <StationCard
              key={`key_${station.name}`}
              id={id}
              name={station.name} 
              artist ={station.artist}
            />
          )}
        </nav>
      </Fragment>
    );
  }

  /* componentDidMount() {
    socket.on('tunes', data => {
      console.log('received: ', data);
    });
  } */
}

export default connect(
  ({ stations }) => ({ stations })
)(App);
