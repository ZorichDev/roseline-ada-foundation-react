import { useRef } from 'react'
import VcediCta from '../components/VcediCta'

export default function BecomeVolunteers() {
    const volunteerFormRef = useRef(null)

    const handleVolunteerSubmit = (e) => {
        e.preventDefault()
        if (!window.emailjs) return
        if (window.Swal) {
            window.Swal.fire({ title: 'Sending...', text: 'Please wait while we submit your message.', allowOutsideClick: false, didOpen: () => window.Swal.showLoading() })
        }
        window.emailjs.sendForm('service_ptzp7rd', 'template_uvkbxrd', volunteerFormRef.current).then(
            () => {
                if (window.Swal) {
                    window.Swal.fire({ icon: 'success', title: 'Message Sent!', text: 'Thank you for volunteering. We will contact you soon.', confirmButtonColor: '#3085d6' })
                }
                volunteerFormRef.current.reset()
            },
            (error) => {
                if (window.Swal) {
                    window.Swal.fire({ icon: 'error', title: 'Oops...', text: 'Something went wrong. Please try again later.', confirmButtonColor: '#d33' })
                }
                console.log('FAILED...', error)
            }
        )
    }

    return (
        <>


    {/* page banner start */}
    <div className="page-banner-area bgs-cover overlay text-white py-165 rpy-125 rmt-65"
        style={{ backgroundImage: "url(\"/assets/img/background/page-banner.jpg\")" }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8">
                    <div className="breadcrumb-inner text-center">
                        <h2 className="page-title">Become Volunteers</h2>
                        <ul className="page-list">
                            <li><a href="/">Home</a></li>
                            <li>Become Volunteers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* page banner end */}

    <VcediCta />

    {/* Features area start */}
    <div className="features-area-four bgs-cover overlay pt-120 pb-90"
        style={{ backgroundImage: "url(\"/assets/img/valunteer/feature-bg.jpg\")" }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-4 col-md-6">
                    <div className="feature-item--two feature-item--radius"
                        style={{ backgroundImage: "url(\"/assets/img/features/feature1.jpg\")" }}>
                        <div className="feature-item__icon"><i className="flaticon-help"></i></div>
                        <h4><a href="/cause-details">Become a volunteer</a></h4>
                        <p> Make a difference through action. Join us as a volunteer, empowering lives and inspiring
                            progress.</p>
                        <a className="feature-item__btn" href="https://wa.me/message/TGEZTNGW2RKCG1">join us now</a>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="feature-item--two feature-item--radius feature-item--green"
                        style={{ backgroundImage: "url(\"/assets/img/features/feature2.jpg\")" }}>
                        <div className="feature-item__icon"><i className="flaticon-donation"></i></div>
                        <h4><a href="/cause-details">Get Involved</a></h4>
                        <p>Be part of something meaningful. Join Ada Roseline Foundation to drive positive change in
                            communities.</p>
                        <a className="feature-item__btn" href="https://wa.me/message/TGEZTNGW2RKCG1">join us now</a>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="feature-item--two feature-item--radius feature-item--yellow"
                        style={{ backgroundImage: "url(\"/assets/img/features/feature3.jpg\")" }}>
                        <div className="feature-item__icon"><i className="flaticon-solidarity"></i></div>
                        <h4><a href="/cause-details">Adopt a child</a></h4>
                        <p>ransform a life through adoption. Your support gives a child a brighter future and a loving
                            home.</p>
                        <a className="feature-item__btn" href="https://wa.me/message/TGEZTNGW2RKCG1">join us now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Features area end */}

    {/* Volunteer Section */}
    <div className="become-volunteer-four py-120 rel z-1">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="volunteer-image rmb-65">
                        <img src="/assets/img/valunteer/faq-shake2.png" alt="valunteer"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="volunteer-content form-style-two">
                        <div className="section-title mb-45">
                            <span className="section-title__subtitle mb-10">Our Volunteer</span>
                            <h3>Become a <span>volunteer</span></h3>
                        </div>

                        {/* Volunteer Form */}
                        <form action="#" className="volunteer-form" id="volunteer-form-2" ref={volunteerFormRef} onSubmit={handleVolunteerSubmit}>
                            <div className="row">
                                <div className="col-xl-9 mb-10">
                                    <p>Make a difference through action. Join us as a volunteer, empowering lives and
                                        inspiring progress.</p>
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
                                        <textarea name="message" id="message" className="form-control" rows="2"
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
    {/* Become Volunteer area end */}

    {/* become volunteer video area start */}
    <div className="become-volunteer-video-area pb-65">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-5">
                    <div className="become-volunteer-video-content mb-45">
                        <div className="section-title">
                            <span className="section-title__subtitle mb-10">Be Come Volunteer</span>
                            <h3>Member Benefit</h3>
                        </div>
                        <p>Becoming a member of Ada Roseline Foundation comes with a range of exclusive benefits.
                            Enjoy early access to events, workshops, and resources that empower you to create change.
                            Connect with like-minded individuals, share experiences, and be part of a community
                            dedicated
                            to making a positive impact. Your membership opens doors to inspiration, growth, and the
                            chance
                            to shape a better tomorrow.</p>
                        <p>Elevate your impact. Access exclusive events, resources, and a supportive community,
                            all while driving positive change with Ada Roseline Foundation. Join us today!</p>
                        <ul className="list-style-two pt-20">
                            <li>Restoring Dignity</li>
                            <li>Food help for Nigeria Children's</li>
                            <li>Empowering Lives</li>
                            <li>Suport Vulnerable Children</li>
                            <li>Volenteer</li>
                            <li>Donation</li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-7">
                    <div className="become-volunteer-video overlay mb-55">
                        <img src="/assets/img/valunteer/become-video.png" alt="Video"/>
                        <a className="video-play video-play--four" href="https://www.youtube.com/embed/Wimkqo8gDZ0"
                            data-effect="mfp-zoom-in"><i className="fa fa-play"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* become volunteer video area end */}

    {/* Call to action area start */}
    <div className="cta-area bgc-black pt-110 rpt-120 pb-120 rel z-1">
        <div className="container container-1170">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                    <div className="section-title text-center text-white">
                        <h2>Welcome To Save Life And Make A Positive <span>Impact</span></h2>
                        <p>Only when the society comes together and contributeswe will be able to make an impact.
                            Join us in shaping a brighter future. Together, we're a force for change,
                            bringing hope and transformation to communities in need.
                        </p>
                        <a className="btn mt-35" href="#">Donate Now</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="cta-area-shapes">
            <img className="one" src="/assets/img/valunteer/valunteer-bg.png" alt="Shape"/>
            <img className="two" src="/assets/img/valunteer/valunteer-bg2.png" alt="Shape"/>
        </div>
    </div>
    {/* Call to action area end */}

    {/* Testimonials area start */}
    <div className="testimonials-area-two py-120">
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
                                <div className="text">Ada Roseline Foundation's impact on my community is immeasurable. From
                                    providing essential
                                    resources to creating opportunities, they've transformed lives. Their dedication to
                                    positive change
                                    makes them a beacon of hope.</div>
                                <div className="ratting">
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                </div>
                                <h4>Mendez Sixtus</h4>
                            </div>
                            <div className="testimonial-content-item">
                                <div className="icon"><img src="/assets/img/testimonials/quote-icon.png" alt="Quote"/></div>
                                <div className="text">Thanks to Ada Roseline Foundation, I'm no longer defined by my
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
                                <h4>Efezino Richie</h4>
                            </div>
                            <div className="testimonial-content-item">
                                <div className="icon"><img src="/assets/img/testimonials/quote-icon.png" alt="Quote"/></div>
                                <div className="text">Ada Roseline Foundation's impact is beyond words. Their initiatives
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
                                <h4>Awhota Paul</h4>
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

    {/* Client Logo area start */}
    <div className="client-logo-area bgc-lighter py-30">
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
