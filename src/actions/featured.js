export const Types = {
    UPDATE_FEATURED: 'UPDATE_FEATURED',
    SEARCH_FOR_TEXT: 'SEARCH_FOR_TEXT',
};

export const updateFeaturedAction = data => ({
    type: Types.UPDATE_FEATURED,
    payload: data
});

export const searchForTextAction = text => ({
    type: Types.SEARCH_FOR_TEXT,
    payload: text
});
