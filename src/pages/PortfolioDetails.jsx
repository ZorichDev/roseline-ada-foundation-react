export default function PortfolioDetails() {
    return (
        <>


    {/* page banner start */}
    <div className="page-banner-area bgs-cover overlay text-white py-165 rpy-125 rmt-65"
        style={{ backgroundImage: "url(\"/assets/img/background/page-banner.jpg\")" }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8">
                    <div className="breadcrumb-inner text-center">
                       <h2 className="page-title">Portfolio Details</h2>
                        <ul className="page-list">
                        <li><a href="/">Home</a></li>
                        <li>Portfolio Details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* page banner end */}

    {/* Portfolio Details area start */}
    <div className="portfolio-details-area pt-120 pb-105">
        <div className="container">
            <div className="portfolio-details-content">
                <div className="details-image mb-50">
                    <img src="/assets/img/portfolio/portfolio-1.png" alt="Portfolio details"/>
                </div>
                <h3 className="title mb-20">Helping Vulnerable Children</h3>
                <p>Aiming to Restore Dignity and Hope

                    At Roseline Ada Foundation, our commitment to making a positive impact extends to the homeless
                    population in our community. With an unwavering dedication, we provide much-needed support to those
                    facing the challenges of homelessness.

                    Through our emergency shelter program, we offer a safe heaven, ensuring individuals have a warm place
                    to sleep and regain a sense of security. Beyond immediate relief, we address fundamental needs by
                    distributing essential supplies like food, clothing, and hygiene kits.

                    Our approach isn't just about short-term solutions; it's about creating lasting change. we're dedicated to restoring dignity and hope to those
                    who need it most.
                </p>
                <p>Join us in our mission to uplift lives and combat homelessness. Your involvement can make a
                    meaningful difference in the lives of individuals striving to overcome adversity. Together, we're
                    building a more compassionate and inclusive community. </p>
                <blockquote className="mt-70">
                    <div className="quote-icon"><i className="flaticon-quote"></i></div>
                    At Roseline Ada Foundation, our driving force is the belief that every life has value and potential.
                    Through
                    compassion, dedication, and collaboration, we uplift communities, inspire change, and empower
                    individuals
                    to embrace their dreams. With each step forward, we pave the way for a brighter, more inclusive
                    world
                    where everyone has the opportunity to thrive." - Roseline Ada Foundation.
                </blockquote>
            </div>
        </div>
    </div>
    {/* Portfolio Details area end */}

    {/* become volunteer video area start */}
    <div className="become-volunteer-video-area pb-65">
        <div className="container">
            <div className="row">
                <div className="col-xl-5">
                    <div className="become-volunteer-video-content mb-45">
                        <ul className="list-style-two">
                            <li>Restoring Dignity</li>
                            <li>Empowering Lives</li>
                            <li>A Beacon of Hope</li>
                            <li>Support Vulnerable Children</li>
                            <li>Volunteer</li>
                            <li>Donation</li>
                        </ul>
                        <p>Join us in our journey to uplift the homeless community. With compassion as our guiding
                            light,
                            we're breaking down barriers, creating opportunities, and building a brighter future for
                            those who need it most. Together, we can make a lasting impact and transform lives through
                            unwavering support and dedication.</p>
                        <br/>
                        <h6>Tags :</h6>
                        <div className="tags mb-20">
                            <a href="#">Homeless</a>
                            <a href="#">Donation</a>
                            <a href="#">African</a>
                            <a href="#">Education</a>
                        </div>
                        <ul className="earning-doner">
                            <li>
                                <span>Goal:</span>
                                <b>17,568</b>
                            </li>
                            <li>
                                <span>Raised</span>
                                <b>15,784</b>
                            </li>
                            <li>
                                <span>Total Doner</span>
                                <b>250+</b>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-7">
                    <div className="become-volunteer-video overlay mb-55">
                        <img src="/assets/img/portfolio/portfolio-2.png" alt="Video"/>
                        <a className="video-play video-play--four" href="https://www.youtube.com/embed/Wimkqo8gDZ0"
                            data-effect="mfp-zoom-in"><i className="fa fa-play"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* become volunteer video area end */}

    {/* Client Logo area start */}
    <div className="client-logo-area pb-120">
        <div className="container">
            <div className="client-logo-wrap">
                <div className="client-logo-item">
                    <a href="#"><img src="/assets/img/client-logo/Frame 33.png" alt="Client Logo"/></a>
                </div>
                <div className="client-logo-item">
                    <a href="#"><img src="/assets/img/client-logo/Frame 34.png" alt="Client Logo"/></a>
                </div>
                <div className="client-logo-item">
                    <a href="#"><img src="/assets/img/client-logo/Frame 35.png" alt="Client Logo"/></a>
                </div>
                <div className="client-logo-item">
                    <a href="#"><img src="/assets/img/client-logo/Frame 36.png" alt="Client Logo"/></a>
                </div>
                <div className="client-logo-item">
                    <a href="#"><img src="/assets/img/client-logo/Frame 37.png" alt="Client Logo"/></a>
                </div>
            </div>
        </div>
    </div>
    {/* Client Logo area end */}

    
        </>
    )
}
