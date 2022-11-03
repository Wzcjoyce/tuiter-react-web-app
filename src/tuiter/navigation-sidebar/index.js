import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">
                <i className="fa-sharp fa-solid fa-t fa-1x"></i><span className= "d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">Tuiter</span></a>
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>

                <Link className = "text-black" to="/tuiter/home">
                    <i className="fa fa-home fa-1"></i><span className= "d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">Home</span></Link>
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <Link className = "text-black" to="/tuiter/explore">
                    <i className="fa fa-solid fa-hashtag fa-1x"></i><span className= "d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">Explore</span></Link>
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <Link className = "text-black" to="">
                    <i className="fa fa-bell fa-1x"></i><span className= "d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">Notifications</span></Link>
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <Link className = "text-black" to="">
                    <i className="fa fa-envelope fa-1x"></i><span className= "d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">Messages</span></Link>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <Link className = "text-black" to="">
                    <i className="fa fa-bookmark fa-1x"></i><span className= "d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">Bookmarks</span></Link>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <Link className = "text-black" to="">
                    <i className="fa fa-list fa-1x"></i><span  className= "d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">Lists</span></Link>
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <Link className = "text-black" to="/tuiter/profile">
                    <i className="fa fa-user fa-1x "></i><span className= "d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">Profile</span></Link>
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <Link className = "text-black" to="">
                    <i className="fa fa-comment-dots fa-1x"></i><span className= "d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">More</span></Link>
            </a>
        </div>
    );
};
export default NavigationSidebar;