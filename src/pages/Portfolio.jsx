export default function Portfolio() {
    return (
        <>


    {/* page banner start */}
    <div className="page-banner-area bgs-cover overlay text-white py-165 rpy-125 rmt-65"
        style={{ backgroundImage: "url(\"/assets/img/background/page-banner.jpg\")" }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8">
                    <div className="breadcrumb-inner text-center">
                        <h2 className="page-title">Our Recent Work</h2>
                        <ul className="page-list">
                            <li><a href="/">Home</a></li>
                            <li>Portfolio</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* page banner end */}

    {/* Portfolio Area start */}
    <div className="portfolio-page-area pt-120 pb-90 rel z-1">
        <div className="container">
            <ul className="portfolio-filter pb-35">
                <li data-filter="*" className="current">All</li>
                <li data-filter=".homeless">Homeless</li>
                <li data-filter=".cleanWater">Clean Water</li>
                <li data-filter=".education">Education</li>
                <li data-filter=".foodHealth">Food & Health</li>
            </ul>
            <div className="row portfolio-active justify-content-center">
                <div className="col-xl-4 col-md-6 item cleanWater foodHealth">
                    <div className="portfolio-item">
                        <img src="/assets/img/portfolio/portfolio1.jpg" alt="Portfolio"/>
                        <div className="portfolio-item__over">
                            <a className="details-btn" href="/portfolio-details"><i className="flaticon-chevron"></i></a>
                            <h5><a href="/portfolio-details">Helping Vulnerable Children</a></h5>
                            <span className="category">Homeless</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 item homeless foodHealth">
                    <div className="portfolio-item">
                        <img src="/assets/img/portfolio/portfolio2.jpg" alt="Portfolio"/>
                        <div className="portfolio-item__over">
                            <a className="details-btn" href="/portfolio-details"><i className="flaticon-chevron"></i></a>
                            <h5><a href="/portfolio-details">Helping Vulnerable Children</a></h5>
                            <span className="category">Homeless</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 item cleanWater education">
                    <div className="portfolio-item">
                        <img src="/assets/img/portfolio/portfolio3.jpg" alt="Portfolio"/>
                        <div className="portfolio-item__over">
                            <a className="details-btn" href="/portfolio-details"><i className="flaticon-chevron"></i></a>
                            <h5><a href="/portfolio-details">Helping Vulnerable Children</a></h5>
                            <span className="category">Homeless</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 item homeless cleanWater foodHealth">
                    <div className="portfolio-item">
                        <img src="/assets/img/portfolio/portfolio4.jpg" alt="Portfolio"/>
                        <div className="portfolio-item__over">
                            <a className="details-btn" href="/portfolio-details"><i className="flaticon-chevron"></i></a>
                            <h5><a href="/portfolio-details">Helping Vulnerable Children</a></h5>
                            <span className="category">Homeless</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 item homeless education">
                    <div className="portfolio-item">
                        <img src="/assets/img/portfolio/portfolio5.jpg" alt="Portfolio"/>
                        <div className="portfolio-item__over">
                            <a className="details-btn" href="/portfolio-details"><i className="flaticon-chevron"></i></a>
                            <h5><a href="/portfolio-details">Helping Vulnerable Children</a></h5>
                            <span className="category">Homeless</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 item cleanWater education foodHealth">
                    <div className="portfolio-item">
                        <img src="/assets/img/portfolio/portfolio6.jpg" alt="Portfolio"/>
                        <div className="portfolio-item__over">
                            <a className="details-btn" href="/portfolio-details"><i className="flaticon-chevron"></i></a>
                            <h5><a href="/portfolio-details">Helping Vulnerable Children</a></h5>
                            <span className="category">Homeless</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Portfolio Area end */}

    {/* Why Choose Us area start */}
    <div className="why-choose-area overlay py-120">
        <div className="container">
            <div className="row gap-100 align-items-center">
                <div className="col-lg-6">
                    <div className="why-choose-content text-white rmb-65">
                        <div className="section-title mb-60">
                            <span className="section-title__subtitle mb-10">Why Choose Us</span>
                            <h2>Trusted non profit donation <span>center</span></h2>
                        </div>
                        <div className="vission-mission-tab">
                            <ul className="nav mb-25" role="tablist">
                                <li className="nav-item">
                                    <button className="nav-link active" data-bs-toggle="tab"
                                        data-bs-target="#mission">Mission</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" data-bs-toggle="tab"
                                        data-bs-target="#vission">Vission</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#velu">Company
                                        Velu</button>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="mission">Our Mission: There are many
                                    variations of passages of Lorem Ipsum available, but the majority have suffered
                                    alteration in some form, by injected humour, or random aset words which don't look
                                    even slightly believable.</div>
                                <div className="tab-pane fade" id="vission">Our Vission: There are many variations of
                                    passages of Lorem Ipsum available, but the majority have suffered alteration in some
                                    form, by injected humour, or random aset words which don't look even slightly
                                    believable.</div>
                                <div className="tab-pane fade" id="velu">Our Company Velu: There are many variations of
                                    passages of Lorem Ipsum available, but the majority have suffered alteration in some
                                    form, by injected humour, or random aset words which don't look even slightly.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="why-choose-video">
                        <div className="video rel">
                            <img src="/assets/img/video/video-bg.jpg" alt="Video"/>
                            <a className="video-play video-play--one" href="https://www.youtube.com/embed/Wimkqo8gDZ0"
                                data-effect="mfp-zoom-in"><i className="fa fa-play"></i></a>
                        </div>
                        <img className="leaf-shape top_image_bounce" src="/assets/img/shapes/three-round-green.png"
                            alt="Shape"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Why Choose Us area end */}

    {/* Testimonial area start */}
    <div className="testimonials-area-three pt-120 pb-100 rel z-1">
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
        <div className="testimonials-bg bgs-cover" style={{ backgroundImage: "url(\"/assets/img/background/feature-bg.jpg\")" }}>
        </div>
    </div>
    {/* Testimonial area end */}

    {/* FAQ area start */}
    <div className="faq-area-three pb-100">
        <div className="container">
            <div className="row gap-60 align-items-center">
                <div className="col-lg-6">
                    <div className="faq-three-left-part mb-20 rel">
                        <img src="/assets/img/about/faq-left.png" alt="Man"/>
                        <div className="experiences-years">
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
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="faq-content-part mt-20 rmt-65">
                        <div className="section-title mb-45">
                            <span className="section-title__subtitle mb-10">Faq</span>
                            <h2>How can we <span>help you?</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptatem obcaecati
                                consectetur adipisicing</p>
                        </div>
                        <div className="faq-accordion-two" id="faqAccordion">
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingThree">
                                    <button className="collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        How can i get help?
                                    </button>
                                </h5>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Lorem ipsum dolor sit amet, vix an natum labitur eleifnd, mel am laoreet
                                        menandri. Ei justo complectitur duo. Ei mundi solet ut soletu possit quo.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingOne">
                                    <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">
                                        Why We are Help African Childen?
                                    </button>
                                </h5>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Making this the first true generator on the Internet. It uses a dictionary of
                                        over 200 Latin words, combined with a handful of model words which don't look
                                        even slightly believable. If you are going to use a passage
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingTwo">
                                    <button className="collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How can I get help from charity?
                                    </button>
                                </h5>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Lorem ipsum dolor sit amet, vix an natum labitur eleifnd, mel am laoreet
                                        menandri. Ei justo complectitur duo. Ei mundi solet ut soletu possit quo.
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
