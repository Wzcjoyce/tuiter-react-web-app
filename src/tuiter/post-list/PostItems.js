import React from "react";
const PostItems = (
    {
        post = {
            "userPhoto":"../musk_photo.jpeg",
            "userName": "Elon Musk",
            "at" : "@elonmusk",
            "link" : "",
            "time": "23h",
            "image": "../inspiration4.jpeg",
            "content": "Amazing show about",
            "link_content": "@Inspiration4x",
            "content_after_link":"Mission!",
            "shared_title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "shared_content": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
            "shared_link": "netflix.com",
            "comments" : "4.2K",
            "share" : "3.5K",
            "like" : "37.5K"
        }
    }
) => {

    return(
        <div className=" general-border">
            <div className="padding-top-20">
            </div>
            <div className="row">
                <div className="col-2 col-lg-2 col-xl-2 col-xxl-2">
                    <img className=" user-image" src={post.userPhoto}/>
                </div>
                <div className="col-10 col-lg-10 col-xl-10 col-xxl-10">
                    <div className="fond-size-16">
                                <span className=" fond-size-16 bold-text">{post.userName}
                                    <i className="fa fa-check fa-1x"></i>
                                </span>
                        <span className=" fond-size-16">
                                    - {post.at}
                                </span>
                        <span className=" fond-size-16">
                                    - {post.time}
                                </span>
                        <span className=" to-right font-size-22 padding-bottom-13">
                                    ...
                                </span>
                    </div>
                    <div className=" padding-top-5 fond-size-16">
                        <span>{post.content}</span>
                        <span className="color-deepskyblue">{post.link_content}</span>
                        <span>{post.content_after_link}</span>
                    </div>

                </div>

            </div>

            <div className="row">
                <div className="col-2 col-lg-2 col-xl-2 col-xxl-2">
                </div>

                <div className=" col-10 col-lg-10 col-xl-10 col-xxl-10">
                    <div className="card-padding">
                        <div className="general-border">
                                <div className="">
                                    <img src={post.image} className=" round-image" alt="..."/>
                                </div>

                            {post.shared_link !== "" &&
                                <div id="shared_image_content">

                                    <div className="mt-0 mb-1 padding-top-15 padding-all-15-3">
                                                <span className="">{post.shared_title}
                                                </span>
                                    </div>

                                    <div className="text-padding-top padding-all-15-3">
                                        {post.shared_content}
                                    </div>

                                    <div id = "shared_link"  className="text-padding-top padding-all-15-3">
                                        <i className="fa-solid fa-link fa-1x"></i>
                                        {post.shared_link}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>


                <div className="row text-padding-top-20 text-padding-bottom-25">

                    <div className="col-2 col-lg-2 col-xl-2 col-xxl-2">
                    </div>

                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <i className="fa-regular fa-comment"></i>
                        <span className="padding-left-10">{post.comments}</span>
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <i className="fa fa-retweet" style={{"color":"gray"}}></i>
                        <span className="padding-left-10">{post.share}</span>
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <i className="fa-regular fa-heart"></i>
                        <span className="padding-left-10">{post.like}</span>
                    </div>
                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                        <i className="fa-sharp fa-solid fa-arrow-up-from-bracket"></i>
                    </div>

                </div>


            </div>


        </div>
    );
};

export default PostItems;