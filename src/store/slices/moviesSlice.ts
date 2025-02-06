import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Movie, MoviesState } from '../../types/movie.types';

const initialState: MoviesState = {
    movies: [],
    isLoading: false,
    error: null,
};

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async () => {
        const response = await fetch('https://swapi.dev/api/films/');
        if (!response.ok) throw new Error('Failed to fetch movies');
        const data = await response.json();
        return data.results as Movie[];
    }
);

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
                state.isLoading = false;
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default moviesSlice.reducer;
