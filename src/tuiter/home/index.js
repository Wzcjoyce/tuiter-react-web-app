import React from "react";
import "./index.css";
import WhatsHappening from "./whats-happening";
import TuitItems from "../post-list/TuitItem";
import {useSelector} from "react-redux";

const HomeComponent = () => {
    const postsArray = useSelector(
        (state) => state.post);
    console.log(postsArray);
    return(
        <>
            <WhatsHappening/>
            <div>
                {
                    postsArray.map(post =>
                        <TuitItems
                            key={post._id} post={post}/> )
                }
            </div>
        </>
    );
};
export default HomeComponent;