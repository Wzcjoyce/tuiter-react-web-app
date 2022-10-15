import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";


const PostSummaryList = () => {
    return(`


        ${
        posts.map(who => {
            return(PostSummaryItem(who));
        }).join('')
        }

    `);
}
export default PostSummaryList;