import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likedSongs: JSON.parse(localStorage.getItem("likedSongs")) || [],
    library: JSON.parse(localStorage.getItem("library")) || [],
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        addToLibrary(state, action) {
            state.library.push(action.payload);
            localStorage.setItem("library", JSON.stringify(state.library));
        },
        removeFromLibrary(state, action) {
            state.library = state.library.filter(item => item.id !== action.payload);
            localStorage.setItem("library", JSON.stringify(state.library));
        },
        addToLikedSongs(state, action) {
            state.likedSongs.push(action.payload);
            localStorage.setItem("likedSongs", JSON.stringify(state.likedSongs));
        },
        removeFromLikedSongs(state, action) {
            state.likedSongs = state.likedSongs.filter(song => song.id !== action.payload);
            localStorage.setItem("likedSongs", JSON.stringify(state.likedSongs));
        },
    },
});

export const { addToLibrary, removeFromLibrary, addToLikedSongs, removeFromLikedSongs } = appSlice.actions;
export const appReducer = appSlice.reducer;
