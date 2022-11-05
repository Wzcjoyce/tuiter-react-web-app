import { createSlice } from "@reduxjs/toolkit";
import profileState from "./profile.json";


const profileSlice = createSlice({
    name: 'profile',
    initialState: profileState,
    reducers: {
        EditProfile(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.bio = action.payload.bio;
            state.website = action.payload.website;
            state.location = action.payload.location;
            state.dateOfBirth = action.payload.dateOfBirth;
        }
    }
});

export const {EditProfile} = profileSlice.actions;
export default profileSlice.reducer;