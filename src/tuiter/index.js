import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import ProfileComponent from "./profile";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import PostReducer from "./post-list/post-reducer";
import HomeTuitsReducer from "./home/HomeTuits-Reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import profileState from "./profile/profile-reducer";
import EditProfileComponent from "./edit-profile";

const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer, post:PostReducer, profile: profileState, HomeTuits: HomeTuitsReducer}});

function Tuiter() {
    return(
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <Routes>
                        <Route path="home"    element={<NavigationSidebar active="home"/>}/>
                        <Route path="explore" element={<NavigationSidebar active="explore"/>}/>
                        <Route path="profile" element={<NavigationSidebar active="profile"/>}/>
                        <Route path="edit-profile" element={<NavigationSidebar active="profile"/>}/>
                    </Routes>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="home"    element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="edit-profile" element={<EditProfileComponent/>}/>
                    </Routes>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <Routes>
                        <Route path="home"    element={<WhoToFollowList/>}/>
                        <Route path="explore" element={<WhoToFollowList/>}/>
                        <Route path="profile" element={<WhoToFollowList/>}/>
                        <Route path="edit-profile" element={<WhoToFollowList/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Tuiter