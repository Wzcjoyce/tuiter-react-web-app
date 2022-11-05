import React from "react";
import "./index.css";
import {useSelector} from "react-redux";
import ProfileItem from "./ProfileItem";

const ProfileComponent = () => {
    const profileState = useSelector(
        (state) => state.profile);
    console.log(profileState);
    return(
        <div>
            {
                    <ProfileItem/>
            }
        </div>
    );
};
export default ProfileComponent;