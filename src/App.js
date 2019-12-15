import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import socket from './utilities/socketConnection';
import antenna from './assets/antenna-pngrepo-com.png';
import SVGIcon from './SVGIcon';
import StationCard from './components/StationCard';
import { updateStationsAction } from './actions/stations'; 

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
                <span className="stations-nav__notification">{Object.keys(stations).length}</span>
              </div>
            </nav>
          </header>
          <div className='tune-view'>
          </div>
        </div>
        <nav className='sidebar'>
          {Object.keys(stations).map( (name, id) => 
            <StationCard
              key={`key_${stations[name].name}`}
              id={id}
              name={stations[name].name} 
              artist ={stations[name].artist}
            />
          )}
        </nav>
      </Fragment>
    );
  }

  componentDidMount() {
    socket.on('tunes', data => {
      this.props.updateStations(data);
    });
  }
}

export default connect(
  ({ stations }) => ({ stations }),
  dispatch => ({
    updateStations: data => dispatch( updateStationsAction(data) )
  })
)(App);
