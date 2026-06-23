import { useRef, useState } from 'react'
import VcediCta from '../components/VcediCta'

export default function Contact() {
    const contactFormRef = useRef(null)
    const [contactStatus, setContactStatus] = useState('idle')

    const handleContactSubmit = (e) => {
        e.preventDefault()
        if (!window.emailjs) return
        setContactStatus('sending')
        window.emailjs.sendForm('service_ptzp7rd', 'template_uvkbxrd', contactFormRef.current).then(
            () => {
                setContactStatus('idle')
                if (window.Swal) {
                    window.Swal.fire({
                        icon: 'success',
                        title: 'Message Sent!',
                        text: 'Thank you for contacting us. We will get back to you shortly.',
                        confirmButtonColor: '#3085d6',
                    })
                }
                contactFormRef.current.reset()
            },
            (error) => {
                setContactStatus('idle')
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
                        <h2 className="page-title">Contact Us</h2>
                        <ul className="page-list">
                            <li><a href="/">Home</a></li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* page banner end */}

    <VcediCta />

    {/* Contact Page Area Start */}
    <div className="contact-page-area overflow-hidden py-120 rpt-100">
        <div className="container">
            <div className="row gap-60 align-items-center">
                <div className="col-lg-6">
                    <div className="faq-three-left-part mb-20 rel rmb-75">
                        <img src="/assets/img/about/faq-shake.png" alt="Man"/>
                        <div className="experiences-years">
                            <span className="experiences-years__number">Help</span>
                            <span className="experiences-years__text">Nigeria Children</span>
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
                                <h5>Discover Our Unique Approach</h5>
                                <span>Donet for charity</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="col-lg-6">
                    <div className="contact-page-form form-style-two py-110 rpy-85">
                        <div className="section-title mb-10">
                            <span className="section-title__subtitle mb-10">Need help</span>
                            <h3>Get In touch</h3>
                        </div>

                        <form id="contact-form" ref={contactFormRef} onSubmit={handleContactSubmit}>
                            <div className="row">
                                <div className="col-xl-9 mb-10">
                                    <p>Have questions, suggestions, or want to get involved? Reach out to Ada Roseline
                                        Foundation today.
                                        Your voice matters, and we're here to connect, collaborate, and create positive
                                        change together.
                                    </p>
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
                                        <input type="date" id="birth-day" name="birth_day" className="form-control"/>
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

                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Contact Page Area End */}

    {/* Contact Info area start */}
    <div className="contact-info-area pb-85">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 col-sm-6">
                    <div className="contact-info-item contact-info-item--green">
                        <div className="contact-info__icon"><i className="flaticon-phone-call"></i></div>
                        <h5>Phone Number</h5>
                        <div className="contact-info__text">
                            <a href="callto:09019555728">09019555728</a><br/>
                            {/* <a href="callto:+1-212-9876543">+1-212-9876543</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="contact-info-item contact-info-item--yellow">
                        <div className="contact-info__icon"><i className="fas fa-paper-plane"></i></div>
                        <h5>Email Address</h5>
                        <div className="contact-info__text">
                            {/* <a href="mailto:info1234@gmail.com">info1234@gmail.com</a><br/> */}
                            {/* <a href="mailto:test1234@gmail.com">test1234@gmail.com</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="contact-info-item">
                        <div className="contact-info__icon"><i className="flaticon-pin"></i></div>
                        <h5>Office Address</h5>
                        <div className="contact-info__text">
                           House 13, Lekki Garden Estate Phase 1, off DKK Bus Stop, Sangotedo-Ajah, <br/>Eti-Osa, Lagos State. Nigeria
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Contact Info area end */}
         {/* Get Involved Section */}
    <section className="get-involved">
        <div className="container">
            <h2 className="fade-in-up">Get Involved</h2>
            <p className="lead fade-in-up">You don't have to do everything to make a difference, just do something. At Roseline Ada Foundation, we welcome people who want to help others in simple and meaningful ways.</p>
            
            <div className="row">
                <div className="col-lg-3 col-md-6 fade-in-up">
                    <div className="involvement-card">
                        <div className="icon">
                            <i className="fas fa-hands-helping"></i>
                        </div>
                        <h4>Volunteer</h4>
                        <p>Join our projects, events, and outreach activities. Volunteers who show commitment may be invited to join our leadership team.</p>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-6 fade-in-up">
                    <div className="involvement-card">
                        <div className="icon">
                            <i className="fas fa-handshake"></i>
                        </div>
                        <h4>Partner With Us</h4>
                        <p>Work with us to support children, youth, families, or back social impact projects, including tech solutions that solve everyday problems.</p>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-6 fade-in-up">
                    <div className="involvement-card">
                        <div className="icon">
                            <i className="fas fa-graduation-cap"></i>
                        </div>
                        <h4>Support a Child or Youth</h4>
                        <p>Sponsor a child's education, fund youth skill training, or provide basic care for a family in need.</p>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-6 fade-in-up">
                    <div className="involvement-card">
                        <div className="icon">
                            <i className="fas fa-heart"></i>
                        </div>
                        <h4>Donate</h4>
                        <p>Every amount counts. Your support helps us continue our work, from school support to hands-on training and small tech projects.</p>
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-5">
                <a href="/donate" className="cta-button">
                    <i className="fas fa-heart me-2"></i>Start Making a Difference Today
                </a>
            </div>
        </div>
    </section>

    {/* Location Map Area Start */}
<div className="contact-page-map wow fadeInUp delay-0-2s">
  <div className="our-location">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.6333741319197!2d3.6112614!3d6.4687518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf99b2e78751b%3A0xe5be0792c533261d!2sLekki%20Gardens%20Phase%201!5e0!3m2!1sen!2sng!4v1718856941876!5m2!1sen!2sng"
      width="100%"
      height="450"
      style={{ border: "0" }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</div>

    {/* Location Map Area End */}

    
        </>
    )
}
