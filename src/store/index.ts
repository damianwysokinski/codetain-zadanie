import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './slices/moviesSlice.ts'
import movieDetailsReducer from './slices/movieDetailsSlice.ts'

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movieDetails: movieDetailsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;