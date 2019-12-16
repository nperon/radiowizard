import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import socket from './utilities/socketConnection';
import antenna from './assets/antenna-pngrepo-com.png';
import SVGIcon from './SVGIcon';
import StationCard from './components/StationCard';
import FeaturedCard from './components/FeaturedCard';
import { updateStationsAction } from './actions/stations'; 

class App extends Component {
  constructor() {
    super();
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('A value was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render () {
    const { stations, featured } = this.props;
    return (
      <Fragment>
        <div className='content'>
          <header className='header'>
            <img src={antenna} alt="antenna" className='logo' />
            <form action="#" className='search' onSubmit={this.handleSubmit}>
              <input type="text" className='search__input' placeholder="placeholder text" value={this.state.value} onChange={this.handleChange} />
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
            {featured.map(item => <FeaturedCard key={`featured_${item}`} stationName={item} />)}
          </div>
        </div>
        <nav className='sidebar'>
          {Object.keys(stations).map( (name, id) => 
            <StationCard
              key={`station_${stations[name].name}`}
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
  ({ stations, featured }) => ({ stations, featured }),
  dispatch => ({
    updateStations: data => dispatch( updateStationsAction(data) )
  })
)(App);
