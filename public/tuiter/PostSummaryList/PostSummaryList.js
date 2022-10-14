import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";


const WhoToFollowList = () => {
    return(`


        ${
        posts.map(who => {
            return(PostSummaryItem(who));
        }).join('')
        }

    `);
}
export default WhoToFollowList;