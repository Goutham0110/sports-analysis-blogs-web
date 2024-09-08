import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    featured: [],
    latest: []
};

export const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        setFeaturedLatest: (state, action) => {
            const data = action.payload;
            state.featured = data.featured;
            state.latest = data.latest;
        },
    },
});

export const { setFeaturedLatest } = blogsSlice.actions;

export const selectFeatured = (state) => state.blogs.featured;

export const selectLatest = (state) => state.blogs.latest;

export default blogsSlice.reducer;