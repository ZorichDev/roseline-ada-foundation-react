import { useEffect } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import usePersistentPlugins from '../hooks/usePersistentPlugins'
import usePagePlugins from '../hooks/usePagePlugins'

function ScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}

export default function Layout() {
    usePersistentPlugins()
    usePagePlugins()

    return (
        <>
            <ScrollToTop />

            <div className="preloader" id="preloader">
                <div className="preloader-inner">
                    <div className="spinner">
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                    </div>
                </div>
            </div>

            <div className="td-search-popup" id="td-search-popup">
                <form action="/" className="search-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search....." />
                    </div>
                    <button type="submit" className="submit-btn"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className="body-overlay" id="body-overlay"></div>

            <Navbar />

            <Outlet />

            <Footer />

            <div className="back-to-top">
                <span className="back-top"><i className="fa fa-angle-up"></i></span>
            </div>
        </>
    )
}