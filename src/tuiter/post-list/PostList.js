import TuitItems from "./TuitItem.js";
// import postsArray from "./homeposts.json";
import {useSelector} from "react-redux";

const PostList = () => {
    const postsArray = useSelector(
    (state) => state.post);
    return(
    
        <div>
            {
                postsArray.map(post =>
                    <TuitItems
                        key={post._id} post={post}/> )
            }
        </div>

    );
}
export default PostList;