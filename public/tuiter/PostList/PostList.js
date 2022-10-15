import PostItems from "./PostItems.js";
import posts from "./posts.js";


const PostList = () => {
    return(`


        ${
        posts.map(post => {
            return(PostItems(post));
        }).join('')
    }

    `);
}
export default PostList;