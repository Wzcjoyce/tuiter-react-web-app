const WhoToFollowListItem = (post) => {
    return(`
            <div class = "topic-card-padding general-border">
                <div class="row">
                    <div class="col-9 col-sm-9 col-md-9 col-lg-8 col-xl-9 col-xxl-9">
                    
                        <div class="mt-0 mb-1">
                            <span class = "text-gray">${post.topic}
                            </span>
                        </div>
                        
                        <div class="mt-0 mb-1">
                            <span class = "color-fg-white">${post.userName}
                                <i class="fa fa-check fa-1x"></i>
                            </span>
                            <span class = "text-gray">
                                - ${post.time}
                            </span>
                        </div>


                        <div class = "text-padding-top color-fg-white">
                            ${post.title}
                        </div>
                    </div>
                    <div class="col-3 col-sm-3 col-md-3 col-lg-4 col-xl-3 col-xxl-3">
                        <img class="card-img-top topic-image-size" src=${post.image} alt="Generic placeholder image">
                    </div>
                    
                    <div class = " text-gray">
                           ${post.tuiters} Tuiters
                    </div>

                </div>
            </div>
 `);
}
export default WhoToFollowListItem;