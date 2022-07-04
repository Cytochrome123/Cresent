const Updates = ()=>{
    return(
        <div>
            
            <section id="updates" className="dtr-py-7 bg-grey">
                <div className="container">
                    <div className="row dtr-py-7">
                        <div className="col-12 col-lg-6">
                            <h2 className="text-center mb-5">Latest</h2>
                            {/* <!-- swiper starts --> */}
                            <div className="swiper-container dtr-testimonial-carousel dtr-swiper-has-arrows mt-2">
                                <div className="swiper-wrapper"> 
                                    
                                    {/* <!-- slide 1 starts --> */}
                                    <div className="swiper-slide">
                                        <div className="dtr-testimonial-wrapper">
                                            <div className="d-flex align-items-center dtr-mb-4"> 
                                                {/* <!-- image-->  */}
                                                <img src="assets/images/user-6.jpg" width="80" height="80" alt="image" className="rounded-circle dtr-mr-3" /> 
                                                
                                            </div>
                                            {/* <!-- review text -->  */}
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                            {/* <!-- review text ends -->  */}
                                        </div>
                                    </div>
                                    {/* <!-- slide 1 ends -->  */}
                                    
                                    {/* <!-- slide 2 starts --> */}
                                    <div className="swiper-slide">
                                        <div className="dtr-testimonial-wrapper">
                                            <div className="d-flex align-items-center dtr-mb-4"> 
                                                {/* <!-- image-->  */}
                                                <img src="assets/images/user-6.jpg" width="80" height="80" alt="image" className="rounded-circle dtr-mr-3" /> 
                                                
                                            </div>
                                            {/* <!-- review text -->  */}
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                            {/* <!-- review text ends -->  */}
                                        </div>
                                    </div>
                                    {/* <!-- slide 2 ends -->  */}
                                    
                                    {/* <!-- slide 3 starts --> */}
                                    <div className="swiper-slide">
                                        <div class="dtr-post-carousel-item">
                                        <div class="dtr-post-carousel-content"> <img src="assets/images/post-img3.jpg" alt="image" />
                                            <div class="dtr-post-carousel-entry-content"> <span class="dtr-category">Travel</span>
                                                <h5><a href="#">The Importance of Travel Insurance</a></h5>
                                            </div>
                                        </div>
                        </div>
                                    </div>
                                    {/* <!-- slide 3 ends -->  */}
                                    
                                </div>
                                {/* <!-- Arrows --> */}
                                <div className="swiper-button-next dtr-swiper-next"></div>
                                <div className="swiper-button-prev dtr-swiper-prev"></div>
                            </div>
                            {/* <!-- Swiper ends -->  */}
                        </div>
                        <div className="col-lg-6">
                            {/* <div className="container "> */}
                                <h2 class="text-center mb-5">Upcoming Events</h2>
                                <div class="dtr-recent-posts-widget"> 
                                    
                                    {/* <!-- post item 1 starts --> */}
                                    <div class="dtr-recent-post-item">
                                        <div class="dtr-recent-post-item-left text-center"> 
                                            <p className="mb-0">4</p>
                                            <span className="fs-14 text-primary">Mon</span> 
                                        </div>
                                        <div class="dtr-recent-post-item-right">
                                            <p class="dtr-recent-post-title align-items-center">
                                                <a href="#">Agile practices accelerate machine learning</a>
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- post item 1 ends -->  */}
                                    
                                    {/* <!-- post item 2 starts --> */}
                                    <div class="dtr-recent-post-item">
                                        <div class="dtr-recent-post-item-left text-center"> 
                                            <p className="mb-0">4</p>
                                            <span className="fs-14 text-primary">Mon</span> 
                                        </div>
                                        <div class="dtr-recent-post-item-right">
                                            <p class="dtr-recent-post-title align-items-center">
                                                <a href="#">Agile practices accelerate machine learning</a>
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- post item 2 ends -->  */}
                                    
                                    {/* <!-- post item 3 starts --> */}
                                    <div class="dtr-recent-post-item">
                                        <div class="dtr-recent-post-item-left text-center"> 
                                            <p className="mb-0">4</p>
                                            <span className="fs-14 text-primary">Mon</span> 
                                        </div>
                                        <div class="dtr-recent-post-item-right">
                                            <p class="dtr-recent-post-title align-items-center">
                                                <a href="#">Agile practices accelerate machine learning</a>
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- post item 3 ends -->  */}
                                    
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                
                
            </section>

            
        </div>
    )
}

export default Updates