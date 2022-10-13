import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./whos.js";


const WhoToFollowList = () => {
    return(`

                <div class = "padding-left-10 text-padding-top-20 col-10 col-lg-12 col-xl-12 col-xxl-12">
                    <div class = "padding-all-15 col gray_bg padding-radius fond-size-18">
                        Who to Follow
                    </div>
                    ${
                    whos.map(who => {
                        return(WhoToFollowListItem(who));
                    }).join('')
                    }
          
                </div>
    `);
}
export default WhoToFollowList;


function WhotoFollowComponent() {
    $('#WhotoFollow').append(`
        <div class = "padding-left-10 text-padding-top-20 col-7 col-lg-10 col-xl-10 col-xxl-8">
                <div class = "padding-all-15 col gray_bg padding-radius fond-size-18">
                    Who to Follow
                </div>

                <div class = " padding-all-15 col gray_bg">
                    <div class = "row">
                        <div class = "col-4 col-lg-3 col-xl-2 col-xxl-2">
                            <img class=" user-image" src="../JAVA.png">
                        </div>
                        <div class = "col-5 col-lg-6 col-xl-6 col-xxl-6">
                            <div class = "fond-size-10">
                                Java
                                <i class="fa fa-check"></i>
                            </div>
                            <div class = "text-gray fond-size-10">
                                @Java
                            </div>

                        </div>
                        <div class = "col-3 col-lg-3 col-xl-4 col-xxl-3">
                            <a href="#" class="btn btn-width2  btn-primary rounded-pill color"><div class = "font-size-12">Follow</div></a>
                        </div>
                    </div>
                </div>

                <div class = " padding-all-15 col gray_bg">
                    <div class = "row">
                        <div class = "col-4 col-lg-3 col-xl-2 col-xxl-2">
                            <img class=" user-image" src="../relativity.jfif">
                        </div>
                        <div class = "col-5 col-lg-6 col-xl-6 col-xxl-6">
                            <div class = "fond-size-10">
                                Relativity Space
                                <i class="fa fa-check"></i>
                            </div>
                            <div class = "text-gray fond-size-10">
                                @RelativitySpace
                            </div>

                        </div>
                        <div class = "col-3 col-lg-3 col-xl-4 col-xxl-3">
                            <a href="#" class="btn btn-width2  btn-primary rounded-pill color"><div class = "font-size-12">Follow</div></a>
                        </div>
                    </div>
                </div>

                <div class = " padding-all-15 col gray_bg">
                    <div class = "row">
                        <div class = "col-4 col-lg-3 col-xl-2 col-xxl-2">
                            <img class=" user-image" src="../virgin.png">
                        </div>
                        <div class = "col-5 col-lg-6 col-xl-6 col-xxl-6">
                            <div class = "fond-size-10">
                                Virgin Galactic
                                <i class="fa fa-check"></i>
                            </div>
                            <div class = "text-gray fond-size-10">
                                @virgingalactic
                            </div>

                        </div>
                        <div class = "col-3 col-lg-3 col-xl-4 col-xxl-3">
                            <a href="#" class="btn btn-width2  btn-primary rounded-pill color"><div class = "font-size-12">Follow</div></a>
                        </div>
                    </div>
                </div>

                <div class = " padding-all-15 col gray_bg">
                    <div class = "row">
                        <div class = "col-4 col-lg-3 col-xl-2 col-xxl-2">
                            <img class=" user-image" src="../nasa.jpg">
                        </div>
                        <div class = "col-5 col-lg-6 col-xl-6 col-xxl-6">
                            <div class = "fond-size-10">
                                Nasa
                                <i class="fa fa-check"></i>
                            </div>
                            <div class = "text-gray fond-size-10">
                                @NASA
                            </div>

                        </div>
                        <div class = "col-3 col-lg-3 col-xl-4 col-xxl-3">
                            <a href="#" class="btn btn-width2  btn-primary rounded-pill color"><div class = "font-size-12">Follow</div></a>
                        </div>
                    </div>
                </div>

                <div class = " padding-all-15 col gray_bg">
                    <div class = "row">
                        <div class = "col-4 col-lg-3 col-xl-2 col-xxl-2">
                            <img class=" user-image" src="../tesla.png">
                        </div>
                        <div class = "col-5 col-lg-6 col-xl-6 col-xxl-6">
                            <div class = "fond-size-10">
                                Tesla
                                <i class="fa fa-flag-usa"></i>
                                <i class="fa fa-check"></i>
                            </div>
                            <div class = "text-gray fond-size-10">
                                @Tesla
                            </div>

                        </div>
                        <div class = "col-3 col-lg-3 col-xl-4 col-xxl-3">
                            <a href="#" class="btn btn-width2  btn-primary rounded-pill color"><div class = "font-size-12">Follow</div></a>
                        </div>
                    </div>
                </div>

                <div class = " padding-all-15 col gray_bg">
                    <div class = "row">
                        <div class = "col-4 col-lg-3 col-xl-2 col-xxl-2">
                            <img class=" user-image" src="../image8.jpg">
                        </div>
                        <div class = "fond-size-10 col-lg-6 col-xl-6 col-xxl-6">
                            <div>
                                Tanjiro Kamado
                                <i class="fa fa-check"></i>
                            </div>
                            <div class = "text-gray fond-size-10">
                                @TanjiroKamado
                            </div>

                        </div>
                        <div class = "col-3 col-lg-3 col-xl-4 col-xxl-3">
                            <a href="#" class="btn btn-width2  btn-primary rounded-pill color"><div class = "font-size-12">Follow</div></a>
                        </div>
                    </div>
                </div>

                <div class = " padding-all-15 col gray_bg">
                    <div class = "row">
                        <div class = "col-4 col-lg-3 col-xl-2 col-xxl-2">
                            <img class=" user-image" src="../image4_1_1.jpg">
                        </div>
                        <div class = "col-5 col-lg-6 col-xl-6 col-xxl-6">
                            <div class = "fond-size-10">
                                Kyojuro Rengoku
                                <i class="fa fa-flag-usa"></i>
                                <i class="fa fa-check"></i>
                            </div>
                            <div class = "text-gray fond-size-10">
                                @KyojuroRengoku
                            </div>

                        </div>
                        <div class = "col-3 col-lg-3 col-xl-4 col-xxl-3">
                            <a href="#" class="btn btn-width2  btn-primary rounded-pill color"><div class = "font-size-12">Follow</div></a>
                        </div>
                    </div>
                </div>

                <div class = " padding-all-15-2 col gray_bg">
                    <div class = "row">
                        <div class = "col-6 blue-color">
                            Show more
                        </div>
                    </div>
                </div>


            </div>



        </div>
   `);
}

$(WhotoFollowComponent);