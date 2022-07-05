// import {Link} from 'react-router-dom'
// import titleSign from '../../public/assets/images/app/title-icon-2.png'

const About = ()=>{
    return(
        <div>
            <section id="about" className="bg-light-blue dtr-py-7">
                <div className="container">
                    <div className="row">
                        <div className="col-12 section-title text-center mb-5">
                            <h2>ABOUT <span className="theme-color">US</span></h2>
                            {/* <img className="image-2" src={require('../../public/assets/images/app/title-icon-2.png').default} alt="App Landing"/> */}
                        </div>
                    </div>
                    <div className="row"> 
                        
                        {/* <!-- column 1 starts --> */}
                        <div className="col-12 col-md-6"> 
                            
                            {/* <!-- text here --> */}
                            <p className="text-size-xl dtr-mb-4">The schol is blah blah ... consectetur adipiscing elit</p>
                            <p className="dtr-mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            
                            {/* <!-- info starts --> */}
                            <div className="d-flex flex-column flex-md-row align-items-center dtr-about"> 
                                <img src="assets/images/user-6.jpg" width="80" height="80" alt="School img" className="rounded-circle" />
                                <div>
                                    <h6 className="dtr-mb-0">Management</h6>
                                    <p className="dtr-mb-0">Signed.</p>
                                    <img src="assets/images/sig.png" alt="image" />
                                </div>
                            </div>
                            {/* <!-- info ends --> */}

                            <div className="dtr-btn wow fadeInUp mt-5" data-wow-delay="0.8s"> 
                                {/* <Link >REa</Link> */}
                                <a href="#">Read More !<span><i className="icon-arrow-right" aria-hidden="true"></i></span> </a>
                            </div>
                            
                            {/* <!-- image here-->  */}
                        </div>
                        {/* <!-- column 1 ends -->  */}
                        
                        {/* <!-- column 2 starts --> */}
                        <div className="col-12 col-md-6 wow fadeInRight" data-wow-delay="0.4s"> 
                            <img src="assets/images/img-abt1.jpg" alt="image" className="dtr-rounded dtr-mb-5" />
                            
                            
                        </div>
                        {/* <!-- column 2 ends -->  */}
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About