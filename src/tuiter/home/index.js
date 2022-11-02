import React from "react";
import "./index.css";
import PostList from "../post-list/PostList";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <WhatsHappening/>
            <PostList/>
        </>
    );
};
export default HomeComponent;