export default function Donate() {
    return (
        <>


    {/* page banner start */}
    <div className="page-banner-area bgs-cover overlay text-white py-165 rpy-125 rmt-65"
        style={{ backgroundImage: "url(\"/assets/img/background/page-banner.jpg\")" }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8">
                    <div className="breadcrumb-inner text-center">
                        <h2 className="page-title">Donate Now</h2>
                        <ul className="page-list">
                            <li><a href="/">Home</a></li>
                            <li>Donate Now</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* page banner end */}

    {/* Donation area start */}
    <div className="donation-area py-120">
        <div className="container">
            <div className="row gap-60">
                <div className="col-lg-8">
                    <form action="#" className="donation-form">
                        <div className="row">
                            <div className="col-lg-12">
                                <h5>How Mouch Would You Like To Donate ?</h5>
                                <div className="custom-radio-price">
                                    <div className="radio-item">
                                        <input type="radio" name="donationPrice" id="price50" defaultChecked/>
                                        {/* <label htmlFor="price50">50$</label> */}
                                    </div>
                                    <div className="radio-item">
                                        <input type="radio" name="donationPrice" id="price100"/>
                                        {/* <label htmlFor="price100">100$</label> */}
                                    </div>
                                    <div className="radio-item">
                                        <input type="radio" name="donationPrice" id="price200"/>
                                        {/* <label htmlFor="price200">200$</label> */}
                                    </div>
                                    <div className="radio-item">
                                        <input type="radio" name="donationPrice" id="price300"/>
                                        {/* <label htmlFor="price300">300$</label> */}
                                    </div>
                                    <div className="radio-item">
                                        <input type="radio" name="donationPrice" id="price400"/>
                                        {/* <label htmlFor="price400">400$</label> */}
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
                                            {/* <h5>Total donation</h5> */}
                                            {/* <span className="price">$50</span> */}
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
                                        <img src="/assets/img/close-up-kids-looking-smartphone.jpg" alt="Cause"/>
                                    </div>
                                    <div className="content">
                                        <h6><a href="/cause-details">Clothes For Everyone</a></h6>
                                        <div className="cause-price">
                                            {/* <span><i className="flaticon-line-chart"></i> Raised : $23,785</span> */}
                                            {/* <span><i className="flaticon-target"></i> Goal : $87,563</span> */}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="image">
                                        <img src="/assets/img/medium-shot-african-kids-window.jpg" alt="Cause"/>
                                    </div>
                                    <div className="content">
                                        <h6><a href="/cause-details">New Kindergarten</a></h6>
                                        <div className="cause-price">
                                            {/* <span><i className="flaticon-line-chart"></i> Raised : $17,568</span> */}
                                            {/* <span><i className="flaticon-target"></i> Goal : $20,898</span> */}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="image">
                                        <img src="./assets/img/medium-shot-kids-posing-outdoors.jpg" alt="Cause"/>
                                    </div>
                                    <div className="content">
                                        <h6><a href="/cause-details">Food for childen</a></h6>
                                        <div className="cause-price">
                                            {/* <span><i className="flaticon-line-chart"></i> Raised : $30,635</span> */}
                                            {/* <span><i className="flaticon-target"></i> Goal : $50,658</span> */}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="widget widget_tag_cloud">
                            <h5 className="widget-title">Tags</h5>
                            <div className="tagcloud">
                                <a href="#">Charity</a>
                                <a href="#">Nigeria Children</a>
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
                            <div className="cta-widget-inner" style={{ backgroundImage: "url(\"./assets/img/1.jpg\")" }}>
                                <h5>We have provided financial help to 5 million people</h5>
                                <a className="btn ml-5" href="/donate">Donate Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Donation area end */}

    
        </>
    )
}
