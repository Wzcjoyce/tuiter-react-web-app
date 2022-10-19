import PostItems from "./PostItems.js";
import postsArray from "./posts.json";

const PostList = () => {
    return(
    
        <div className="">
            {
                postsArray.map(post =>
                    <PostItems
                        key={post._id} post={post}/> )
            }
        </div>

    );
}
export default PostList;