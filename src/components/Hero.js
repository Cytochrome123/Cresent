import Vision from "./Vision"
import Mission from "./Mission"

const Hero = ()=>{
    return(
        <div>
            <section id="home" className="hero-section dtr-py-8 hero-default-bg bg-blue color-white">
                <div className="container">
                    <div className="row align-items-center"> 
                        
                        {/* <!-- column 1 starts --> */}
                        <div className="col-6 dtr-sm-mb-30px"> 
                            
                            {/* <!-- Heading --> */}
                            <h2 className="dtr-mb-4 wow fadeInUp" data-wow-delay="0.4s">WELCOME TO<br />
                                CRESCENT HEIGHTS
                            </h2>
                            
                            {/* <!-- Text --> */}
                            <i className="dtr-mb-5 color-white-muted wow fadeInUp w-75" data-wow-delay="0.6s"> 
                                "Reaching for the stars"
                            </i>
                                
                            {/* <!-- button --> */}
                            <div className="d-flex mt-3">
                                <Vision />
                                <Mission />
                            </div>
                        </div>
                        {/* <!-- column 1 ends -->  */}
                        
                        {/* <!-- column 2 starts --> */}
                        <div className="col-6 text-right wow fadeInRight" data-wow-delay="0.4s"> 
                            
                            {/* <!-- Image -->  */}
                            <img src="assets/images/video-bg-img.png" alt="video-bg" /> 
                            
                            {/* <!-- video button starts --> */}
                            {/* <div className="dtr-video-wrapper dtr-video-button-lg">
                                <div className="dtr-video-wrapper-inner"> 
                                    <a className="dtr-video-popup dtr-video-button" data-autoplay="true" data-vbtype="video" href="https://www.youtube.com/watch?v=kuceVNBTJio">
                                        <span className="dtr-video-button-wrap-inner"></span> 
                                        <span className="dtr-border-animation dtr-border-1"></span> 
                                        <span className="dtr-border-animation dtr-border-2"></span> 
                                    </a> 
                                </div>
                            </div> */}
                            {/* <!-- video button ends -->  */}
                            
                        </div>
                        {/* <!-- column 2 ends -->  */}
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero