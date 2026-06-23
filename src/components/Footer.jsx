import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer-area mt-95 footer-area--three overlay text-white"
            style={{ backgroundImage: "url('/assets/img/footer/Frame 60.png')" }}>
            <div className="container">
                <div className="footer-top">
                    <div className="row no-gutter">
                        <div className="col-lg-7">
                            <div className="subscribe-part">
                                <h4>Subscribe Newslatters</h4>
                                <form action="#" onSubmit={(e) => e.preventDefault()}>
                                    <input type="email" placeholder="Email address" required />
                                    <button className="btn btn--style-two" type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="hotline-part overlay bgs-cover"
                                style={{ backgroundImage: "url('/assets/img/footer/Frame 62.png')" }}>
                                <h4><i className="flaticon-headphones"></i> Hot Line</h4>
                                <span className="h3"><a href="callto:09019555728">09019555728</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-75 justify-content-between">
                    <div className="col-xl-3 col-sm-6">
                        <div className="widget widget_about">
                            <div className="logo_footer mb-25">
                                <Link to="/">
                                    <img src="/assets/img/logos/logo-white.png" alt="Logo" />
                                </Link>
                            </div>
                            <p>Empowering lives through compassion and action. Our mission is to create positive
                                change and provide opportunities for a brighter future.</p>
                            <div className="footer-counter-wrap">
                                <div className="counter-item counter-text-wrap">
                                    <div className="counter-item__icon counter-item__icon--green"><i className="flaticon-solidarity"></i></div>
                                    <div className="counter-item__content">
                                        <span className="count-text" data-speed="3000" data-stop="876000">0</span>
                                        <h5 className="counter-title">Donation</h5>
                                    </div>
                                </div>
                                <div className="counter-item counter-text-wrap">
                                    <div className="counter-item__icon"><i className="flaticon-help"></i></div>
                                    <div className="counter-item__content">
                                        <span className="count-text" data-speed="3000" data-stop="45000">0</span>
                                        <h5 className="counter-title">Volunteers</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-sm-3 col-6">
                        <div className="widget widget_nav_menu">
                            <h5 className="widget-title">About</h5>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/donate">Donation</Link></li>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="/events">Event</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-sm-3 col-6">
                        <div className="widget widget_nav_menu">
                            <h5 className="widget-title">Quick links</h5>
                            <ul>
                                <li><Link to="/causes">Causes</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/donate">New campaign</Link></li>
                                <li><Link to="/contact">Site map</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="widget widget_recent_post"></div>
                            </div>
                            <div className="col-sm-6">
                                <div className="widget widget_map">
                                    <h4 className="widget-title">Our Footprint</h4>
                                    <img src="/assets/img/footer/map.png" alt="Map" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom mt-30">
                <div className="container">
                    <div className="footer-bottom__inner">
                        <div className="donate-by">
                            <span>Donate by :</span>
                            <img src="/assets/img/footer/donate-by.png" alt="Donate By" />
                        </div>
                        <div className="copyright">
                            <p>Copyright 2026 All Right Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
