import { createSlice } from "@reduxjs/toolkit";
import postsArray from "./homeposts.json";

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


const postsSlice = createSlice({
    name: 'post',
    initialState: postsArray,
    reducers: {
        deletePost(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },

        createPost(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }
});

export const {createPost, deletePost} = postsSlice.actions;
export default postsSlice.reducer;