import { configureStore, createAction, createSlice } from "@reduxjs/toolkit";

export const resetStoreAction = createAction('app/reset')

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action){
            state.push(action.payload)
        },
        removeSong(state, action){
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetStoreAction, (state, action) => {
            return []
        })
    }
})

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action){
            state.push(action.payload)
        },
        removeMovie(state, action){
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetStoreAction, (state, action) => {
            return []
        })
    }
})

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer
    }
})

export { store };
export const { addSong, removeSong } = songsSlice.actions
export const { addMovie, removeMovie } = moviesSlice.actions