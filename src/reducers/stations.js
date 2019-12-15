import { Types } from '../actions/stations';

const INITIAL_STATE = [
        { name: "BBC Radio 2", title: "Natural Sinner", artist: "Andy Fairweather-Low" },
        { name: "Radio X", title: "Coffee And TVCoffee And TV", artist: "Blur" },
        { name: "Planet Rock", title: "Rise", artist: "H.e.a.t" } 
    ];

export default function stations(state = INITIAL_STATE, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}