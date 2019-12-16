import { Types } from '../actions/featured';

const INITIAL_STATE = [];

export default function featured(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.UPDATE_FEATURED: {
            return [ action.payload ];
        }
        default: {
            return state;
        }
    }
}