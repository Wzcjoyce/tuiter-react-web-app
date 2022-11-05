const NavigationSidebar = () => {
    return(`
            <div class = "bottom-border padding-all-15 col gray_bg">
                <div class = "text-padding-top-20 menu-left-padding">
                    <i class="fa-sharp fa-solid fa-t fa-2x color-fg-white"></i>
                </div>
                <div class = "text-padding-top-40 row menu-left-padding">
                    <div class = "col-1">
                        <i class="fa fa-home fa-2x col-1 color-fg-white"></i>
                    </div>
                    <div class = "col-1">
                        <span class = "color-fg-white text-padding-left-10 d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block fa-1x">Home</span>
                    </div>
                </div>
    
                <div class = "text-padding-top-40 row menu-left-padding">
                    <div class = "col-1">
                        <i class="fa <i fa-solid fa-hashtag fa-2x color-fg-white"></i>
                    </div>
                    <div class = "col-1">
                        <span class = "color-fg-white text-padding-left-10 d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block fa-1x">Explore</span>
                    </div>
                </div>
    
                <div class = "text-padding-top-40 row menu-left-padding">
                    <div class = "col-1">
                        <i class="fa fa-bell fa-2x color-fg-white"></i>
                    </div>
                    <div class = "col-1">
                        <span class = "color-fg-white text-padding-left-10 d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block fa-1x">Notification</span>
                    </div>
                </div>
    
                <div class = "text-padding-top-40 row menu-left-padding">
                    <div  class = "col-1">
                        <i class="fa fa-envelope fa-2x color-fg-white"></i>
                    </div>
                    <div  class = "col-1">
                        <span class = "color-fg-white text-padding-left-10 d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block fa-1x">Messages</span>
                    </div>
                </div>
    
                <div class = "text-padding-top-40 row menu-left-padding">
                    <div class = "col-1">
                        <i class="fa fa-bookmark fa-2x color-fg-white"></i>
                    </div>
                    <div class = "col-1">
                        <span class = "color-fg-white text-padding-left-10 d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block fa-1x">Bookmarks</span>
                    </div>
                </div>
    
                <div class = "text-padding-top-40 row menu-left-padding">
                    <div  class = "col-1">
                        <i class="fa fa-list fa-2x color-fg-white"></i>
                    </div>
                    <div  class = "col-1">
                        <span class = "color-fg-white text-padding-left-10 d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block fa-1x">List</span>
                    </div>
                </div>
    
                <div class = "text-padding-top-40 row menu-left-padding">
                    <div class = "col-1">
                        <i class="fa fa-user fa-2x color-fg-white"></i>
                    </div>
                    <div class = "col-1">
                        <span class = "color-fg-white text-padding-left-10 d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block fa-1x">Profile</span>
                    </div>
                </div>
    
                <div class = "text-padding-top-40 row menu-left-padding">
                    <div class = "col-1">
                        <i class="fa fa-comment-dots fa-2x color-fg-white"></i>
                    </div>
                    <div class = "col-1">
                        <span class = "color-fg-white text-padding-left-10 d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block fa-1x">More</span>
                    </div>
                </div>
    
                <div class="text-padding-top-40 menu-left-padding col-12 col-sm-12 col-md-12  col-lg-12 col-xl-12 col-xxl-12">
                    <a href="#" class="btn btn-width btn-primary rounded-pill "><span class = "color-fg-white font-12">Tuiter</span></a>
                </div>
            </div>

 `);
}
export default NavigationSidebar;


function NavigationSidebarComponent() {
    $('#wd-NavigationSidebar').append(`
            <div class = "text-padding-top-20 menu-left-padding">
                <i class="fa-sharp fa-solid fa-t fa-2x"></i>
            </div>
            <div class = "text-padding-top-40 row menu-left-padding">
                <div class = "col-1">
                    <i class="fa fa-home fa-2x col-1"></i>
                </div>
                <div class = "col-1">
                    <span class = "text-padding-left-10 d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block fa-1x">Home</span>
                </div>
            </div>

            <div class = "text-padding-top-40 row menu-left-padding">
                <div class = "col-1">
                    <i class="fa <i fa-solid fa-hashtag fa-2x"></i>
                </div>
                <div class = "col-1">
                    <span class = "text-padding-left-10 d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block fa-1x">Explore</span>
                </div>
            </div>

            <div class = "text-padding-top-40 row menu-left-padding">
                <div class = "col-1">
                    <i class="fa fa-bell fa-2x"></i>
                </div>
                <div class = "col-1">
                    <span class = "text-padding-left-10 d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block fa-1x">Notification</span>
                </div>
            </div>

            <div class = "text-padding-top-40 row menu-left-padding">
                <div  class = "col-1">
                    <i class="fa fa-envelope fa-2x"></i>
                </div>
                <div  class = "col-1">
                    <span class = "text-padding-left-10 d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block fa-1x">Messages</span>
                </div>
            </div>

            <div class = "text-padding-top-40 row menu-left-padding">
                <div class = "col-1">
                    <i class="fa fa-bookmark fa-2x"></i>
                </div>
                <div class = "col-1">
                    <span class = "text-padding-left-10 d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block fa-1x">Bookmarks</span>
                </div>
            </div>

            <div class = "text-padding-top-40 row menu-left-padding">
                <div  class = "col-1">
                    <i class="fa fa-list fa-2x"></i>
                </div>
                <div  class = "col-1">
                    <span class = "text-padding-left-10 d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block fa-1x">List</span>
                </div>
            </div>

            <div class = "text-padding-top-40 row menu-left-padding">
                <div class = "col-1">
                    <i class="fa fa-user fa-2x"></i>
                </div>
                <div class = "col-1">
                    <span class = "text-padding-left-10 d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block fa-1x">Profile</span>
                </div>
            </div>

            <div class = "text-padding-top-40 row menu-left-padding">
                <div class = "col-1">
                    <i class="fa fa-comment-dots fa-2x"></i>
                </div>
                <div class = "col-1">
                    <span class = "text-padding-left-10 d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block fa-1x">More</span>
                </div>
            </div>

            <div class="text-padding-top-40 menu-left-padding col-12 col-sm-12 col-md-12  col-lg-12 col-xl-12 col-xxl-12">
                <a href="#" class="btn btn-width btn-primary rounded-pill "><span class = "font-12">Tuiter</span></a>
            </div>
   `);
}

$(NavigationSidebarComponent);