const WhoToFollowListItem = (whos) => {
    return(`
            <div class = "bottom-border padding-all-15 col gray_bg">
                <div class = "row">
                    <div class = "col-3 col-lg-2 col-xl-2 col-xxl-2">
                        <img class=" user-image" src=${whos.avatarIcon}>
                    </div>
                    <div class = "col-5 col-lg-6 col-xl-6 col-xxl-6">
                        <div class = "fond-size-10 color-fg-white">
                            ${whos.userName}
                            <i class="fa fa-check"></i>
                        </div>
                        <div class = " fond-size-10 color-fg-white">
                            ${whos.Handle}
                        </div>

                    </div>
                    <div class = "col-3 col-lg-4 col-xl-4 col-xxl-3">
                        <a href="#" class="btn btn-width2  btn-primary rounded-pill"><div class = "font-size-12">Follow</div></a>
                    </div>
                </div>
            </div>
 `);
}
export default WhoToFollowListItem;