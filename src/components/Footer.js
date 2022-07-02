import Map from "./Map"

const Footer = ()=>{
    return(
        <div>
            <footer id="dtr-footer-global" class="bg-blue color-white">
        <div class="container"> 
            
            {/* <!-- footer columns row starts --> */}
            <div class="row"> 
                
                {/* <!-- column 1 starts --> */}
                <div class="col-12 col-lg-6 bg-trans-dark-blue color-white dtr-py-7 dtr-px-5 dtr-rounded-right">
                    <div class="d-flex dtr-mb-4">
                        <div class="dtr-mr-5">
                            <h2>Write to Us</h2>
                            <p>We've got you</p>
                        </div>
                        {/* <!-- icon starts -->  */}
                        <span class="dtr-icon-with-bg dtr-icon-blue ml-auto"><i class="icon-envelope-open-text"></i></span> 
                        {/* <!-- icon ends -->  */}
                    </div>
                    
                    {/* <!-- form starts --> */}
                    <div class="dtr-form dtr-submit-full">
                        <form id="contactform" method="post" action="contact-form.php">
                            <fieldset>
                                <div class="dtr-form-row-2col">
                                    <p class="dtr-form-column">
                                        <input name="name"  type="text" placeholder="Name" />
                                    </p>
                                    <p class="dtr-form-column">
                                        <input name="number" class="number" type="text" placeholder="Phone" />
                                    </p>
                                </div>
                                <p>
                                    <input name="email"  class="required email" type="text" placeholder="Email" />
                                </p>
                                <p class="antispam">Leave this empty: <br />
                                    <input name="url" />
                                </p>
                                <p>
                                    <textarea rows="6" name="message" id="message" class="required"  placeholder="Message"></textarea>
                                </p>
                                <button type="submit" class="dtr-btn-round dtr-btn-blue"> Get a quote</button>
                                <div id="result"></div>
                            </fieldset>
                        </form>
                    </div>
                    {/* <!-- form ends -->  */}
                    
                </div>
                {/* <!-- column 1 ends -->  */}

                {/* <!-- column 2 starts --> */}
                <div class="col-12 col-lg-6 color-white dtr-py-7 dtr-px-5 dtr-rounded-left text-size-md">
                    {/* <p class="text-size-xl dtr-mb-4">100% Satisfaction Guaranteed</p> */}
                    {/* <p class="dtr-mb-5"> Lorem ipsum dolor sit amet eiusmod tempor labore dolore magna aliqua. Ut enim ad minimo laboris ut aliquip ex ea commodo consequat. </p> */}
                    {/* <p class="text-size-xl dtr-mb-4">What will be the next step?</p> */}
                    
                    {/* <!-- list starts --> */}
                    {/* <Map /> */}
                    <ul class="dtr-list-checkmark dtr-mb-5">
                        <li>
                            <h1>MAAAPPPP</h1>
                            
                            <h6>We'll prepare a proposal</h6>
                        </li>
                        <li>
                            <h6>Together we discuss it</h6>
                        </li>
                        <li>
                            <h6>Let's start a policy</h6>
                        </li>
                    </ul>
                    {/* <!-- list ends --> */}
                    
                    <p class="text-size-xl dtr-mb-4">Talk to an expert:</p>
                    <div class="d-flex">
                        <div><i class="icon-phone-call dtr-left-icon dtr-icon-scale"></i><span class="color-blue">0333 567 8900</span></div>
                        <div class="ml-5"><i class="icon-message-square dtr-left-icon dtr-icon-scale"></i><a href="#chat"><span class="color-blue">Live Chat</span></a></div>
                    </div>
                    <i>ADDDRESSS</i>
                    <div class="dtr-accordion accordion" id="home-accordion"> 
                        
                        {/* <!-- accordion tab 1 starts --> */}
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="dtr-mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Contact </button>
                                </h2>
                            </div>
                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#home-accordion">
                                <div class="card-body"> 
                                    <li>Principal - 123456</li>
                                    <li>Chairman Management Board - 123456</li>
                                </div>
                            </div>
                        </div>
                        {/* <!-- accordion tab 1 ends -->  */}

                        {/* <!-- accordion tab 2 starts --> */}
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h2 class="dtr-mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Email </button>
                                </h2>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#home-accordion">
                                <div class="card-body"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words. </div>
                            </div>
                        </div>
                        {/* <!-- accordion tab 2 ends -->  */}
                        
                        {/* <!-- accordion tab 3 starts --> */}
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="dtr-mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Address </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#home-accordion">
                                <div class="card-body"> Adjascent, Holank filling Station, Odo-Arin, Ilora Road, Oyo. </div>
                            </div>
                        </div>
                        {/* <!-- accordion tab 3 ends -->  */}
                        
                        
                        
                    </div>
                </div>
                {/* <!-- column 2 ends -->  */}
                
            </div>
            {/* <!-- footer columns row ends -->  */}
            
            {/* <!-- copyright row starts --> */}
            <div class="row dtr-mt-7">
                <div class="col-12 col-md-6">
                    <ul class="dtr-social-list text-left color-muted-white">
                        <li><a href="#" class="dtr-facebook"></a></li>
                        <li><a href="#" class="dtr-twitter"></a></li>
                        <li><a href="#" class="dtr-linkedin"></a></li>
                    </ul>
                </div>
            </div>
            <div class="text-center"> &copy; copyright 2022. CHO </div>

            {/* <!-- copyright row ends -->  */}
            
        </div>
    </footer>
        </div>
    )
}

export default Footer