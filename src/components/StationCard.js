import React from 'react';

export default ({ id, name, artist }) => 
    <div className={id%2 === 1 ? 'station-card left' : 'station-card right'}>
        <h3 className='station-car__name'>{name}</h3>
        <p className='station-card__artist'>{artist}</p>
    </div>;
