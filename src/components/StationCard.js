import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFeaturedAction } from '../actions/featured'; 

class StationCard extends Component {
    handleClick() {
        this.props.updateFeatured(this.props.name);
    }

    render () {
        return <div
            onClick={() => this.handleClick()}
            className={this.props.id%2 === 1 ? 'station-card left' : 'station-card right'}
        >
            <h3 className='station-car__name'>{this.props.name}</h3>
            <p className='station-card__artist'>{this.props.artist}</p>
        </div>;
    }
} 

export default connect(
    null,
    dispatch => ({
        updateFeatured: (name) => dispatch( updateFeaturedAction(name) )
    })
)(StationCard);
