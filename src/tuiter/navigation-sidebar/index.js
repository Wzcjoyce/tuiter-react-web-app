import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>

                <Link className = "text-black" to="/tuiter/home">Home</Link>
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <Link className = "text-black" to="/tuiter/explore">Explore</Link>
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <Link className = "text-black" to="">Notifications</Link>
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <Link className = "text-black" to="">Messages</Link>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <Link className = "text-black" to="">Bookmarks</Link>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <Link className = "text-black" to="">Lists</Link>
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <Link className = "text-black" to="">Profile</Link>
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <Link className = "text-black" to="">More</Link>
            </a>
        </div>
    );
};
export default NavigationSidebar;