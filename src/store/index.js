import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action){
            state.push(action.payload)
        },
        removeSong(state, action){
            //TODO: Code this
        }
    }
})

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
})

console.log('Store is -->', store.getState());