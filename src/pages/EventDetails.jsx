export default function EventDetails() {
    return (
        <>


    {/* page banner start */}
    <div className="page-banner-area bgs-cover overlay text-white py-165 rpy-125 rmt-65"
        style={{ backgroundImage: "url(\"/assets/img/background/page-banner.jpg\")" }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8">
                    <div className="breadcrumb-inner text-center">
                        <h2 className="page-title">Event Details</h2>
                        <ul className="page-list">
                            <li><a href="/">Home</a></li>
                            <li><a href="/events">Events</a></li>
                            <li>Event Details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* page banner end */}

    {/* Event Details area start */}
    <div className="event-details-area py-120">
        <div className="container">
            <div className="row gap-60">
                <div className="col-lg-8">
                    <div className="event-details-content mb-65">
                        <div className="details-image mb-30">
                            <img src="/assets/img/events/event-details.jpg" alt="Event details"/>
                        </div>
                        <h3 className="title">Clean Water Event</h3>
                        <p>Phasellus eros orci, ornare ut ipsum quis, fringilla facilisis dui. Nunc dui est,
                            pellentesque a elementum quis, feugiat sed lectus. Cras ut enim nec quam rutrum mattis.
                            Fusce ante enim, luctus eleifend felis ac, ullamcorper consequat eros. Fusce purus nibh,
                            ultricies et convallis non, luctus id ipsum. Donec dignissim metus rhoncus, tincidunt nibh
                            sed, elementum lectus. Fusce enim nisl, cursus in magna consectetur, suscipit aliquet ante.
                            Ut laoreet, ex ornare auctor Nulla viverra ex ullamcorper tortor cursus, nec convallis nunc
                            rutrum. In justo magna, porta in elit non, iaculis ultrices lectus. Pellentesque fringilla,
                            felis nec tincidunt ullamcorper, enim magna lobortis lacus, vitae mattis ante sapien viverra
                            eros.</p>
                        <p>Aenean viverra tincidunt nibh, in imperdiet nunc. Suspendisse eu ante pretium, consectetur
                            leo at, congue quNulndreriorta ante vitae tristique. Vestibulum ante ipsum primis in
                            faucibus orci luctus et ultrices posuere cubiCurae; Vestibulum ligula libero, feugiat
                            faucibus mattis eget, pulvinar et ligula. erat dignissim. Sed quis rutrum tellus, samet
                            viverra felis. Cras sagittis sem simet urna feugiat rutrum. Nam nulla ipsum, venenatis
                            malesuada felis quis, ultricies convallis neque. Pellentesqstique fringilla tempus. Vivamus
                            bibendum nibh in dolor pharetra, a euismod nulla dignissim. Aenean viverra tincidunt nibh in
                            imperdiet nunc</p>
                        <h5>Pelhabita morbi tristique</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus etmagnis disparturient montesnascetur ridiculus
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
                            massa quis enim. Donec pede justo, fringilla vel aliquet nec, vulputate eget, arcu. In enim
                            justo rhoncus utimperdiet a venenatis vitae justo.</p>
                        <ul className="list-style-two">
                            <li>Kam adipiscin estibulum</li>
                            <li>Food help for african people</li>
                            <li>Kam adipiscin estibulum</li>
                            <li>Suport Vulnerable Children</li>
                            <li>Volenteer</li>
                            <li>Donation</li>
                        </ul>
                    </div>
                    <h4>Join With Us</h4>
                    <form action="#" className="join-us-form form-style-two pt-15">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" id="name" name="name" className="form-control" value=""
                                        placeholder="Your Name" required/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="email">Your Email</label>
                                    <input type="email" id="email" name="email" className="form-control" value=""
                                        placeholder="Email Address" required/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="phone_number">Phone Number</label>
                                    <input type="text" id="phone_number" name="phone_number" className="form-control"
                                        value="" placeholder="Phone Number"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <select className="single-select" name="subject" id="subject">
                                        <option value="default">Select One</option>
                                        <option value="donation">Donation</option>
                                        <option value="help">For Help</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" className="form-control" rows="5"
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
                <div className="col-lg-4">
                    <div className="main-sidebar event-sidebar rmt-75">
                        <div className="widget widget-event-info">
                            <h5 className="widget-title">Event Info</h5>
                            <ul>
                                <li>
                                    <div className="icon"><i className="fa fa-calendar-alt"></i></div>
                                    <div className="content">
                                        <h6>Event Date & Time</h6>
                                        <span>31 december,2022 11:00am - 3:00pm</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
                                    <div className="content">
                                        <h6>Event Venue</h6>
                                        <span>2715 Ash Dr. San Jose, South Dakota</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon"><i className="fa fa-phone-alt"></i></div>
                                    <div className="content">
                                        <h6>Cantact Number</h6>
                                        <span>(406) 555-0120 , (603) 555 - 010</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="widget widget-upcoming-event">
                            <h5 className="widget-title">Upcoming Event</h5>
                            <ul>
                                <li>
                                    <div className="image">
                                        <img src="/assets/img/widgets/event1.jpg" alt="Event"/>
                                    </div>
                                    <div className="content">
                                        <h6><a href="/event-details">Winter Help Event for African Child</a></h6>
                                        <ul className="blog-meta">
                                            <li><i className="flaticon-map"></i> London</li>
                                            <li><i className="flaticon-calendar"></i> 12 Dec, 2022</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="image">
                                        <img src="/assets/img/widgets/event2.jpg" alt="Event"/>
                                    </div>
                                    <div className="content">
                                        <h6><a href="/event-details">Event for Importent of Vaccines</a></h6>
                                        <ul className="blog-meta">
                                            <li><i className="flaticon-map"></i> Old Town</li>
                                            <li><i className="flaticon-calendar"></i> 20 Dec, 2022</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="widget widget_location">
                            <h5 className="widget-title">Event Location</h5>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29134.425681919325!2d144.9659597722831!3d-37.81080325124841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1666799332992!5m2!1sen!2sbd"
                                style={{ border: "0" }} allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
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
    {/* Event Details area end */}

    
        </>
    )
}
