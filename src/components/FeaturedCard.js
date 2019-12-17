import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFeaturedAction } from '../actions/featured'; 

class FeaturedCard extends Component {
    render() {
        const station = (this.props.stations && this.props.stationName)
            ? this.props.stations[this.props.stationName]
            : null;
        return <div className={'featured-card'}>
            <h3>{station.name}</h3>
            <p>{station.artist}</p>
            <p>{station.title}</p>
        </div>;
    }
}

export default connect(
    ({ stations, featured }) => ({ stations, featured }),
    dispatch => ({
      updateFeatured: data => dispatch( updateFeaturedAction(data) )
    })
  )(FeaturedCard);
