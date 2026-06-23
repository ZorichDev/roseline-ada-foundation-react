import { Link } from 'react-router-dom'
import './vcedi-forms.css'

export default function VcediCta() {
    return (
        <div className="container">
            <div className="vcedi-cta">
                <h3>Join the VCEDI Programme</h3>
                <p>
                    Are you an educator, trainer, or school ready to support vulnerable children in your
                    community? Register as an Associate or apply for a School Partnership under the
                    Vulnerable Child Education &amp; Development Initiative.
                </p>
                <div className="vcedi-cta-buttons">
                    <Link to="/vcedi-associate-registration" className="btn-solid-light-custom">
                        Register as Associate
                    </Link>
                    <Link to="/vcedi-school-partnership" className="btn-outline-light-custom">
                        Apply for School Partnership
                    </Link>
                </div>
            </div>
        </div>
    )
}
