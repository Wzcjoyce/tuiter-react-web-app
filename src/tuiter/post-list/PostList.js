import TuitItems from "./TuitItem.js";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const PostList = () => {
    const {tuits, loading} = useSelector(
    (state) => state.tuitsData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return(
    
        <ul>
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map(post =>
                    <TuitItems
                        key={tuits._id} post={tuits}/> )
            }
        </ul>

    );
}
export default PostList;