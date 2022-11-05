import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileItem = () => {
    const profile = useSelector(state => state.profile)
    return(
        <>
            <div>
                <div className="row">
                    <div className="col-1 position-relative padding-top-12">
                        <Link className = "bond-font-size-18 text-black" to="/tuiter/home"><i className="fa-solid fa-arrow-left"></i></Link>
                    </div>

                    <div className="col-9">
                        <div className = "bond-font-size-22"><span className = "padding-to-left padding-to-right">{profile.firstName}</span> <span>{profile.lastName}</span> </div>
                        <div className = "padding-to-left">6114 Tweets</div>
                    </div>
                </div>


                <div className="mb-5 position-relative">
                    <img className="w-100" src={profile.profilePicture} height = "400px"/>
                    <div className="profile-image position-absolute">
                        <div className="position-relative">
                            <img className=" wd-nudge-up banner-image rounded-circle"
                                 src={profile.bannerPicture}/>
                        </div>
                    </div>
                    <Link to="/tuiter/edit-profile"
                          className="mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right">
                        Edit profile
                    </Link>
                </div>



                <div className=" to-top-40">
                    <h4 className="fw-bolder pb-0 mb-0">
                        <div className = "bond-font-size-22"><span className = " padding-to-right">{profile.firstName}</span> <span>{profile.lastName}</span> </div>
                    </h4>
                    <h6 className="pt-0">{profile.handle}</h6>
                    <p className="pt-2">
                        {profile.bio}
                    </p>
                    <p className="pt-2">
                        Personal WebSite:
                        <Link className="padding-left-20">{profile.website}</Link>
                    </p>
                    <p>
                        <i className="fa fa-location-dot padding-right-5"></i>
                        {profile.location}
                        <i className="fa-thin fa-balloon padding-left-20 padding-right-5"></i>
                        Born: {profile.dateOfBirth}
                        <i className="far fa-calendar me-2  padding-left-20 padding-right-5"></i>
                        Joined {profile.dateJoined}
                    </p>
                    <b>{profile.followingCount}</b> Following
                    <b className="ms-4">{profile.followersCount}</b> Followers

                </div>
            </div>
        </>

    );
};

export default ProfileItem;