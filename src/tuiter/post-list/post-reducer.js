import { createSlice } from "@reduxjs/toolkit";
import postsArray from "./homeposts.json";

const postsSlice = createSlice({
    name: 'post',
    initialState: postsArray
});

export default postsSlice.reducer;