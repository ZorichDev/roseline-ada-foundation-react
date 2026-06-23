import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../components/vcedi-forms.css'

export default function VcediAssociateRegistration() {
    const formRef = useRef(null)
    const [status, setStatus] = useState('idle') // idle | sending | success | error

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!window.emailjs) return
        setStatus('sending')

        // NOTE: replace 'service_ptzp7rd' and 'template_uvkbxrd' with the
        // EmailJS service ID / template ID you create for this form, and
        // set the template's "To Email" field to impact@roselineadafoundation.org
        window.emailjs.sendForm('service_ptzp7rd', 'template_uvkbxrd', formRef.current).then(
            () => {
                setStatus('success')
                formRef.current.reset()
                if (window.Swal) {
                    window.Swal.fire({
                        icon: 'success',
                        title: 'Registration Submitted!',
                        text: 'Thank you for registering as a VCEDI Associate. We will review your details and reach out after verification.',
                        confirmButtonColor: '#3085d6',
                    })
                }
            },
            (error) => {
                setStatus('error')
                console.log('FAILED...', error)
                if (window.Swal) {
                    window.Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong. Please try again later.',
                        confirmButtonColor: '#d33',
                    })
                }
            }
        )
    }

    return (
        <>
            <div className="page-banner-area bgs-cover overlay text-white py-165 rpy-125 rmt-65"
                style={{ backgroundImage: 'url("/assets/img/background/page-banner.jpg")' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="breadcrumb-inner text-center">
                                <h2 className="page-title">VCEDI Associate Registration</h2>
                                <ul className="page-list">
                                    <li><Link to="/">Home</Link></li>
                                    <li>Associate Registration</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vcedi-form-area py-120">
                <div className="container">
                    <div className="row justify-content-center mb-40">
                        <div className="col-lg-9 text-center">
                            <p>Roseline Ada Foundation engages Associates to support its education, development, and welfare
                                programmes under VCEDI (Vulnerable Child Education &amp; Development Initiative). Associates
                                include individuals and organizations providing training, teaching, mentorship, book supply,
                                digital education, craftsmanship, or other educational support services. All information
                                provided will be reviewed and verified before onboarding.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <form ref={formRef} onSubmit={handleSubmit}>

                                {/* Section 1 */}
                                <div className="section-block">
                                    <h4>Section 1: Associate Information</h4>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="full_name">Full Name / Organization Name</label>
                                                <input type="text" id="full_name" name="full_name" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="choice-group">
                                                <label className="choice-title">Type of Associate</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="associate_type" id="t_trainer" value="Trainer" required /><label className="form-check-label" htmlFor="t_trainer">Trainer</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="associate_type" id="t_teacher" value="Teacher" /><label className="form-check-label" htmlFor="t_teacher">Teacher</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="associate_type" id="t_mentor" value="Mentor" /><label className="form-check-label" htmlFor="t_mentor">Mentor</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="associate_type" id="t_book" value="Book Supplier" /><label className="form-check-label" htmlFor="t_book">Book Supplier</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="associate_type" id="t_service" value="Educational Service Provider" /><label className="form-check-label" htmlFor="t_service">Educational Service Provider</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="associate_type" id="t_craft" value="Craft Instructor" /><label className="form-check-label" htmlFor="t_craft">Craft Instructor</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="associate_type" id="t_other" value="Other" /><label className="form-check-label" htmlFor="t_other">Other</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="business_address">Business / Office Address</label>
                                                <input type="text" id="business_address" name="business_address" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="community">Community</label>
                                                <input type="text" id="community" name="community" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="lga">LGA</label>
                                                <input type="text" id="lga" name="lga" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="state">State</label>
                                                <input type="text" id="state" name="state" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="country">Country</label>
                                                <input type="text" id="country" name="country" className="form-control" defaultValue="Nigeria" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone Number</label>
                                                <input type="tel" id="phone" name="phone" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Email Address</label>
                                                <input type="email" id="email" name="email" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2 */}
                                <div className="section-block">
                                    <h4>Section 2: Profile &amp; Background</h4>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="choice-group">
                                                <label className="choice-title">Type of Entity</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="entity_type" id="e_individual" value="Individual" required /><label className="form-check-label" htmlFor="e_individual">Individual</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="entity_type" id="e_business" value="Business" /><label className="form-check-label" htmlFor="e_business">Business</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="entity_type" id="e_org" value="Organization" /><label className="form-check-label" htmlFor="e_org">Organization</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="cac_number">CAC Registration Number (if applicable)</label>
                                                <input type="text" id="cac_number" name="cac_number" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="years_experience">Years of Experience</label>
                                                <input type="number" min="0" id="years_experience" name="years_experience" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="team_members">Number of Team Members (if any)</label>
                                                <input type="number" min="0" id="team_members" name="team_members" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 3 */}
                                <div className="section-block">
                                    <h4>Section 3: Contact Person</h4>
                                    <p className="section-note">Complete if organization or group</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="contact_full_name">Full Name</label>
                                                <input type="text" id="contact_full_name" name="contact_full_name" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="contact_position">Position / Role</label>
                                                <input type="text" id="contact_position" name="contact_position" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="contact_phone">Phone Number</label>
                                                <input type="tel" id="contact_phone" name="contact_phone" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="contact_email">Email Address</label>
                                                <input type="email" id="contact_email" name="contact_email" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 4 */}
                                <div className="section-block">
                                    <h4>Section 4: Service Offerings</h4>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="choice-group">
                                                <label className="choice-title">Areas of Support</label>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" name="area_academic" id="area_academic" value="Academic Teaching" /><label className="form-check-label" htmlFor="area_academic">Academic Teaching</label></div>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" name="area_career" id="area_career" value="Career / Personal Development" /><label className="form-check-label" htmlFor="area_career">Career / Personal Development</label></div>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" name="area_mentorship" id="area_mentorship" value="Mentorship" /><label className="form-check-label" htmlFor="area_mentorship">Mentorship</label></div>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" name="area_books" id="area_books" value="Book Supply" /><label className="form-check-label" htmlFor="area_books">Book Supply</label></div>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" name="area_digital" id="area_digital" value="Digital Skills" /><label className="form-check-label" htmlFor="area_digital">Digital Skills</label></div>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" name="area_vocational" id="area_vocational" value="Vocational Training" /><label className="form-check-label" htmlFor="area_vocational">Vocational Training</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="area_other">Other Area of Support</label>
                                                <input type="text" id="area_other" name="area_other" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="service_description">Brief Description of Services Provided</label>
                                                <textarea id="service_description" name="service_description" className="form-control" rows="3"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Target Age Group</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="age_group" id="age_nursery" value="Nursery" /><label className="form-check-label" htmlFor="age_nursery">Nursery</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="age_group" id="age_primary" value="Primary" /><label className="form-check-label" htmlFor="age_primary">Primary</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="age_group" id="age_secondary" value="Secondary" /><label className="form-check-label" htmlFor="age_secondary">Secondary</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="age_group" id="age_mixed" value="Mixed" /><label className="form-check-label" htmlFor="age_mixed">Mixed</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Mode of Delivery</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="delivery_mode" id="mode_physical" value="Physical" /><label className="form-check-label" htmlFor="mode_physical">Physical</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="delivery_mode" id="mode_virtual" value="Virtual" /><label className="form-check-label" htmlFor="mode_virtual">Virtual</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="delivery_mode" id="mode_both" value="Both" /><label className="form-check-label" htmlFor="mode_both">Both</label></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 5 */}
                                <div className="section-block">
                                    <h4>Section 5: Capacity &amp; Delivery</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="children_per_session">Approximate number of children per session</label>
                                                <input type="number" min="0" id="children_per_session" name="children_per_session" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Frequency of engagement</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="frequency" id="freq_daily" value="Daily" /><label className="form-check-label" htmlFor="freq_daily">Daily</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="frequency" id="freq_weekly" value="Weekly" /><label className="form-check-label" htmlFor="freq_weekly">Weekly</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="frequency" id="freq_monthly" value="Monthly" /><label className="form-check-label" htmlFor="freq_monthly">Monthly</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="frequency" id="freq_other" value="Other" /><label className="form-check-label" htmlFor="freq_other">Other</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="primary_locations">Primary locations of operation</label>
                                                <input type="text" id="primary_locations" name="primary_locations" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="choice-group">
                                                <label className="choice-title">Can work within school environments?</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="work_in_schools" id="wis_yes" value="Yes" /><label className="form-check-label" htmlFor="wis_yes">Yes</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="work_in_schools" id="wis_no" value="No" /><label className="form-check-label" htmlFor="wis_no">No</label></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 6 */}
                                <div className="section-block">
                                    <h4>Section 6: Experience &amp; Track Record</h4>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="choice-group">
                                                <label className="choice-title">Worked with children before?</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="worked_children" id="wc_yes" value="Yes" /><label className="form-check-label" htmlFor="wc_yes">Yes</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="worked_children" id="wc_no" value="No" /><label className="form-check-label" htmlFor="wc_no">No</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="choice-group">
                                                <label className="choice-title">Worked with schools before?</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="worked_schools" id="ws_yes" value="Yes" /><label className="form-check-label" htmlFor="ws_yes">Yes</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="worked_schools" id="ws_no" value="No" /><label className="form-check-label" htmlFor="ws_no">No</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="choice-group">
                                                <label className="choice-title">Worked with NGOs before?</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="worked_ngos" id="wn_yes" value="Yes" /><label className="form-check-label" htmlFor="wn_yes">Yes</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="worked_ngos" id="wn_no" value="No" /><label className="form-check-label" htmlFor="wn_no">No</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="experience_summary">Summary of past experience and projects</label>
                                                <textarea id="experience_summary" name="experience_summary" className="form-control" rows="3"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 7 */}
                                <div className="section-block">
                                    <h4>Section 7: Content / Materials</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Structured training materials available?</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="has_materials" id="hm_yes" value="Yes" /><label className="form-check-label" htmlFor="hm_yes">Yes</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="has_materials" id="hm_no" value="No" /><label className="form-check-label" htmlFor="hm_no">No</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Provides books or educational resources?</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="provides_books" id="pb_yes" value="Yes" /><label className="form-check-label" htmlFor="pb_yes">Yes</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="provides_books" id="pb_no" value="No" /><label className="form-check-label" htmlFor="pb_no">No</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="sample_topics">Sample topics / curriculum offered</label>
                                                <textarea id="sample_topics" name="sample_topics" className="form-control" rows="3"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 8 */}
                                <div className="section-block">
                                    <h4>Section 8: Quality &amp; Child Protection</h4>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="choice-group">
                                                <label className="choice-title">Experience with vulnerable children?</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="vulnerable_exp" id="ve_yes" value="Yes" /><label className="form-check-label" htmlFor="ve_yes">Yes</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="vulnerable_exp" id="ve_no" value="No" /><label className="form-check-label" htmlFor="ve_no">No</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="choice-group">
                                                <label className="choice-title">Can comply with child protection standards?</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="cp_compliance" id="cp_yes" value="Yes" required /><label className="form-check-label" htmlFor="cp_yes">Yes</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="cp_compliance" id="cp_no" value="No" /><label className="form-check-label" htmlFor="cp_no">No</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="choice-group">
                                                <label className="choice-title">Maintains professional conduct and ethics?</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="conduct" id="cd_yes" value="Yes" required /><label className="form-check-label" htmlFor="cd_yes">Yes</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="conduct" id="cd_no" value="No" /><label className="form-check-label" htmlFor="cd_no">No</label></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 9 */}
                                <div className="section-block">
                                    <h4>Section 9: Operations &amp; Logistics</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Can travel to schools or field locations?</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="can_travel" id="ct_yes" value="Yes" /><label className="form-check-label" htmlFor="ct_yes">Yes</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="can_travel" id="ct_no" value="No" /><label className="form-check-label" htmlFor="ct_no">No</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Requires special equipment or resources?</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="requires_equipment" id="re_yes" value="Yes" /><label className="form-check-label" htmlFor="re_yes">Yes</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="requires_equipment" id="re_no" value="No" /><label className="form-check-label" htmlFor="re_no">No</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="equipment_list">If yes, list required tools / equipment</label>
                                                <textarea id="equipment_list" name="equipment_list" className="form-control" rows="2"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 10 */}
                                <div className="section-block">
                                    <h4>Section 10: Financial Details</h4>
                                    <p className="section-note">For paid services or partnerships only</p>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="choice-group">
                                                <label className="choice-title">Charges for services?</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="charges_for_services" id="cfs_yes" value="Yes" /><label className="form-check-label" htmlFor="cfs_yes">Yes</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="charges_for_services" id="cfs_no" value="No" /><label className="form-check-label" htmlFor="cfs_no">No</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="fee_structure">Fee structure / Range (per session or project)</label>
                                                <input type="text" id="fee_structure" name="fee_structure" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="estimated_cost">Estimated cost (if known)</label>
                                                <input type="text" id="estimated_cost" name="estimated_cost" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="bank_name">Bank Name</label>
                                                <input type="text" id="bank_name" name="bank_name" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="account_name">Account Name</label>
                                                <input type="text" id="account_name" name="account_name" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="account_number">Account Number</label>
                                                <input type="text" id="account_number" name="account_number" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <p className="section-note">Payments are made only to verified accounts after validation and approval.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 11 */}
                                <div className="section-block">
                                    <h4>Section 11: Availability &amp; Commitment</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Available to work with Roseline Ada Foundation (VCEDI)?</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="available_vcedi" id="av_yes" value="Yes" required /><label className="form-check-label" htmlFor="av_yes">Yes</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="available_vcedi" id="av_no" value="No" /><label className="form-check-label" htmlFor="av_no">No</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Can commit to scheduled programme activities when invited?</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="can_commit" id="cc_yes" value="Yes" required /><label className="form-check-label" htmlFor="cc_yes">Yes</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="can_commit" id="cc_no" value="No" /><label className="form-check-label" htmlFor="cc_no">No</label></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 12 */}
                                <div className="section-block">
                                    <h4>Section 12: Documents &amp; Media Upload</h4>
                                    <p className="section-note">Please attach soft copies of the following (where applicable)</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="upload_photo_id">Valid Photo ID</label>
                                                <input type="file" id="upload_photo_id" name="upload_photo_id" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="upload_cac">CAC Certificate (if registered organization)</label>
                                                <input type="file" id="upload_cac" name="upload_cac" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="upload_samples">Samples of training materials / curriculum / resource books</label>
                                                <input type="file" id="upload_samples" name="upload_samples" className="form-control" multiple />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="upload_photos">Photographs of past work / events</label>
                                                <input type="file" id="upload_photos" name="upload_photos" className="form-control" multiple />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <p className="file-note">Note: attachments are not sent through this online form. After submitting, please email the documents above to <strong>impact@roselineadafoundation.org</strong> quoting your full name.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 13 */}
                                <div className="section-block">
                                    <h4>Section 13: References</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="ref_name">Reference Name</label>
                                                <input type="text" id="ref_name" name="ref_name" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="ref_organization">Organization / Institution</label>
                                                <input type="text" id="ref_organization" name="ref_organization" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="ref_phone">Contact Number</label>
                                                <input type="tel" id="ref_phone" name="ref_phone" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="ref_email">Email</label>
                                                <input type="email" id="ref_email" name="ref_email" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 14 */}
                                <div className="section-block">
                                    <h4>Section 14: Declaration</h4>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-check mb-10 d-block">
                                                <input className="form-check-input" type="checkbox" name="declare_accurate" id="declare_accurate" value="Yes" required />
                                                <label className="form-check-label" htmlFor="declare_accurate">I confirm that the information provided is accurate and complete.</label>
                                            </div>
                                            <div className="form-check mb-10 d-block">
                                                <input className="form-check-input" type="checkbox" name="declare_consent" id="declare_consent" value="Yes" required />
                                                <label className="form-check-label" htmlFor="declare_consent">I consent to verification and background check by Roseline Ada Foundation.</label>
                                            </div>
                                            <div className="form-check mb-10 d-block">
                                                <input className="form-check-input" type="checkbox" name="declare_values" id="declare_values" value="Yes" required />
                                                <label className="form-check-label" htmlFor="declare_values">I agree to observe the values and guidelines of the VCEDI Programme.</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <input type="hidden" name="to_email" value="impact@roselineadafoundation.org" />

                                <div className="col-md-12">
                                    <div className="form-group pt-10 mb-0 text-center">
                                        <button type="submit" className="btn ml-5" disabled={status === 'sending'}>
                                            {status === 'sending' ? 'Submitting...' : 'Submit Registration'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
