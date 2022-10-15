

const PostItems = (post) => {

    if(post.shared_title == "")
    {
        $("#shared_image_content").hide();
    }

    return(`
            <div class = "topic-card-padding general-border">
                <div class="row">
                        <div class = "col-2 col-lg-2 col-xl-2 col-xxl-2">
                            <img class=" user-image" src= ${post.userPhoto}>
                        </div>
                        <div class = "col-10 col-lg-10 col-xl-10 col-xxl-10">
                            <div class = "fond-size-16">
                                <span class = "color-fg-white fond-size-16">${post.userName}
                                    <i class="fa fa-check fa-1x"></i>
                                </span>
                                <span class = "text-gray fond-size-16">
                                    - ${post.at}
                                </span>
                                <span class = "text-gray fond-size-16">
                                    - ${post.time}
                                </span>
                                <span class = "text-gray to-right font-size-22 padding-bottom-13">
                                    ...
                                </span>
                            </div>
                            <div class = "text-white padding-top-5 fond-size-16">
                                 <span>${post.content}</span>
                                 <span class = "color-deepskyblue">${post.link_content}</span>
                                 <span>${post.content_after_link}</span>
                            </div>

                        </div>
 
                </div>
                
                <div class="row">
                        <div class = "col-2 col-lg-2 col-xl-2 col-xxl-2">
                        </div>
                        
                        <div class = "text-padding-top-20 col-10 col-lg-10 col-xl-10 col-xxl-10">
                            <div class = "general-border round-image">
                                <div>
                                    <div class="card">
                                        <img src= ${post.image} class="card-img-top round-image" alt="...">
                                    </div>
                                    

                                    <div id="shared_image_content">
                                        
                                        <div class="mt-0 mb-1 padding-all-15">
                                            <span class = "color-fg-white">${post.shared_title}
                                            </span>
                                        </div>

                                        <div class = "text-padding-top padding-all-15-3">
                                            ${post.shared_content}
                                        </div>

                                        <div class = "text-padding-top padding-all-15-3">
                                            <i class="fa-solid fa-link fa-1x"></i>
                                            ${post.shared_link}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                        
                        
                        
                        <div class="row text-padding-top-20 ">
                        
                             <div class = "col-2 col-lg-2 col-xl-2 col-xxl-2">
                             </div>
                             
                             <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                <i class="fa-regular fa-comment"></i>
                                <span class = "padding-left-10">${post.comments}</span>
                            </div>
                             <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                <i class="fa fa-retweet"></i>
                                <span class = "padding-left-10">${post.share}</span>
                            </div>
                             <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                <i class="fa-regular fa-heart"></i>
                                <span class = "padding-left-10">${post.like}</span>
                            </div>
                             <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                                <i class="fa-sharp fa-solid fa-arrow-up-from-bracket"></i>
                            </div>
                
                        </div> 
                        
                        
                        
 
                </div>             
                               
            
            
            </div>
                        
                     
 `);

}
export default PostItems