import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../slice/movieSlice';

const store = configureStore({
    reducer: {
        movieReducer,
    }
})

export default store;
