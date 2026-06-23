import { Link, useLocation } from 'react-router-dom'

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/portfolio-details', label: 'Portfolio' },
]

const pagesLinks = [
    { to: '/contact', label: 'Contact Us' },
    { to: '/become-volunteers', label: 'Become Volunteer' },
    { to: '/faqs', label: 'FAQ Page' },
    { to: '/vcedi-associate-registration', label: 'VCEDI Associate Registration' },
    { to: '/vcedi-school-partnership', label: 'VCEDI School Partnership' },
]

export default function Navbar() {
    const location = useLocation()

    return (
        <>
            <div className="navbar-top bgc-black navtop--three">
                <div className="container">
                    <div className="navtop-inner">
                        <ul className="topbar-left">
                            <li><span>Welcome to Roseline Ada Foundation!</span></li>
                            <li><i className="fas fa-map-marker-alt"></i> Lagos, Nigeria</li>
                        </ul>
                        <ul className="topbar-right">
                            <li className="social-area">
                                <span>Follow Us - </span>
                                <a href="https://www.facebook.com/share/1EgPYU1APP/"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/roseline_ada_foundation?igsh=MXJzOWo1bmJxdGo4Nw=="><i className="fa-brands fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/roseline-anibueze-hcib-74b062137?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar--three navbar-area navbar-expand-lg">
                <div className="container nav-container navbar-bg">
                    <div className="responsive-mobile-menu">
                        <button className="menu toggle-btn d-block d-lg-none" data-target="#Iitechie_main_menu"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-left"></span>
                            <span className="icon-right"></span>
                        </button>
                    </div>
                    <div className="logo">
                        <Link to="/"><img src="/assets/img/logos/logo-2.png" className="logo-image" alt="img" /></Link>
                    </div>
                    <div className="nav-right-part nav-right-part-mobile">
                        <a className="search-bar-btn" href="#">
                            <i className="flaticon-magnifying-glass"></i>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="Iitechie_main_menu">
                        <ul className="navbar-nav menu-open text-lg-end1">
                            {navLinks.map((item) => (
                                <li key={item.to}>
                                    <div className={location.pathname === item.to ? 'adiv active' : 'adiv'}>
                                        <Link to={item.to}>{item.label}</Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <ul className="navbar-nav menu-open text-lg-end">
                            <li className="menu-item-has-children">
                                <a href="#">Pages ⌵</a>
                             <ul className="sub-menu">
                                 {pagesLinks.map((item) => (
                                <li key={item.to} className={location.pathname === item.to ? 'active' : ''}>
                                <Link to={item.to}>{item.label}</Link>
                                </li>
                                    ))}
                             </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-right-part nav-right-part-desktop">
                        <div className="dropdown"></div>
                        <Link className="btn btn--style-two" to="/donate">Donate Now</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
