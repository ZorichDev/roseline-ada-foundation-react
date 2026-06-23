export default function Faqs() {
    return (
        <>


    {/* page banner start */}
    <div className="page-banner-area bgs-cover overlay text-white py-165 rpy-125 rmt-65"
        style={{ backgroundImage: "url(\"/assets/img/background/page-banner.jpg\")" }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-12">
                    <div className="breadcrumb-inner text-center">
                        <h2 className="page-title">frequently asked questions</h2>
                        <ul className="page-list">
                            <li><a href="/">Home</a></li>
                            <li>Faq</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* page banner end */}

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
                            <div className="col-4">
                                <div className="image">
                                    <img src="/assets/img/5.jpg" alt="About"/>
                                </div>
                                <div className="image">
                                    <img src="/assets/img/3.jpg" alt="About"/>
                                    <img className="shape two right_image_bounce"
                                        src="/assets/img/shapes/three-round-red.png" alt="Shape"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="image">
                                    <img src="/assets/img/1.jpg" alt="About"/>
                                </div>
                                <div className="image">
                                    <img src="/assets/img/2.jpg" alt="About"/>
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
                            <h2>How can we <span>help you?</span></h2>
                            <p>Roseline Foundation is a non-profit organization dedicated to making a positive
                                impact on the lives of those in need.</p>
                        </div>
                        <div className="faq-accordion" id="faqAccordion">
                            <div className="accordion-item">
                                <h4 className="accordion-header" id="headingOne">
                                    <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">
                                        What does Roseline Ada Foundation do?
                                    </button>
                                </h4>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                       We help children from underprivileged backgrounds stay in school, support youth with soft skill training,
                                     assist poor families through small interventions, and fund simple tech projects that solve everyday problems.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h4 className="accordion-header" id="headingTwo">
                                    <button className="collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Who can benefit from the foundation’s programs?
                                    </button>
                                </h4>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        We focus on children and youth from low-income families, both in rural and urban areas across Nigeria.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h4 className="accordion-header" id="headingThree">
                                    <button className="collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        Can I apply for support?
                                    </button>
                                </h4>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                       Yes. When applications are open, we post guidelines on our website and social media. Follow us to stay informed.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h4 className="accordion-header" id="headingFour">
                                    <button className="collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false"
                                        aria-controls="collapseFour">
                                        How can I volunteer?
                                    </button>
                                </h4>
                                <div id="collapseFour" className="accordion-collapse collapse"
                                    aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                       You can volunteer by filling out our interest form (link to be added). Volunteers may work in outreach, project support,
                                        or content creation. Committed volunteers may be invited to take leadership roles.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h4 className="accordion-header" id="headingFive">
                                    <button className="collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false"
                                        aria-controls="collapseFive">
                                        How do I donate?
                                    </button>
                                </h4>
                                <div id="collapseFive" className="accordion-collapse collapse"
                                    aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                     You can donate through our bank or online payment channels. Every donation, big or small, helps us reach more people.
                                    </div>
                                </div>
                             </div>
                            <div className="accordion-item">
                                <h4 className="accordion-header" id="headingsix">
                                    <button className="collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix" aria-expanded="false"
                                        aria-controls="collapseSix">
                                        Can I partner with the foundation?
                                    </button>
                                </h4>
                                 <div id="collapseSix" className="accordion-collapse collapse"
                                    aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                     Yes. We welcome partners who share our vision. Whether you're an individual, business, or organization, you can support our social impact projects.
                                    </div>
                                </div>
                             </div>    
                             <div className="accordion-item">
                                <h4 className="accordion-header" id="headingSeven">
                                    <button className="collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven" aria-expanded="false"
                                        aria-controls="collapseSeven">
                                        What kind of tech solutions does the foundation support?
                                    </button>
                                </h4>
                                <div id="collapseSeven" className="accordion-collapse collapse"
                                    aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                     We support simple, scalable tech ideas that address real social problems — like our funded project Queue Update, 
                                     which helps people track fuel station queues in real time.
                                    </div>
                                </div>
                             </div>  
                              <div className="accordion-item">
                                <h4 className="accordion-header" id="headingEight">
                                    <button className="collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseEight" aria-expanded="false"
                                        aria-controls="collapseEight">
                                        Is the foundation religious or political?
                                    </button>
                                </h4>
                                <div id="collapseEight" className="accordion-collapse collapse"
                                    aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                  No. We are not affiliated with any political party or religious group. Our work is purely humanitarian.
                                    </div>
                                </div>
                             </div>     
                              <div className="accordion-item">
                                <h4 className="accordion-header" id="headingNine">
                                    <button className="collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseNine" aria-expanded="false"
                                        aria-controls="collapseNine">
                                       How do you choose who to help?
                                    </button>
                                </h4>
                                <div id="collapseNine" className="accordion-collapse collapse"
                                    aria-labelledby="headingNine" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                 We assess needs based on criteria like family income, school performance, and personal motivation. Selection processes vary by program.
                                    </div>
                                </div>
                             </div> 
                              <div className="accordion-item">
                                <h4 className="accordion-header" id="headingTen">
                                    <button className="collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTen" aria-expanded="false"
                                        aria-controls="collapseTen">
                                      Where are you based?
                                    </button>
                                </h4>
                                <div id="collapseTen" className="accordion-collapse collapse"
                                    aria-labelledby="headingTen" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                 We operate from Nigeria and serve both rural and urban communities. Our work is growing, and we plan to expand into more areas as resources allow.
                                    </div>
                                </div>
                             </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* FAQ area end */}

    {/* Call to action area start */}
    <div className="cta-area overlay bgs-cover pt-110 rpt-120 pb-120"
        style={{ backgroundImage: "url(\"/assets/img/background/cta-three.jpg\")" }}>
        <div className="container container-1170">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                    <div className="section-title text-center text-white">
                        <h2>Welcome To Save Life And Make A Positive <span>Impact</span></h2>
                        <p> Join us in creating meaningful change. Together, we're a force for hope, transforming lives
                            and communities for the better.</p>
                        <a className="btn mt-30" href="/donate">Donate Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Call to action area end */}

    {/* Faq page area start */}
    
    {/* Faq page area end */}

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

    </div>
        </>
    )
}
