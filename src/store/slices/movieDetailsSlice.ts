import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MovieDetailsState } from '../../types/movie.types';

const initialState: MovieDetailsState = {
    details: {},
    isLoading: false,
    error: null,
};

export const fetchMovieDetails = createAsyncThunk(
    'movieDetails/fetchMovieDetails',
    async (id: string) => {
        const response = await fetch(`https://swapi.dev/api/films/${id}`);
        if (!response.ok) throw new Error('Failed to fetch movie details');
        return { id, data: await response.json() };
    }
);

const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieDetails.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchMovieDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.details[action.payload.id] = action.payload.data;
            })
            .addCase(fetchMovieDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export const { clearError } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;