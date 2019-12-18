import { Types } from '../actions/stations';

const INITIAL_STATE = {};

export default function stations(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.UPDATE_STATIONS: {
            return action.payload.reduce(
                (builtUp, station) => {
                    return { ...builtUp, [station.name]: station }
                },
                state
            );
        }
        default: {
            return state;
        }
    }
}