export default function CauseDetails() {
    return (
        <>


    {/* page banner start */}
    <div className="page-banner-area bgs-cover overlay text-white py-165 rpy-125 rmt-65"
        style={{ backgroundImage: "url(\"/assets/img/background/page-banner.jpg\")" }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8">
                    <div className="breadcrumb-inner text-center">
                        <h2 className="page-title">Cause Details</h2>
                        <ul className="page-list">
                            <li><a href="/">Home</a></li>
                            <li>Cause Details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* page banner end */}

    {/* Cause Details area start */}
    <div className="cause-details-area py-120">
        <div className="container">
            <div className="row gap-60">
                <div className="col-lg-8">
                    <div className="cause-details-content">
                        <div className="details-image mb-30">
                            <img src="/assets/img/causes/cause-details.jpg" alt="Cause details"/>
                        </div>
                        <h3 className="title">Child Education Help</h3>
                        <p>Integer pulvinar elementum iaculis. Phasellus non turpis in nisi semper finibus in sit amet
                            ipsum. Integer ac orci mattis thinke efficitur enim vel, ultrices tortor. Donec tempor
                            commodo enim ac tincidunt. Ut auctor eros nec eserdum, vel viverra elitions faucibus. Nam
                            volutpat pharetra metus a varius. Etiam sit amet orci non</p>
                        <div className="cause-price mt-30">
                            <span>#87,689</span>
                            <span>#1000,000</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "44%" }}>
                            </div>
                        </div>
                        <div className="row pt-30 pb-5">
                            <div className="col-sm-6">
                                <div className="image mb-30">
                                    <img src="/assets/img/causes/cause-middle1.jpg" alt="Cause"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="image mb-30">
                                    <img src="/assets/img/causes/cause-middle2.jpg" alt="Cause"/>
                                </div>
                            </div>
                        </div>
                        <p>Mauris nec orci dui. Integer id arcu commodo, venenatis nisl ut, ultricies dolor. Phasellus
                            finibus nulla elit, id tincidunt erat varius eget. Proin lobortis urna nec lectus tempor
                            sollicitudin. Maecenas lorem est, fringilla in faucibus quis, efficitur ac ante. Phasellus
                            arcu sapien, egestas quis maximus quis, lobortis sollicitudin erat. vestibulum nisi. In
                            convallis justo et ipsum varius, at euismod elit vulputate. Nunc euismod a nunc</p>
                        <p>laoreet magna. Phasellus rhoncus vel mauris vitae tristique. Orci varius natoque penatibus et
                            magnis dis parturient montes, nascetur ridiculus mus. Nam ultricies eleifend consectetur. In
                            accumsan aliquam velit in convallis. Nulla consequat enim urna, vel tempor diam laoreet nec.
                        </p>
                        <br/>
                        <h4>Why Donate for Child Education</h4>
                        <div className="row pt-15 pb-30">
                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                <div className="feature-item feature-item--bordered">
                                    <div className="feature-item__icon"><i className="flaticon-help"></i></div>
                                    <h5><a href="/cause-details">Donate and Help</a></h5>
                                    <p>Fusce vulputate pureleestibulum purus qlerisque umollis</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                <div className="feature-item feature-item--bordered">
                                    <div className="feature-item__icon feature-item__icon--green"><i
                                            className="flaticon-heart"></i></div>
                                    <h5><a href="/cause-details">With Big Strength</a></h5>
                                    <p>Fusce vulputate pureleestibulum purus qlerisque umollis</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                <div className="feature-item feature-item--bordered">
                                    <div className="feature-item__icon feature-item__icon--yellow"><i
                                            className="flaticon-donation"></i></div>
                                    <h5><a href="/cause-details">Full Inspiration</a></h5>
                                    <p>Fusce vulputate pureleestibulum purus qlerisque umollis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form action="#" className="donation-form">
                        <div className="row">
                            <div className="col-lg-12">
                                <h5>How Mouch Would You Like To Donate ?</h5>
                                <div className="custom-radio-price">
                                    <div className="radio-item">
                                        <input type="radio" name="donationPrice" id="price50" defaultChecked/>
                                        <label htmlFor="price50">50$</label>
                                    </div>
                                    <div className="radio-item">
                                        <input type="radio" name="donationPrice" id="price100"/>
                                        <label htmlFor="price100">100$</label>
                                    </div>
                                    <div className="radio-item">
                                        <input type="radio" name="donationPrice" id="price200"/>
                                        <label htmlFor="price200">200$</label>
                                    </div>
                                    <div className="radio-item">
                                        <input type="radio" name="donationPrice" id="price300"/>
                                        <label htmlFor="price300">300$</label>
                                    </div>
                                    <div className="radio-item">
                                        <input type="radio" name="donationPrice" id="price400"/>
                                        <label htmlFor="price400">400$</label>
                                    </div>
                                    <div className="radio-item">
                                        <input type="radio" name="donationPrice" id="priceAmount"/>
                                        <label htmlFor="priceAmount">Other your amount</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <h5>I want like to make</h5>
                                <div className="custom-radios">
                                    <div className="radio-item">
                                        <input className="form-check-input" type="radio" name="donationType" id="oneTime"
                                            defaultChecked/>
                                        <label className="form-check-label" htmlFor="oneTime">
                                            One Time
                                        </label>
                                    </div>
                                    <div className="radio-item">
                                        <input className="form-check-input" type="radio" name="donationType" id="monthly"/>
                                        <label className="form-check-label" htmlFor="monthly">
                                            Monthly
                                        </label>
                                    </div>
                                    <div className="radio-item">
                                        <input className="form-check-input" type="radio" name="donationType" id="yearly"/>
                                        <label className="form-check-label" htmlFor="yearly">
                                            Yearly
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <h5>Personal Info</h5>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" id="fname" name="fname" className="form-control" value=""
                                        placeholder="Your First Name" required/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="lname">Last Name</label>
                                    <input type="text" id="lname" name="lname" className="form-control" value=""
                                        placeholder="Your Last Name" required/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" className="form-control" value=""
                                        placeholder="Your Email Address" required/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <h5>Select Payment Method</h5>
                                <div className="custom-radios">
                                    <div className="radio-item">
                                        <input className="form-check-input" type="radio" name="paymentMethod"
                                            id="creditCard" defaultChecked/>
                                        <label className="form-check-label" htmlFor="creditCard">
                                            Credit Card
                                        </label>
                                    </div>
                                    <div className="radio-item">
                                        <input className="form-check-input" type="radio" name="paymentMethod" id="payPal"/>
                                        <label className="form-check-label" htmlFor="payPal">
                                            PayPal
                                        </label>
                                    </div>
                                    <div className="radio-item">
                                        <input className="form-check-input" type="radio" name="paymentMethod"
                                            id="bankTransfer"/>
                                        <label className="form-check-label" htmlFor="bankTransfer">
                                            Bank Transfer
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <h5>Credit Card Info</h5>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="card_number">Card Number</label>
                                    <input type="text" id="card_number" name="card_number" className="form-control" value=""
                                        placeholder="Card Number"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="cvc_number">CVC</label>
                                    <input type="text" id="cvc_number" name="cvc" className="form-control" value=""
                                        placeholder="CVC"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="cardholderName">Cardholder Name</label>
                                    <input type="text" id="cardholderName" name="cardholderName" className="form-control"
                                        value="" placeholder="Cardholder Name"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="expirationDate">Expiration</label>
                                    <input type="date" id="expirationDate" name="expirationDate" className="form-control"
                                        value=""/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group pt-10 mb-0">
                                    <div className="total-price">
                                        <div className="price-part">
                                            <h5>Total donation</h5>
                                            <span className="price">$50</span>
                                        </div>
                                        <button type="submit" className="btn ml-5">Donation Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className="main-sidebar rmt-75">
                        <div className="widget widget_search">
                            <h5 className="widget-title">Search Causes</h5>
                            <form className="search-form">
                                <div className="form-group">
                                    <input type="text" placeholder="Search key word" required/>
                                </div>
                                <button className="submit-btn" type="submit"><i
                                        className="flaticon-magnifying-glass"></i></button>
                            </form>
                        </div>
                        <div className="widget widget-recent-causes">
                            <h5 className="widget-title">Recent Causes</h5>
                            <ul>
                                <li>
                                    <div className="image">
                                        <img src="/assets/img/widgets/cause1.jpg" alt="Cause"/>
                                    </div>
                                    <div className="content">
                                        <h6><a href="/cause-details">Clothes For Everyone</a></h6>
                                        <div className="cause-price">
                                            <span><i className="flaticon-line-chart"></i> Raised : $23,785</span>
                                            <span><i className="flaticon-target"></i> Goal : $87,563</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="image">
                                        <img src="/assets/img/widgets/cause2.jpg" alt="Cause"/>
                                    </div>
                                    <div className="content">
                                        <h6><a href="/cause-details">New Kindergarten</a></h6>
                                        <div className="cause-price">
                                            <span><i className="flaticon-line-chart"></i> Raised : $17,568</span>
                                            <span><i className="flaticon-target"></i> Goal : $20,898</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="image">
                                        <img src="/assets/img/widgets/cause3.jpg" alt="Cause"/>
                                    </div>
                                    <div className="content">
                                        <h6><a href="/cause-details">Food for childen</a></h6>
                                        <div className="cause-price">
                                            <span><i className="flaticon-line-chart"></i> Raised : $30,635</span>
                                            <span><i className="flaticon-target"></i> Goal : $50,658</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="widget widget_tag_cloud">
                            <h5 className="widget-title">Tags</h5>
                            <div className="tagcloud">
                                <a href="#">Charity</a>
                                <a href="#">African people</a>
                                <a href="#">Community</a>
                                <a href="#">Food</a>
                                <a href="#">Clean Water</a>
                                <a href="#">Education</a>
                                <a href="#">Health</a>
                                <a href="#">Volunteers</a>
                                <a href="#">Homeless child</a>
                            </div>
                        </div>
                        <div className="widget widget_cta">
                            <div className="cta-widget-inner" style={{ backgroundImage: "url(\"/assets/img/widgets/cta-bg.jpg\")" }}>
                                <h5>We have provided financial help to 5 million people</h5>
                                <a className="btn ml-5" href="/donate">Donate Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Cause Details area end */}

    
        </>
    )
}
