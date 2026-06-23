export default function About() {
    return (
        <>


    {/* page banner start */}
    <div className="page-banner-area bgs-cover overlay text-white py-165 rpy-125 rmt-65"
        style={{ backgroundImage: "url(\"/assets/img/background/page-banner.jpg\")" }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8">
                    <div className="breadcrumb-inner text-center">
                        <h2 className="page-title">About Us</h2>
                        <ul className="page-list">
                            <li><a href="/">Home</a></li>
                            <li>About</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* page banner end */}

    {/* Client Logo area start */}
    <div className="client-logo-area py-75"
        style={{ backgroundImage: "url(\"/assets/img/client-logo/client-logo-section-bg.jpg\")" }}>
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

    {/* About area start */}
    <div className="about-area py-120">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="about-image-part">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="image">
                                    <img src="/assets/img/about/about-3.png" alt="About"/>
                                </div>
                                <div className="project-complete mb-30">
                                    <div className="project-complete__icon">
                                        <i className="flaticon-charity"></i>
                                    </div>
                                    <div className="project-complete__content">
                                        <h5>Discover Our Unique Approach</h5>
                                        <span>Donate for charity</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="image mt-65 rmt-15 rel">
                                    <img src="/assets/img/about/about-2.png" alt="About"/>
                                    <div className="experiences-years">
                                        <span className="experiences-years__number">Help</span>
                                        <span className="experiences-years__text">Nigeria Children's</span>
                                    </div>
                                </div>
                                <div className="image">
                                    <img src="/assets/img/about/about-4.png" alt="About"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-content-part rmt-65">
                        <div className="section-title mb-60">
                            <span className="section-title__subtitle mb-10">Our Story & Mission</span>
                            <h2>Discover what makes our approach <span>unique</span></h2>
                        </div>
                        <p>Officially established in July 2023, the Roseline Ada Foundation builds upon years of
                            philanthropic work by founder Roseline Anibueze. What began as personal
                            charitable efforts has grown into a structured organization dedicated to transforming lives
                            across Nigeria.</p>
                        <div className="counter-item counter-text-wrap mt-30">
                            <div className="counter-item__icon"><i className="flaticon-solidarity"></i></div>
                            <div className="counter-item__content">
                                <span className="count-text" data-speed="3000" data-stop="876000">0</span>
                                <span className="counter-title">Naira raised through community support</span>
                            </div>
                        </div>
                        <div className="counter-item counter-text-wrap">
                            <div className="counter-item__icon counter-item__icon--green"><i className="flaticon-help"></i>
                            </div>
                            <div className="counter-item__content">
                                <span className="count-text" data-speed="3000" data-stop="45000">0</span>
                                <span className="counter-title">Volunteers are available to help you</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* About area end */}

    {/* Features area start */}
    <div className="features-area rel bgs-cover z-1" style={{ backgroundImage: "url(\"/assets/img/background/feature-bg.jpg\")" }}>
        <div className="container">
            <div className="row">
                <div className="col-xl-3">
                    <div className="feature-left-wrap bgs-cover text-white overlay"
                        style={{ backgroundImage: "url(\"/assets/img/background/feature-1.png\")" }}>
                        <div className="feature-left-slider">
                            <div className="feature-single-slide">
                                <div className="section-title mb-40">
                                    <h3>Child Education Help</h3>
                                    <p>Your little help can make milion childrean smile model sentence structures</p>
                                </div>
                                <a className="btn btn--green" href="#">Donate now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9">
                    <div className="feature-content">
                        <div className="row justify-content-between">
                            <div className="col-lg-8">
                                <div className="section-title mb-35">
                                    <span className="section-title__subtitle mb-10">Our Features</span>
                                    <h2>Our strategic <span>focus areas</span></h2>
                                    <p>We concentrate our efforts in four key areas to maximize impact:</p>
                                    <ul>
                                        <li>Keeping disadvantaged children in school through scholarships and family
                                            support</li>
                                        <li>Equipping youth with employability skills and digital literacy</li>
                                        <li>Supporting low-income families through health and welfare programs</li>
                                        <li>Funding tech solutions for social problems </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="slider-arrow text-lg-end mb-20">
                                    <button className="feature-prev"><i className="flaticon-left-chevron"></i></button>
                                    <button className="feature-next"><i className="flaticon-next"></i></button>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="feature-right-slider mt-20">
                                    <div className="feature-item">
                                        <div className="feature-item__icon"><i className="flaticon-help"></i></div>
                                        <h4><a href="/cause-details">Become a volunteer</a></h4>
                                        <p>Make a difference by joining Ada Ada as a volunteer. Your
                                            time and effort can create positive change,
                                            impact lives, and contribute to building a better community. Embrace the
                                            opportunity
                                            to empower change through action.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-item__icon feature-item__icon--green"><i
                                                className="flaticon-solidarity"></i></div>
                                        <h4><a href="/cause-details">Quick Fundraising</a></h4>
                                        <p>Support our mission with a quick and impactful contribution. Your donation,
                                            big or small,
                                            goes a long way in creating positive change. By taking action today, you're
                                            directly helping
                                            us provide shelter, education, and opportunities to those in need. Join us
                                            in making a difference now. </p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-item__icon feature-item__icon--yellow"><i
                                                className="flaticon-donation"></i></div>
                                        <h4><a href="/cause-details">Start Donating</a></h4>
                                        <p>Empower change today by contributing to Ada Ada. Your
                                            donations fuel our mission to uplift lives,
                                            provide resources, and create a brighter future for vulnerable individuals.
                                            Make an impact with every contribution. </p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-item__icon"><i className="flaticon-help"></i></div>
                                        <h4><a href="/cause-details">Become an volunteer</a></h4>
                                        <p>Make a difference by joining Ada Ada as a volunteer. Your
                                            time and effort can create positive change,
                                            impact lives, and contribute to building a better community. Embrace the
                                            opportunity
                                            to empower change through action.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-item__icon feature-item__icon--green"><i
                                                className="flaticon-solidarity"></i></div>
                                        <h4><a href="/cause-details">Quick Fundraising</a></h4>
                                        <p>Support our mission with a quick and impactful contribution. Your donation,
                                            big or small,
                                            goes a long way in creating positive change. By taking action today, you're
                                            directly helping
                                            us provide shelter, education, and opportunities to those in need. Join us
                                            in making a difference now. </p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-item__icon feature-item__icon--yellow"><i
                                                className="flaticon-donation"></i></div>
                                        <h4><a href="/cause-details">Start Donating</a></h4>
                                        <p>Empower change today by contributing to Ada Ada. Your
                                            donations fuel our mission to uplift lives,
                                            provide resources, and create a brighter future for vulnerable individuals.
                                            Make an impact with every contribution. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="feature-shapes">
            <img className="one right_image_bounce" src="/assets/img/shapes/three-round-green.png" alt="Shape"/>
        </div>
    </div>
    {/* Features area end */}

    {/* Volunteer area start */}
    <div className="volunteer-area pt-120 pb-95 rel z-1">
        <div className="container container-1170">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-10">
                    <div className="section-title text-center mb-60">
                        <span className="section-title__subtitle mb-10">Our Volunteers</span>
                        <h3>Meet <span>Our Dedicated Team</span></h3>
                        <p>Our work is powered by a network of passionate individuals and organizations who share our
                            vision for a better Nigeria through education, youth development, and social innovation.</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-4 col-md-6">
                    <div className="valunteer-item valunteer-item--green">
                        <div className="valunteer-item__img">
                            <img src="/assets/img/young-male-priest-holding-bible-cemetery.jpg" alt="Valunteer"/>
                            <div className="share">
                                <div className="share__socials">
                                    <a href="#"><i className="flaticon-google-plus-logo"></i></a>
                                    <a href="#" className="twitter"><i className="flaticon-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="flaticon-facebook"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="valunteer-item__designation">
                            <h5>Mr Solomom</h5>
                            <span>volunteer</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="valunteer-item">
                        <div className="valunteer-item__img">
                            <img src="/assets/img/caro2.png" alt="Valunteer"/>
                            <div className="share">
                                <div className="share__socials">
                                    <a href="#"><i className="flaticon-google-plus-logo"></i></a>
                                    <a href="#" className="twitter"><i className="flaticon-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="flaticon-facebook"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="valunteer-item__designation">
                            <h5>Miss Caroline</h5>
                            <span>volunteer</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="valunteer-item valunteer-item--yellow">
                        <div className="valunteer-item__img">
                            <img src="/assets/img/sandra.png" alt="Valunteer"/>
                            <div className="share">
                                <div className="share__socials">
                                    <a href="#"><i className="flaticon-google-plus-logo"></i></a>
                                    <a href="#" className="twitter"><i className="flaticon-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="flaticon-facebook"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="valunteer-item__designation">
                            <h5>Miss Sandra</h5>
                            <span>volunteer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="valunteet-shapres">
            <img className="one top_image_bounce" src="/assets/img/shapes/hand-glass.png" alt="Shape"/>
            <img className="two left_image_bounce" src="/assets/img/shapes/circle-with-line-red.png" alt="Shape"/>
            <img className="three right_image_bounce" src="/assets/img/shapes/heart.png" alt="Shape"/>
            <img className="four top_image_bounce" src="/assets/img/shapes/house-heart.png" alt="Shape"/>
        </div>
    </div>
    {/* Volunteer area end */}

    {/* Testimonials area start */}
    <div className="testimonials-area-two pb-120">
        <div className="container">
            <div className="row gap-100 align-items-center">
                <div className="col-lg-5">
                    <div className="testimonial-two-image rel z-1 rmb-65">
                        <img src="/assets/img/testimonials/testimonia-4.png" alt="Testimonials"/>
                        <img className="circle-shape top_image_bounce" src="/assets/img/testimonials/testimonial-two-bg.png"
                            alt="World"/>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="testimonial-style-two rel">
                        <div className="testimonial-content-slider">
                            <div className="testimonial-content-item">
                                <div className="icon"><img src="/assets/img/testimonials/quote-icon.png" alt="Quote"/></div>
                                <div className="text">The Foundation's impact on my community is profound. Their holistic
                                    approach - providing both immediate resources and long-term opportunities - has
                                    created sustainable change. They've become a true beacon of hope.</div>
                                <div className="ratting">
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                </div>
                                <h4>Chukwuemeka Sixtus</h4>
                            </div>
                            <div className="testimonial-content-item">
                                <div className="icon"><img src="/assets/img/testimonials/quote-icon.png" alt="Quote"/></div>
                                <div className="text">Thanks to Ada Ada, I'm no longer defined by my
                                    circumstances. Their vocational
                                    training program empowered me to acquire skills that changed my life. Their
                                    unwavering belief in people's
                                    potential is remarkable</div>
                                <div className="ratting">
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                </div>
                                <h4>Awhota Paul</h4>
                            </div>
                            <div className="testimonial-content-item">
                                <div className="icon"><img src="/assets/img/testimonials/quote-icon.png" alt="Quote"/></div>
                                <div className="text">Ada Ada's impact is beyond words. Their initiatives
                                    have equipped me with life skills,
                                    and their mentorship has been invaluable. They've opened doors to a brighter future,
                                    and I am forever grateful.</div>
                                <div className="ratting">
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                </div>
                                <h4>Efezino Richie</h4>
                            </div>
                        </div>
                        <div className="testimonial-thumb-two">
                            <div className="testimonial-thumb-item">
                                <img src="/assets/img/testimonials/testimonia-small-1.png" alt="Author"/>
                            </div>
                            <div className="testimonial-thumb-item">
                                <img src="/assets/img/testimonials/testimonia-small-2.png" alt="Author"/>
                            </div>
                            <div className="testimonial-thumb-item">
                                <img src="/assets/img/testimonials/testimonia-small-3.png" alt="Author"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Testimonials area end */}

    {/* Call to action area start */}
    <div className="cta-area overlay bgs-cover pt-110 rpt-120 pb-120"
        style={{ backgroundImage: "url(\"/assets/img/background/cta-three.jpg\")" }}>
        <div className="container container-1170">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                    <div className="section-title text-center text-white">
                        <h2>Welcome To Save Lives And Make Positive <span>Impact</span></h2>
                        <p>Only when the society comes together and contributeswe will be able to make an impact.</p>
                        <a className="btn mt-30" href="#">Donate Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Call to action area end */}

    {/* FAQ area start */}
    <div className="faq-area py-120">
        <div className="container">
            <div className="row gap-100">
                <div className="col-lg-6">
                    <div className="faq-image-part">
                        <div className="row">
                            <div className="col-6">
                                <div className="image">
                                    <img src="/assets/img/about/Frame 51.png" alt="About"/>
                                    <img className="shape one top_image_bounce"
                                        src="/assets/img/shapes/three-round-green.png" alt="Shape"/>
                                </div>
                                <div className="image">
                                    <img src="/assets/img/about/Frame 52.png" alt="About"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="image">
                                    <img src="/assets/img/about/Frame 53.png" alt="About"/>
                                </div>
                                <div className="image">
                                    <img src="/assets/img/about/Frame 54.png" alt="About"/>
                                    <img className="shape two right_image_bounce"
                                        src="/assets/img/shapes/three-round-red.png" alt="Shape"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="faq-content-part rmt-65">
                        <div className="section-title mb-45 for-hide-summary">
                            <span className="section-title__subtitle mb-10">Faq</span>
                            <h2>What is <span>RAF?</span></h2>
                            <p>Roseline Ada Foundation is a non-profit organization dedicated to making a positive
                                impact on the lives of those in need.</p>
                        </div>
                        <div className="faq-accordion" id="faqAccordion">
                            <div className="accordion-item">
                                <h4 className="accordion-header" id="headingOne">
                                    <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">
                                        What is Roseline Ada Foundation all about?
                                    </button>
                                </h4>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Ada is a non-profit organization dedicated to making a positive
                                        impact
                                        on the lives of those in need. Our mission is focused on the underprivileged
                                        children
                                        of Nigeria, who yearns for a better and healthy life, we are here to make their
                                        lives
                                        better with you as our support system.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h4 className="accordion-header" id="headingTwo">
                                    <button className="collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How can I get involved with Roseline Ada Foundation?
                                    </button>
                                </h4>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        You can get involved by donation or supporting. Whether you want to donate,
                                        volunteer
                                        your time, or spread the word, there's a way for everyone to contribute.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h4 className="accordion-header" id="headingThree">
                                    <button className="collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        Can I make a donation in someone else's name?
                                    </button>
                                </h4>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        bsolutely. We offer the option to make donations in honor or memory of someone
                                        special.
                                        You can provide their name, and we will acknowledge the donation accordingly.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* FAQ area end */}

    
        </>
    )
}
