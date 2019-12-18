import { Types, updateFeaturedAction } from '../actions/featured';

export const searchMiddleware = store => next => action => {
    if ( action.type === Types.SEARCH_FOR_TEXT ) {
        if ( action.payload.text.length < 2 ) return;
        const stations = action.payload.stations;
        const remainingStationNames = Object.keys( { ...stations } );
        const stationsWithRightTitle = Object.keys(stations).filter(
            name => { 
                if (stations[name].title && stations[name].title.toLowerCase().search(action.payload.text.toLowerCase()) >= 0) {
                    remainingStationNames.filter(item => item !== name);
                    return true;
                }
                return false;
            }
        );
        const stationsWithRightArtist = remainingStationNames.filter(
            name => stations[name].artist
                && stations[name].artist.toLowerCase().search(action.payload.text.toLowerCase()) >= 0
                && stationsWithRightTitle.every(item => name !== item)
        );
        const found = [ ...stationsWithRightTitle, ...stationsWithRightArtist ];
        next(updateFeaturedAction(found));
        return;
    }
    next(action);
    return;
}
