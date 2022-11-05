import React from "react";
import "./index.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import EditProfileItem from "./edit-profile-item";

const EditProfileComponent = () => {

    return(
        <>
           <EditProfileItem/>
        </>
    );
};
export default EditProfileComponent;