// import { Link } from 'react-router-dom'
// import './vcedi-forms.css'

// export default function VcediCta() {
//     return (
//         <div className="container">
//             <div className="vcedi-cta">
//                 <h3>Join the VCEDI Programme</h3>
//                 <p>
//                     Are you an educator, trainer, or school ready to support vulnerable children in your
//                     community? Register as an Associate or apply for a School Partnership under the
//                     Vulnerable Child Education &amp; Development Initiative.
//                 </p>
//                 <div className="vcedi-cta-buttons">
//                     <Link to="/vcedi-associate-registration" className="btn-solid-light-custom">
//                         Register as Associate
//                     </Link>
//                     <Link to="/vcedi-school-partnership" className="btn-outline-light-custom">
//                         Apply for School Partnership
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }



import { Link } from 'react-router-dom'

export default function VcediCta() {
    return (
        <div className="vcedi-cta-area py-80" style={{ background: '#1a1a2e' }}>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8">
                        <span style={{ fontSize: 12, fontWeight: 700, color: '#e05c1a', textTransform: 'uppercase', letterSpacing: 2 }}>
                            VCEDI Programme
                        </span>
                        <h3 style={{ color: '#ffffff', margin: '12px 0 16px', fontSize: 28 }}>
                            Join the <span style={{ color: '#e05c1a' }}>VCEDI Programme</span>
                        </h3>
                        <p style={{ color: '#aaa', fontSize: 15, lineHeight: 1.8, marginBottom: 32, maxWidth: 600, margin: '0 auto 32px' }}>
                            Are you an educator, trainer, school, or guardian of a vulnerable child?
                            Register as an Associate, apply for a School Partnership, or submit a
                            Children Support Application under the Vulnerable Child Education &amp; Development Initiative.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
                            <Link to="/vcedi-associate-registration" className="btn">
                                Register as Associate
                            </Link>
                            <Link to="/vcedi-school-partnership"
                                style={{ display: 'inline-block', padding: '12px 28px', border: '2px solid #e05c1a', color: '#e05c1a', borderRadius: 6, fontWeight: 600, fontSize: 14, textDecoration: 'none', transition: 'all 0.3s' }}
                                onMouseEnter={e => { e.target.style.background = '#e05c1a'; e.target.style.color = '#fff' }}
                                onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#e05c1a' }}>
                                Apply for School Partnership
                            </Link>
                            <Link to="/vcedi-children-support"
                                style={{ display: 'inline-block', padding: '12px 28px', border: '2px solid #ffffff55', color: '#fff', borderRadius: 6, fontWeight: 600, fontSize: 14, textDecoration: 'none', transition: 'all 0.3s' }}
                                onMouseEnter={e => { e.target.style.borderColor = '#fff'; e.target.style.background = '#ffffff22' }}
                                onMouseLeave={e => { e.target.style.borderColor = '#ffffff55'; e.target.style.background = 'transparent' }}>
                                Children Support Application
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}