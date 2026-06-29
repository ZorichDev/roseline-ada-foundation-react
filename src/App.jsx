import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import BecomeVolunteers from './pages/BecomeVolunteers'
import Donate from './pages/Donate'
import Causes from './pages/Causes'
import CausesSlider from './pages/CausesSlider'
import CauseDetails from './pages/CauseDetails'
import Events from './pages/Events'
import EventsSlider from './pages/EventsSlider'
import EventDetails from './pages/EventDetails'
import Blog from './pages/Blog'
import BlogClasic from './pages/BlogClasic'
import BlogSlider from './pages/BlogSlider'
import BlogDetails from './pages/BlogDetails'
import Portfolio from './pages/Portfolio'
import PortfolioDetails from './pages/PortfolioDetails'
import Faqs from './pages/Faqs'
import Volunteers from './pages/Volunteers'
import NotFound from './pages/NotFound'
import VcediAssociateRegistration from './pages/VcediAssociateRegistration'
import VcediSchoolPartnership from './pages/VcediSchoolPartnership'
import VcediChildrenSupport from './pages/VcediChildrenSupport'

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/become-volunteers" element={<BecomeVolunteers />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/causes" element={<Causes />} />
                <Route path="/causes-slider" element={<CausesSlider />} />
                <Route path="/cause-details" element={<CauseDetails />} />
                <Route path="/events" element={<Events />} />
                <Route path="/events-slider" element={<EventsSlider />} />
                <Route path="/event-details" element={<EventDetails />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog-clasic" element={<BlogClasic />} />
                <Route path="/blog-slider" element={<BlogSlider />} />
                <Route path="/blog-details" element={<BlogDetails />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio-details" element={<PortfolioDetails />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/volunteers" element={<Volunteers />} />
                <Route path="/vcedi-associate-registration" element={<VcediAssociateRegistration />} />
                <Route path="/vcedi-school-partnership" element={<VcediSchoolPartnership />} />
                <Route path="/vcedi-children-support" element={<VcediChildrenSupport />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}