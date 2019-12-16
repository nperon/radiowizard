export const Types = {
    UPDATE_FEATURED: 'UPDATE_FEATURED'
};

export const updateFeaturedAction = data => ({
    type: Types.UPDATE_FEATURED,
    payload: data
});
