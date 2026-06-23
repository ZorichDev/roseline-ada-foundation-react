import VcediCta from '../components/VcediCta'

export default function Home() {
    return (
        <>


    {/* Hero start */}
    <div className="hero-area-three bgs-cover overlay pt-250 pb-220 rpy-150"
        style={{ backgroundImage: "url(\"/assets/img/hero/Home-Bg 1.jpg\")", height: "700px" }}>
        <div className="container container-1370">
            <div className="hero-content rmt-50 text-center text-white">
                <h1>
                    <div>Every small donation</div>
                    <div>can create <span>a big change</span></div>
                </h1>
                <p>Only when society comes together and contributes can we make a real impact.</p>
                <div className="hero-btns pt-30 rpt-10">
                    <a className="btn" href="/donate">Donate Now</a>
                </div>
            </div>
        </div>
    </div>
    {/* Hero end */}

    {/* Client Logo area start */}
    <div className="client-logo-area py-75"
        style={{ backgroundImage: "url(\"/assets/img/client-logo/client-logo-section-bg.jpg\")" }}>
        <div className="container container-1370">
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

    {/* Charity Video area start */}
    <div className="charity-video rel pt-115 rpt-120 pb-120">
        <div className="charity-area-bg" style={{ backgroundImage: "url(\"/assets/img/background/charity-video-bg.jpg\")" }}></div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="section-title text-center mb-50">
                        <h2>We are a non-profit charity and NGO organization that Provide help to Vulnerable Children</h2>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="charity-video-part overlay mb-25">
                        <img src="/assets/img/hero/Home-Bg 2.jpg" alt="Video"/>
                        <a className="video-play video-play--two" href="https://www.youtube.com/embed/Wimkqo8gDZ0"
                            data-effect="mfp-zoom-in"><i className="fa fa-play"></i></a>
                    </div>
                    <h4>Water For All Children</h4>
                    <div className="charity-progressbar pt-10">
                        <div className="progress-bar-wrap">
                            <div className="cause-price">
                                <span>#87,689</span>
                                <span>#1000,000</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "60%" }}>
                                </div>
                            </div>
                        </div>
                        <a className="btn" href="/donate">Donate now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Charity Video area end */}

    {/* About us area start */}
    <div className="about-us-three pt-120 pb-55">
        <div className="container">
            <div className="row gap-80 align-items-center">
                <div className="col-xl-7">
                    <div className="about-us-content-three mb-65">
                        <div className="section-title mb-65">
                            <span className="section-title__subtitle mb-10">About the Founder </span>
                            <h2>We make a different life for <span>Nigeria Children</span></h2>
                        </div>
                        <p>Roseline Anibueze is a philanthropist with a deep passion for helping others, especially children and youth from underprivileged backgrounds.
                             Growing up with firsthand experience of financial struggles, she understands the emotional and mental toll that comes with limited access to education 
                             and basic opportunities.
                            Long before founding this foundation in July 2023, Roseline had been quietly involved in acts of kindness — supporting families,
                             sponsoring school fees, and volunteering under various institutions.
                            Her vision with Roseline Ada Foundation is simple and clear:
                            Support children to stay in school, help youth learn skills that matter, and back technology that solves social problems.
                            Roseline believes that with a little support at the right time, people can rewrite their story.</p>

                        <hr className="mt-30 mb-5"/>
                        <div className="about-author">
                            <div className="about-author--img">
                                <img src="/assets/img/about/Rose-3.png" alt="Author"/>
                            </div>
                            <div className="about-author--content">
                                <h5>Roseline Anibueze</h5>
                                <span>Founder, Roseline Ada foundation</span>
                            </div>
                            <div className="about-author--signature">
                                {/* <img src="/assets/img/about/signature.png" alt="Signature"/> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5">
                    <div className="about-us-image-three mb-65">
                        <img src="/assets/img/lady-Rose.jpeg" alt="About"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* About us area end */}

    {/* Our Causes area start */}
    <div className="our-causes-three bgc-black pt-120 pb-90 rel z-1">
        <div className="container">
           <div className="row text-center text-white mb-55">
    <div className="col-lg-4 col-md-6 mb-4">
        <div className="section-title h-100">
            <span className="section-title__subtitle mb-10">Our Mission</span>
            <h3>Empowering <span>Communities</span></h3>
            <p>We help children stay in school, support young people to learn practical skills, assist struggling families,
                 and back simple tech ideas that solve everyday problems, one step at a time.</p>
        </div>
    </div>

    <div className="col-lg-4 col-md-6 mb-4">
        <div className="section-title h-100">
            <span className="section-title__subtitle mb-10"> Our Vision</span>
            <h3>Building a <span>Brighter Future</span></h3>
            <p>To see more children and youth from poor or struggling backgrounds take real steps toward a better life through education, skills, and support. 
                We aim to make life easier for the people we reach — one person, one project at a time.</p>
        </div>
    </div>

    <div className="col-lg-4 col-md-6 mb-4">
        <div className="section-title h-100">
            <span className="section-title__subtitle mb-10">Our Motto</span>
            <h3>Impacting Lives  <span>Positively</span></h3>
            <p>Every action we take is guided by our commitment to create positive, meaningful change in the lives of those we serve. We believe that even small 
                acts of kindness and support can transform lives and build stronger communities.</p>
        </div>
    </div>
</div>

            <div className="row justify-content-center">
                <div className="col-xl-4 col-md-6">
                    <div className="cause-three-item">
                        <div className="image">
                            <img src="/assets/img/causes/cause-1.png" alt="Cause"/>
                            <div className="skillbar" data-percent="80">
                                <span className="skill-bar-percent" style={{ left: "80%" }}></span>
                                <div className="skillbar-bar"></div>
                            </div>
                        </div>
                        <div className="content">
                            <h4>Water For All Children</h4>
                            <p>Clean water is a fundamental right, and we are committed to providing Water for All
                                Children in Nigeria. Access to safe and clean drinking water is essential for the health
                                and well-being of the next generation. </p>
                            <div className="cause-price">
                                {/* <span><i className="flaticon-line-chart"></i> Raised : N23,785</span> */}
                                {/* <span><i className="flaticon-target"></i> Goal : $87,563</span> */}
                            </div>
                            <div className="cause-btn">
                                <a className="btn" href="/donate">Donate now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="cause-three-item item--green">
                        <div className="image">
                            <img src="/assets/img/causes/cause-2.png" alt="Cause"/>
                            <div className="skillbar" data-percent="50">
                                <span className="skill-bar-percent" style={{ left: "50%" }}></span>
                                <div className="skillbar-bar"></div>
                            </div>
                        </div>
                        <div className="content">
                            <h4>Education For All Children</h4>
                            <p>We firmly believe in Education for All Nigerian Children, empowering young minds with
                                knowledge and skills for a brighter future. Every child deserves access to quality
                                education, and through our initiatives, we aim to bridge the gap and create
                                opportunities for every young learner.</p>
                            <div className="cause-price">
                                {/* <span><i className="flaticon-line-chart"></i> Raised : $23,785</span> */}
                                {/* <span><i className="flaticon-target"></i> Goal : N87,563</span> */}
                            </div>
                            <div className="cause-btn">
                                <a className="btn" href="#">Donate now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="cause-three-item item--yellow">
                        <div className="image">
                            <img src="/assets/img/causes/cause-3.png" alt="Cause"/>
                            <div className="skillbar" data-percent="70">
                                <span className="skill-bar-percent" style={{ left: "70%" }}></span>
                                <div className="skillbar-bar"></div>
                            </div>
                        </div>
                        <div className="content">
                            <h4>Support for Vulnerable Children Nigerian Children</h4>
                            <p>We also extend our hands to Help the Vulnerable Children Nigerian population. No one should have to
                                endure Vulnerable Children, and we believe in providing support and resources to those in need.
                                Through our outreach programs, we work to provide shelter, food, and other essential
                                services to help Vulnerable Children individuals regain their dignity and hope for a better future.
                            </p>
                            <div className="cause-price">
                                {/* <span><i className="flaticon-line-chart"></i> Raised : $23,785</span> */}
                                {/* <span><i className="flaticon-target"></i> Goal : $87,563</span> */}
                            </div>
                            <div className="cause-btn">
                                <a className="btn" href="#">Donate now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="cta-area-shapes">
            <img className="one" src="/assets/img/valunteer/valunteer-bg.png" alt="Shape"/>
            <img className="two" src="/assets/img/valunteer/valunteer-bg2.png" alt="Shape"/>
        </div>
        <div className="our-cause-shapes">
            <img className="one top_image_bounce" src="/assets/img/shapes/three-round-green.png" alt="Shape"/>
        </div>
    </div>
    {/* Our Causes area end */}

    {/* Volunteer Section */}
    <div className="become-volunteer-three pt-90 pb-120 rel z-1">
        <div className="container">
            <div className="row gap-80 align-items-center justify-content-between">
                <div className="col-lg-6">
                    <div className="volunteer-left-video rel rmb-75">
                        <a className="video-play video-play--three" href="https://www.youtube.com/embed/Wimkqo8gDZ0"
                            data-effect="mfp-zoom-in"><i className="flaticon-play-1"></i></a>
                        <img src="/assets/img/valunteer/voluntee-2.png" alt="valunteer"/>
                        <img className="small-image" src="/assets/img/valunteer/voluntee-1.png" alt="valunteer"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="volunteer-content form-style-two">
                        <div className="section-title mb-40">
                            <span className="section-title__subtitle mb-10">Become Volunteer</span>
                            <h3>Become a <span>volunteer</span></h3>
                        </div>

                        {/* Volunteer Form */}
                        <form action="#" className="volunteer-form" id="volunteer-form">
                            <div className="row">
                                <div className="col-xl-9 mb-30">
                                 <p>Join us in making a meaningful difference! By volunteering with our foundation, 
                                    you can help create positive change in the lives of those in need. Together, 
                                     we can build a better future for Nigerian children and communities.</p>
                                </div>

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name</label>
                                        <input type="text" id="name" name="name" className="form-control"
                                            placeholder="Your Name" required/>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Your Email</label>
                                        <input type="email" id="email" name="email" className="form-control"
                                            placeholder="Email Address" required/>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="phone_number">Phone Number</label>
                                        <input type="text" id="phone_number" name="phone_number" className="form-control"
                                            placeholder="Phone Number"/>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="birth-day">Date Of Birth</label>
                                        <input type="date" id="birth-day" name="birth-day" className="form-control"/>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="message" id="message" className="form-control" rows="3"
                                            placeholder="Write Your Messages" required></textarea>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group pt-10 mb-0">
                                        <button type="submit" className="btn ml-5">Send us a message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* End Form */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Volunteer area end */}

    {/* Call to action area start */}
    <div className="cta-area overlay bgs-cover pt-110 rpt-120 pb-120"
        style={{ backgroundImage: "url(\"/assets/img/background/cta-three.jpg\")" }}>
        <div className="container container-1170">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                    <div className="section-title text-center text-white">
                        <h2>Join Us in Saving Lives and Creating <span>Lasting Change</span></h2>
                        <p>When our community unites through collective action, we can create meaningful and sustainable impact.</p>
                        <a className="btn mt-30" href="#">Donate Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Call to action area end */}

    <VcediCta />

    {/* Event area start */}
    {/* <div className="event-area-three overlay bgs-cover pt-120 pb-80 rel z-1"
        style=(( backgroundImage: "url(\"/assets/img/causes/urgent-causes.jpg\")" ))>
        <div className="container">
            <div className="row gap-40">
                <div className="col-lg-4">
                    <div className="event-three-content mt-50 rmt-0 mb-30 rmb-65">
                        <div className="section-title mb-30">
                            <span className="section-title__subtitle mb-15">Our Event</span>
                            <h3>Our Upcoming <span>Event</span></h3>
                            <p>Lorem ipsum dolor sit amet, conseceadipisicing elit. Rem autem voluptaobcaecati
                                consectetur adipisicing n magna tellus fringilla eleifend.</p>
                            <p>was popularised in the 1960s with the release of Letraset sheets containing</p>
                        </div>
                        <a className="btn ml-5 mt-25" href="#">See all event</a>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="event-three-slider">
                        <div className="event-item-three">
                            <div className="image">
                                <img src="/assets/img/events/event-three1.jpg" alt="Event"/>
                            </div>
                            <div className="content">
                                <h4><a href="/event-details">Clean Water Event</a></h4>
                                <ul className="blog-meta">
                                    <li><i className="flaticon-time"></i> <a href="#">Jan 18, 2013</a></li>
                                    <li><i className="flaticon-map"></i> <a href="#">melbourne City</a></li>
                                </ul>
                                <p>Children face tough challenges: hunger amalnutrition, limited access to education and
                                    medical consectetur adipisci. Vivamus in magna</p>
                                <a className="event-btn" href="/event-details">Read more <i
                                        className="flaticon-chevron"></i></a>
                            </div>
                        </div>
                        <div className="event-item-three item--green">
                            <div className="image">
                                <img src="/assets/img/events/event-three2.jpg" alt="Event"/>
                            </div>
                            <div className="content">
                                <h4><a href="/event-details">Food For Hunger</a></h4>
                                <ul className="blog-meta">
                                    <li><i className="flaticon-time"></i> <a href="#">Jan 18, 2013</a></li>
                                    <li><i className="flaticon-map"></i> <a href="#">melbourne City</a></li>
                                </ul>
                                <p>Children face tough challenges: hunger amalnutrition, limited access to education and
                                    medical consectetur adipisci. Vivamus in magna</p>
                                <a className="event-btn" href="/event-details">Read more <i
                                        className="flaticon-chevron"></i></a>
                            </div>
                        </div>
                        <div className="event-item-three item--yellow">
                            <div className="image">
                                <img src="/assets/img/events/event-three3.jpg" alt="Event"/>
                            </div>
                            <div className="content">
                                <h4><a href="/event-details">Adopt a Orphan Child</a></h4>
                                <ul className="blog-meta">
                                    <li><i className="flaticon-time"></i> <a href="#">Jan 18, 2013</a></li>
                                    <li><i className="flaticon-map"></i> <a href="#">melbourne City</a></li>
                                </ul>
                                <p>Children face tough challenges: hunger amalnutrition, limited access to education and
                                    medical consectetur adipisci. Vivamus in magna</p>
                                <a className="event-btn" href="/event-details">Read more <i
                                        className="flaticon-chevron"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* Event area end */}

    {/* FAQ area start */}
    <div className="faq-area-three py-100">
        <div className="container">
            <div className="row gap-60 align-items-center">
                <div className="col-lg-6">
                    <div className="faq-three-left-part mb-20 rel">
                        <img src="/assets/img/about/faq-1.png" alt="Man"/>
                        {/* <div className="experiences-years">
                            <span className="experiences-years__number">25</span>
                            <span className="experiences-years__text">Years Experiences</span>
                        </div>
                        <div className="counter-item counter-text-wrap">
                            <div className="counter-item__content">
                                <span className="count-text" data-speed="3000" data-stop="80000">0</span>
                                <h5 className="counter-title">Volunteers</h5>
                            </div>
                        </div>
                        <div className="project-complete">
                            <div className="project-complete__icon">
                                <i className="flaticon-charity"></i>
                            </div>
                            <div className="project-complete__content">
                                <h5>We Complate 15000+ Project</h5>
                                <span>Donet for charity</span>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="faq-content-part mt-20 rmt-65">
                        <div className="section-title mb-45">
                            <span className="section-title__subtitle mb-10">Faq</span>
                            <h2>What is Roseline Ada Foundation <span> all about?</span></h2>
                            <p> Roseline Foundation is a non-profit organization dedicated to making a positive
                                impact on the lives of those in need.</p>
                        </div>
                        <div className="faq-accordion-two" id="faqAccordion">
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingThree">
                                    <button className="collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        What is Roseline Ada Foundation all about?
                                    </button>
                                </h5>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Roseline Foundation is a non-profit organization dedicated to making a positive
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
                                <h5 className="accordion-header" id="headingOne">
                                    <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">
                                        How can I get involved with Roseline Ada Foundation?
                                    </button>
                                </h5>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        You can get involved by donation or supporting. Whether you want to donate,
                                        volunteer
                                        your time, or spread the word, there's a way for everyone to contribute.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingTwo">
                                    <button className="collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        What types of projects does Roseline Ada Foundation undertake?
                                    </button>
                                </h5>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        We engage in a variety of projects
                                    </div>
                                    <div className="accordion-body">
                                        Free scholarship to children.
                                    </div>
                                 
                                    <div className="accordion-body">
                                        Community development.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingFour">
                                    <button className="collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="true"
                                        aria-controls="collapseFour">
                                        Can I make a donation in someone else's name?
                                    </button>
                                </h5>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#faqAccordion">
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

    {/* Testimonial area start */}
    {/* <div className="testimonials-area-three py-120 rel z-1">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-10">
                    <div className="section-title text-center mb-30">
                        <span className="section-title__subtitle mb-10">Feedback</span>
                        <h3>What Say Our <span>Client</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati
                            consectetur adipisicing</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-4 col-md-6">
                    <div className="testimonial-item-three">
                        <div className="author"><img src="/assets/img/testimonials/author1.jpg" alt="Author"/></div>
                        <h4 className="name">Jenny Wilson</h4>
                        <span className="designation">Doner, Canada</span>
                        <div className="text">I was very impresed by thcompanyservice lore ipsu isimply free text used by
                            copy typing refreshing. Neque porro</div>
                        <div className="icon"><img src="/assets/img/testimonials/quote-icon1.png" alt="Quote"/></div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="testimonial-item-three item--green">
                        <div className="author"><img src="/assets/img/testimonials/author2.jpg" alt="Author"/></div>
                        <h4 className="name">Wade Warren</h4>
                        <span className="designation">Doner, Canada</span>
                        <div className="text">I was very impresed by thcompanyservice lore ipsu isimply free text used by
                            copy typing refreshing. Neque porro</div>
                        <div className="icon"><img src="/assets/img/testimonials/quote-icon2.png" alt="Quote"/></div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="testimonial-item-three item--yellow">
                        <div className="author"><img src="/assets/img/testimonials/author3.jpg" alt="Author"/></div>
                        <h4 className="name">Bessie Cooper</h4>
                        <span className="designation">Doner, Canada</span>
                        <div className="text">I was very impresed by thcompanyservice lore ipsu isimply free text used by
                            copy typing refreshing. Neque porro</div>
                        <div className="icon"><img src="/assets/img/testimonials/quote-icon3.png" alt="Quote"/></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="testimonials-bg bgs-cover" style=(( backgroundImage: "url(\"/assets/img/background/feature-bg.jpg\")" ))>
        </div>
    </div> */}
    {/* Testimonial area end */}

    {/* Features area start */}
    <div className="features-area-three pb-55">
        <div className="container">
            <div className="row gap-80 align-items-center">
                <div className="col-xl-5 col-lg-10">
                    <div className="feature-three-content-part pb-35">
                        <div className="section-title mb-50">
                            <span className="section-title__subtitle mb-10">Help People</span>
                            <h2>We create better lives for <span>Nigerian Children</span></h2>
                        </div>
                        <div className="feature-item--three"
                            style={{ backgroundImage: "url(\"/assets/img/features/feature-bg-red.jpg\")" }}>
                            <div className="feature-item__icon">
                                <i className="flaticon-solidarity"></i>
                            </div>
                            <div className="feature-item__content">
                                <h4><a href="/cause-details">Get Inspire And Help</a></h4>
                                <p>"Discover inspiration and make a real difference. Join our mission to support vulnerable children and communities across Nigeria."</p>
                            </div>
                        </div>
                        <div className="feature-item--three"
                            style={{ backgroundImage: "url(\"/assets/img/features/feature-bg-green.jpg\")" }}>
                            <div className="feature-item__icon">
                                <i className="flaticon-heart"></i>
                            </div>
                            <div className="feature-item__content">
                                <h4><a href="/cause-details">Send Us Donations</a></h4>
                                <p>We kindly invite you to contribute to our cause by making a donation to our
                                    foundation. Your support will have a meaningful impact on the lives we aim to uplift
                                    and the positive change we aspire to create.</p>
                            </div>
                        </div>
                        <div className="feature-item--three"
                            style={{ backgroundImage: "url(\"/assets/img/features/feature-bg-yellow.jpg\")" }}>
                            <div className="feature-item__icon">
                                <i className="flaticon-help"></i>
                            </div>
                            <div className="feature-item__content">
                                <h4><a href="/cause-details">Become a volunteer</a></h4>
                                <p>Join our cause and become a volunteer for Roseline Ada foundation. Make a difference
                                    in the lives of those we serve and contribute to meaningful projects that create a
                                    positive impact. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7">
                    <div className="feature-three-image-part pb-65">
                        <img src="/assets/img/features/feature-1.png" alt="Features"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Features area end */}

    {/* Blog area start */}
    <div className="blog-area-three pb-90 rel z-1">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="section-title text-center mb-60">
                        <span className="section-title__subtitle mb-10">Our Blog Post</span>
                        <h2>Our Latest <span>News & Update</span></h2>
                        <p>At Roseline Ada Foundation, we're dedicated to keeping you in the loop with our latest news,
                            updates, and impactful stories. Our commitment to positive change and empowerment drives us
                            to share the following recent highlights:</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-4 col-md-6">
                    <div className="blog-item--three">
                        <div className="blog-item__img">
                            <img src="/assets/img/blog/blog-1.png" alt="Blog"/>
                            {/* <div className="post-date">
                                <b>13</b>
                                <span>dec</span>
                            </div> */}
                        </div>
                        <div className="blog-item__content">
                            <h4><a href="./portfolio-details.html">Education For Children </a></h4>
                            {/* <a href="/blog-details" className="read-more-two">Read More</a> */}
                        </div>
                        <ul className="blog-item__meta">
                            <li> {/* <i className="flaticon-user"></i> */} <a href="#"></a></li>
                            {/* <li className="line"></li> */}
                            <li> {/*<i className="flaticon-bubble-chat"></i> */} <a href="#"></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="blog-item--three item--green">
                        <div className="blog-item__img">
                            <img src="/assets/img/blog/blog-2.png" alt="Blog"/>
                            {/* <div className="post-date">
                                <b>21</b>
                                <span>dec</span>
                            </div> */}
                        </div>
                        <div className="blog-item__content">
                            <h4><a href="./portfolio-details.html">Food For Children</a></h4>
                            {/* <a href="/blog-details" className="read-more-two">Read More</a> */}
                        </div>
                        <ul className="blog-item__meta">
                            <li> {/* <i className="flaticon-user"></i> */} <a href="#"></a></li>
                            {/* <li className="line"></li> */}
                            <li> {/*<i className="flaticon-bubble-chat"></i> */} <a href="#"></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="blog-item--three item--yellow">
                        <div className="blog-item__img">
                            <img src="/assets/img/blog/blog-3.png" alt="Blog"/>
                            {/* <div className="post-date">
                                <b>13</b>
                                <span>dec</span>
                            </div> */}
                        </div>
                        <div className="blog-item__content">
                            <h4><a href="./portfolio-details.html">Healthcare For Children</a></h4>
                            {/* <a href="/blog-details" className="read-more-two">Read More</a> */}
                        </div>
                        <ul className="blog-item__meta">
                            <li> {/* <i className="flaticon-user"></i> */} <a href="#"></a></li>
                            {/* <li className="line"></li> */}
                            <li> {/*<i className="flaticon-bubble-chat"></i> */} <a href="#"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <img className="blog-shape-one top_image_bounce" src="/assets/img/shapes/three-round-yellow.png" alt="Shape"/>
    </div>
    {/* Blog area end */}

    
        </>
    )
}
