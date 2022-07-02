const Navbar = ()=>{
    return(
        <div>
            <header id="dtr-header-global" className="fixed-top">
                <nav className="navbar navbar-expand-lg navbar-light dtr-menu">
                    <div className="container"> 
                        
                        {/* <!-- light logo -->  */}
                        <a className="navbar-brand logo-light" href="#home"><img src="assets/images/logo.png" alt="logo" /></a> 
                        {/* <!-- dark logo -->  */}
                        {/* <a className="navbar-brand logo-dark" href="#home"><img src="assets/images/logo-sticky.png" alt="logo" /></a>  */}
                        
                        {/* <!-- nav menu toggler--> */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                        
                        {/* <!-- menu starts--> */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="dtr-scrollspy navbar-nav ml-auto">
                                <li className="nav-item"> <a className="nav-link" href="#home">Home</a> </li>
                                <li className="nav-item"> <a className="nav-link" href="#about">About</a> </li>
                                <li className="nav-item"> <a className="nav-link" href="#updates">Updates</a> </li>
                                <li className="nav-item"> <a className="nav-link" href="#">Academic</a> </li>
                                <li className="nav-item"> <a className="nav-link" href="#">Admission</a> </li>
                                <li className="nav-item"> <a className="nav-link" href="#quote">Contact</a> </li>
                                
                                {/* <!-- dropdown starts--> */}
                                {/* <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Resources </a> */}
                                    {/* <div className="dropdown-menu dropdown-animate" aria-labelledby="navbarDropdown"> <a className="dropdown-item" href="#reviews">Reviews</a> <a className="dropdown-item" href="#features">Features</a> <a className="dropdown-item" href="#cta">Contact</a> </div> */}
                                {/* </li> */}
                                {/* <!-- dropdown ends--> */}
                                
                            </ul>
                        </div>
                        {/* <!-- menu ends-->  */}
                        
                        {/* <!-- button here --> */}
                        <div className="dtr-btn ml-4 d-none d-lg-block"> <a href="#">+2348152420365 <span><i className="icon-phone-call" aria-hidden="true"></i></span> </a> </div>
                        {/* <!-- button ends -->  */}
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar