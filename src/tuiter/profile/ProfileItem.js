import React from "react";
import {Link} from "react-router-dom";

const ProfileItem = (
    {
        profile = {
            "firstName": "Jose",
            "lastName": "Annunziato",
            "handle": "@jannunzi",
            "profilePicture": "/images/image2.jpeg",
            "bannerPicture": "/images/home-screen-user-image.png",
            "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
            "website": "youtube.com/webdevtv",
            "location": "Boston, MA",
            "dateOfBirth": "7/7/1968",
            "dateJoined": "4/2009",
            "followingCount": 340,
            "followersCount": 223
        }
    }
) => {
    return(
        <>
            <div className="row">
                <div className="col-1 position-relative padding-top-12">
                    <Link className = "bond-font-size-18 text-black" to="/tuiter/home"><i className="fa-solid fa-arrow-left"></i></Link>
                </div>
                <div className="col-6">
                    <div className = "bond-font-size-22"><span className = "padding-to-left padding-to-right">{profile.firstName}</span> <span>{profile.lastName}</span> </div>
                    <div className = "padding-to-left">6114 Tweets</div>
                </div>
            </div>

            <div className="position-relative mb-2">
                <img src={profile.profilePicture} className="w-100"/>
                <img src={profile.bannerPicture} className="position-relative wd-nudge-up banner-image">
                    </img>
            </div>
        </>

    );
};

export default ProfileItem;