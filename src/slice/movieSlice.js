import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trending: [],
    popular: [],
    toprated: [],
    day: true,
    movieTopRated: true,
    moviePopular: true,
    movieTvPageData: [],
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setTrending(state,action) {
            state.trending = action.payload
        },
        setPopular(state,action) {
            state.popular = action.payload
        },
        setTopRated(state,action) {
            state.toprated = action.payload
        },
        setDayWeek(state,action) {
            state.day = action.payload
        },
        setMovieTvToprated(state,action) {
            state.movieTopRated = action.payload
        },
        setMovieTvPopular(state,action) {
            state.moviePopular = action.payload
        },
        setMovieTvPageData(state,action) {
            state.movieTvPageData = action.payload
        }
    }
})

export const { setTrending, setPopular, setTopRated, setDayWeek, setMovieTvToprated, setMovieTvPopular, setMovieTvPageData } = movieSlice.actions;
export default movieSlice.reducer;

