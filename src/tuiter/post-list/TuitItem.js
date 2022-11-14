import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

const TuitItems = (
    {
        post = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "/images/spacexlogo.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "dislikes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"

        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    const updateTuitHandler = (tuit) => {
        dispatch(updateTuitThunk(tuit));
    }
    return(
        <div className=" general-border">
            <div className="padding-top-20">
            </div>
            <div className="row">
                <div className="col-2 col-lg-2 col-xl-2 col-xxl-2">
                    <img className=" user-image" src={post.image}/>
                </div>
                <div className="col-10 col-lg-10 col-xl-10 col-xxl-10">
                    <div className="fond-size-16">
                                <span className=" fond-size-16 bold-text">{post.username}
                                    <i className="fa fa-check fa-1x"></i>
                                </span>
                        <span className=" fond-size-16">
                                    - {post.handle}
                                </span>
                        <span className=" fond-size-16">
                                    - {post.time}
                                </span>
                        <span className=" to-right font-size-22 padding-bottom-13">
                                <i className="bi bi-x-lg float-end"
                                   onClick={() => deleteTuitHandler(post._id)}></i>
                                </span>
                    </div>
                    <div className=" padding-top-5 fond-size-16">
                        <span>{post.tuit}</span>
                    </div>

                </div>

            </div>

            <div className="row">
                <div className="col-2 col-lg-2 col-xl-2 col-xxl-2">
                </div>


                <div className="row text-padding-top-20 text-padding-bottom-25">

                    <div className="col-2 col-lg-2 col-xl-2 col-xxl-2">
                    </div>

                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                        <i className="fa-regular fa-comment"></i>
                        <span className="padding-left-10">{post.replies}</span>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                        <i className="fa fa-retweet" style={{"color":"gray"}}></i>
                        <span className="padding-left-10">{post.retuits}</span>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                        <i onClick={() => dispatch(updateTuitHandler(
                            {
                                    ...post,
                                    likes: post.likes + 1
                                }
                                ))
                        } className="bi bi-heart-fill me-2 text-danger"></i>
                        <span className="">{post.likes}</span>
                    </div>

                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                        <i onClick={() => dispatch(updateTuitHandler(
                            {
                                ...post,
                                dislikes: post.dislikes == null ? 1 : post.dislikes + 1
                            }
                        ))
                        } className="fa-solid fa-thumbs-down"></i>
                        <span className="padding-left-10">{post.dislikes}</span>
                    </div>

                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                        <i className="fa-sharp fa-solid fa-arrow-up-from-bracket"></i>
                    </div>

                </div>


            </div>


        </div>
    );
};

export default TuitItems;