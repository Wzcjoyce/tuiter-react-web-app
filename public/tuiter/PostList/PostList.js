import PostItems from "./PostItems.js";
import posts from "./posts.js";
import PostItemsNoImageContent from "./PostItemsNoImageContent.js";

const PostList = () => {
    return(`


        ${
        posts.map(post => {
            if(post.shared_content == "")
            {
                return (PostItemsNoImageContent(post));
            }
            return(PostItems(post));
        }).join('')
    }

    `);
}
export default PostList;