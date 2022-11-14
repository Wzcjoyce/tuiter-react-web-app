import { createSlice } from "@reduxjs/toolkit";
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk} from "../../services/tuits-thunks";


const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "/images/nasa.jpg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const initialState = {
    tuits: [],
    loading: false
}

const HomeTuitsSlice = createSlice({
    name: 'HomeTuits',
    initialState,
    extraReducers: {

        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },

        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },

        [findTuitsThunk.rejected]:
            (state) => {
                state.loading = false
            },

        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },

        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitIndex = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitIndex] = {
                    ...state.tuits[tuitIndex],
                    ...payload
                }
            }

    },

    reducers: {

        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },

        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            // remove elements starting at index from array
            state.splice(index, 1);
        },

    }

});

export default HomeTuitsSlice.reducer;
export const {createTuit, deleteTuit} = HomeTuitsSlice.actions;