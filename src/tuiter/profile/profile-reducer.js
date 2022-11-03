import { createSlice } from "@reduxjs/toolkit";
import profileState from "./profile.json";


const profileSlice = createSlice({
    name: 'profile',
    initialState: profileState,
});

export default profileSlice.reducer;