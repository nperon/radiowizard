export const Types = {
    UPDATE_STATIONS: 'UPDATE_STATIONS'
};

export const updateStationsAction = data => ({
    type: Types.UPDATE_STATIONS,
    payload: data
});
