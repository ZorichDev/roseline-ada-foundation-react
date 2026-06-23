import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../components/vcedi-forms.css'

export default function VcediSchoolPartnership() {
    const formRef = useRef(null)
    const [status, setStatus] = useState('idle')

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
                        title: 'Application Submitted!',
                        text: 'Thank you for applying for the VCEDI School Partnership. We will review your application and reach out after verification.',
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
                                <h2 className="page-title">VCEDI School Partnership</h2>
                                <ul className="page-list">
                                    <li><Link to="/">Home</Link></li>
                                    <li>School Partnership</li>
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
                            <p>Roseline Ada Foundation partners with community and low-cost private schools to support
                                vulnerable children. Complete this form accurately for consideration under the VCEDI
                                programme.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <form ref={formRef} onSubmit={handleSubmit}>

                                {/* Section 1 */}
                                <div className="section-block">
                                    <h4>Section 1: School Information</h4>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="school_name">Name of School</label>
                                                <input type="text" id="school_name" name="school_name" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="choice-group">
                                                <label className="choice-title">School Type</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="school_type" id="st_community" value="Community" required /><label className="form-check-label" htmlFor="st_community">Community</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="school_type" id="st_private" value="Low-Cost Private" /><label className="form-check-label" htmlFor="st_private">Low-Cost Private</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="school_type" id="st_public" value="Public" /><label className="form-check-label" htmlFor="st_public">Public</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="year_established">Year Established</label>
                                                <input type="text" id="year_established" name="year_established" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="school_address">School Address</label>
                                                <input type="text" id="school_address" name="school_address" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="school_community">Community</label>
                                                <input type="text" id="school_community" name="community" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="school_lga">LGA</label>
                                                <input type="text" id="school_lga" name="lga" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="school_state">State</label>
                                                <input type="text" id="school_state" name="state" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="school_phone">School Phone Number</label>
                                                <input type="tel" id="school_phone" name="school_phone" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="school_email">School Email Address</label>
                                                <input type="email" id="school_email" name="school_email" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2 */}
                                <div className="section-block">
                                    <h4>Section 2: School Management Details</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="proprietor_name">Proprietor / Administrator Name</label>
                                                <input type="text" id="proprietor_name" name="proprietor_name" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="position_title">Position / Title</label>
                                                <input type="text" id="position_title" name="position_title" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="management_phone">Phone Number</label>
                                                <input type="tel" id="management_phone" name="management_phone" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="management_email">Email Address</label>
                                                <input type="email" id="management_email" name="management_email" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 3 */}
                                <div className="section-block">
                                    <h4>Section 3: Academic Structure</h4>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="choice-group">
                                                <label className="choice-title">Levels Available</label>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" name="level_nursery" id="level_nursery" value="Nursery" /><label className="form-check-label" htmlFor="level_nursery">Nursery</label></div>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" name="level_primary" id="level_primary" value="Primary" /><label className="form-check-label" htmlFor="level_primary">Primary</label></div>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" name="level_secondary" id="level_secondary" value="Secondary" /><label className="form-check-label" htmlFor="level_secondary">Secondary</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="number_of_students">Number of Students</label>
                                                <input type="number" min="0" id="number_of_students" name="number_of_students" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="number_of_teachers">Number of Teachers</label>
                                                <input type="number" min="0" id="number_of_teachers" name="number_of_teachers" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="average_class_size">Average Class Size</label>
                                                <input type="text" id="average_class_size" name="average_class_size" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 4 */}
                                <div className="section-block">
                                    <h4>Section 4: Financial Details</h4>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="choice-group">
                                                <label className="choice-title">Does the school charge tuition?</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="charges_tuition" id="ctn_yes" value="Yes" required /><label className="form-check-label" htmlFor="ctn_yes">Yes</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="charges_tuition" id="ctn_no" value="No" /><label className="form-check-label" htmlFor="ctn_no">No</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="tuition_fee_per_term">Tuition Fee Per Term (₦)</label>
                                                <input type="text" id="tuition_fee_per_term" name="tuition_fee_per_term" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="other_charges">Other Charges (₦)</label>
                                                <input type="text" id="other_charges" name="other_charges" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="total_cost_per_term">Total Cost Per Term (₦)</label>
                                                <input type="text" id="total_cost_per_term" name="total_cost_per_term" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="school_bank_name">School Bank Name</label>
                                                <input type="text" id="school_bank_name" name="school_bank_name" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="school_account_name">School Account Name</label>
                                                <input type="text" id="school_account_name" name="school_account_name" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="school_account_number">School Account Number</label>
                                                <input type="text" id="school_account_number" name="school_account_number" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="choice-group">
                                                <label className="choice-title">Is the account in the official school name?</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="account_in_school_name" id="aisn_yes" value="Yes" required /><label className="form-check-label" htmlFor="aisn_yes">Yes</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="account_in_school_name" id="aisn_no" value="No" /><label className="form-check-label" htmlFor="aisn_no">No</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <p className="section-note">⚠️ Payments will only be made to verified school accounts. No payments to personal accounts.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 5 */}
                                <div className="section-block">
                                    <h4>Section 5: School Facilities</h4>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="choice-group">
                                                <label className="choice-title">Does the school have adequate classrooms?</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="adequate_classrooms" id="ac_yes" value="Yes" required /><label className="form-check-label" htmlFor="ac_yes">Yes</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="adequate_classrooms" id="ac_no" value="No" /><label className="form-check-label" htmlFor="ac_no">No</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="choice-group">
                                                <label className="choice-title">Does the school have learning materials?</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="learning_materials" id="lm_yes" value="Yes" required /><label className="form-check-label" htmlFor="lm_yes">Yes</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="learning_materials" id="lm_no" value="No" /><label className="form-check-label" htmlFor="lm_no">No</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="choice-group">
                                                <label className="choice-title">Does the school provide student welfare support?</label>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="student_welfare_support" id="sws_yes" value="Yes" required /><label className="form-check-label" htmlFor="sws_yes">Yes</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="student_welfare_support" id="sws_no" value="No" /><label className="form-check-label" htmlFor="sws_no">No</label></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="facilities_description">Brief Description of Facilities</label>
                                                <textarea id="facilities_description" name="facilities_description" className="form-control" rows="3"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 6 */}
                                <div className="section-block">
                                    <h4>Section 6: Student Support Capacity</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="vulnerable_students_enrolled">Number of Vulnerable Students Currently Enrolled</label>
                                                <input type="number" min="0" id="vulnerable_students_enrolled" name="vulnerable_students_enrolled" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="students_needing_support">Number of Students Needing Support</label>
                                                <input type="number" min="0" id="students_needing_support" name="students_needing_support" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="choice-group">
                                                <label className="choice-title">Types of Support Required</label>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" name="support_tuition" id="support_tuition" value="Tuition" /><label className="form-check-label" htmlFor="support_tuition">Tuition</label></div>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" name="support_feeding" id="support_feeding" value="Feeding" /><label className="form-check-label" htmlFor="support_feeding">Feeding</label></div>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" name="support_books" id="support_books" value="Books" /><label className="form-check-label" htmlFor="support_books">Books</label></div>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" name="support_uniform" id="support_uniform" value="Uniform" /><label className="form-check-label" htmlFor="support_uniform">Uniform</label></div>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" name="support_mentorship" id="support_mentorship" value="Mentorship" /><label className="form-check-label" htmlFor="support_mentorship">Mentorship</label></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 7 */}
                                <div className="section-block">
                                    <h4>Section 7: Document Upload</h4>
                                    <p className="section-note">Accepted formats: PDF, JPG, PNG.</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="upload_school_cert">School Registration Certificate</label>
                                                <input type="file" id="upload_school_cert" name="upload_school_cert" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="upload_bank_proof">Proof of School Bank Account</label>
                                                <input type="file" id="upload_bank_proof" name="upload_bank_proof" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="upload_school_id">School ID / Official Letterhead</label>
                                                <input type="file" id="upload_school_id" name="upload_school_id" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <p className="file-note">Note: attachments are not sent through this online form. After submitting, please email the documents above to <strong>impact@roselineadafoundation.org</strong> quoting the school name.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 8 */}
                                <div className="section-block">
                                    <h4>Section 8: Declaration</h4>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-check mb-10 d-block">
                                                <input className="form-check-input" type="checkbox" name="declare_accurate" id="school_declare_accurate" value="Yes" required />
                                                <label className="form-check-label" htmlFor="school_declare_accurate">I confirm the information provided is true and accurate.</label>
                                            </div>
                                            <div className="form-check mb-10 d-block">
                                                <input className="form-check-input" type="checkbox" name="declare_verification" id="declare_verification" value="Yes" required />
                                                <label className="form-check-label" htmlFor="declare_verification">I agree to verification by Roseline Ada Foundation.</label>
                                            </div>
                                            <div className="form-check mb-10 d-block">
                                                <input className="form-check-input" type="checkbox" name="declare_guidelines" id="declare_guidelines" value="Yes" required />
                                                <label className="form-check-label" htmlFor="declare_guidelines">I agree to comply with VCEDI partnership guidelines.</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="signatory_full_name">Full Name of Signatory</label>
                                                <input type="text" id="signatory_full_name" name="signatory_full_name" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="submission_date">Date of Submission</label>
                                                <input type="date" id="submission_date" name="submission_date" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <input type="hidden" name="to_email" value="impact@roselineadafoundation.org" />

                                <div className="col-md-12">
                                    <div className="form-group pt-10 mb-0 text-center">
                                        <button type="submit" className="btn ml-5" disabled={status === 'sending'}>
                                            {status === 'sending' ? 'Submitting...' : 'Submit Application'}
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
