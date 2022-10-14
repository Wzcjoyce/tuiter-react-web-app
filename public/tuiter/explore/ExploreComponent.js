import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class = "general-border padding-search-bar">
                <div class="input-group mb-2 search-bar">
                    <span class="input-group-text search-bar bg-white"><i class="fa fa-search color-gray"></i></span>
                    <input type="text" placeholder="Search Tuiter" class="form-control-rounded form-control override-bs search-bar">
                    <span class=" search-bar padding-left-50"><i class="fa fa-cog fa-2x blue-color-setting" ></i></span>
                </div>
                <ul class="nav nav-tabs ">
                    <li class="nav-item">
                        <a class="nav-link fg-color-white active" href="#">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fg-color-white" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fg-color-white" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fg-color-white" href="#">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fg-color-white" href="#">Entertainment</a>
                    </li>

                </ul>
            </div>
            <div class = "general-border">
                <div>
                    <div class="card">
                        <img src="../SpaceX.jpg"
                             class="card-img-top" alt="...">
                    </div>
    
                    <div class = "topic-card-padding">
                        <div class="row">
                            <div class="col-10 text-padding-bottom">
                                <div class="mt-0 mb-1 text-gray">Science - Last Night</div>
                            </div>
                            <br>
                            <div class="mt-0 mb-1 color-fg-white">
                                Starship is a fully-reusable, super-heavy-lift launch vehicle being developed by SpaceX, an American aerospace manufacturer.
                            </div>
    
                        </div>
                    </div>
                </div>
                
               <!-- image with overlaid text -->
               ${PostSummaryList()}
            </div>
           
    `);
}
export default ExploreComponent;
