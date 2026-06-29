import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function VcediChildrenSupport() {
    const formRef = useRef(null)
    const [status, setStatus] = useState('idle')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!window.emailjs) return
        setStatus('sending')
        window.emailjs.sendForm('service_ptzp7rd', 'template_uvkbxrd', formRef.current).then(
            () => {
                setStatus('success')
                formRef.current.reset()
                if (window.Swal) {
                    window.Swal.fire({
                        icon: 'success',
                        title: 'Application Submitted!',
                        text: 'Thank you. Your application has been received. All information will be treated with strict confidentiality.',
                        confirmButtonColor: '#e05c1a',
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
                                <h2 className="page-title">Children Support Application</h2>
                                <ul className="page-list">
                                    <li><Link to="/">Home</Link></li>
                                    <li>Children Support Application</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="donation-area py-120">
                <div className="container">
                    <div className="row justify-content-center mb-40">
                        <div className="col-lg-9 text-center">
                            <div style={{ background: '#fff8f4', border: '1.5px solid #f3d5c0', borderRadius: 12, padding: '20px 28px' }}>
                                <h4 style={{ color: '#1a1a2e', marginBottom: 8 }}>Children Support Application Form — VCEDI Programme</h4>
                                <p style={{ color: '#666', fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                                    This form is for <strong>schools AND family members or guardians</strong> applying on behalf of vulnerable students
                                    who need support under the <strong>Vulnerable Children Education and Development Initiative (VCEDI)</strong>.
                                    Please complete one form per student. All information provided will be treated with strict confidentiality
                                    and used solely for programme purposes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <form ref={formRef} onSubmit={handleSubmit}>

                                {/* Section 1 */}
                                <div className="section-block">
                                    <div style={sectionHead}>
                                        <span style={sectionTag}>Section 1 of 9</span>
                                        <h4 style={sectionTitle}>Applicant Information</h4>
                                        <p style={sectionDesc}>Tell us who is completing this form.</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="choice-group">
                                                <label className="choice-title">Who is submitting this application? <span style={req}>*</span></label>
                                                {['School / Teacher','Parent','Guardian / Foster Carer','Grandparent','Relative (Uncle, Aunt, Sibling, etc.)','Community / Religious Leader','NGO / Social Worker','Other'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="submitter_type" id={`sub_${t.replace(/\s|\/|\(|\)|,/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`sub_${t.replace(/\s|\/|\(|\)|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="applicant_full_name">Full Name of Applicant <span style={req}>*</span></label>
                                                <input type="text" id="applicant_full_name" name="applicant_full_name" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Relationship to Student <span style={req}>*</span></label>
                                                {['Parent','Grandparent','Uncle / Aunt','Older Sibling','Guardian / Foster Carer','Teacher / School Staff','Community Leader','Social Worker','Other'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="applicant_relationship" id={`arel_${t.replace(/\s|\/|,/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`arel_${t.replace(/\s|\/|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="applicant_phone">Phone Number <span style={req}>*</span></label>
                                                <input type="tel" id="applicant_phone" name="applicant_phone" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="applicant_email">Email Address (if available)</label>
                                                <input type="email" id="applicant_email" name="applicant_email" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="applicant_address">Home Address / Community <span style={req}>*</span></label>
                                                <textarea id="applicant_address" name="applicant_address" className="form-control" rows="2" required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="applicant_lga">LGA <span style={req}>*</span></label>
                                                <input type="text" id="applicant_lga" name="applicant_lga" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="applicant_state">State <span style={req}>*</span></label>
                                                <input type="text" id="applicant_state" name="applicant_state" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2 */}
                                <div className="section-block">
                                    <div style={sectionHead}>
                                        <span style={sectionTag}>Section 2 of 9</span>
                                        <h4 style={sectionTitle}>School Information</h4>
                                        <p style={sectionDesc}>Provide details of the school the student currently attends.</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="school_name">Name of School <span style={req}>*</span></label>
                                                <input type="text" id="school_name" name="school_name" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">School Type <span style={req}>*</span></label>
                                                {['Community','Low-Cost Private','Public'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="school_type" id={`stype_${t.replace(/\s/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`stype_${t.replace(/\s/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="school_address">School Address <span style={req}>*</span></label>
                                                <textarea id="school_address" name="school_address" className="form-control" rows="2" required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="school_community">Community</label>
                                                <input type="text" id="school_community" name="school_community" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="school_lga">LGA <span style={req}>*</span></label>
                                                <input type="text" id="school_lga" name="school_lga" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="school_state">State <span style={req}>*</span></label>
                                                <input type="text" id="school_state" name="school_state" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="choice-group">
                                                <label className="choice-title">Is the school currently a VCEDI partner school? <span style={req}>*</span></label>
                                                {['Yes','No','Not sure'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="vcedi_partner" id={`vp_${t.replace(/\s/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`vp_${t.replace(/\s/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="school_phone">School Phone Number (if known)</label>
                                                <input type="tel" id="school_phone" name="school_phone" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="class_teacher">Name of Class Teacher or School Contact (if known)</label>
                                                <input type="text" id="class_teacher" name="class_teacher" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 3 */}
                                <div className="section-block">
                                    <div style={sectionHead}>
                                        <span style={sectionTag}>Section 3 of 9</span>
                                        <h4 style={sectionTitle}>Student Personal Details</h4>
                                        <p style={sectionDesc}>Provide accurate personal details of the student being nominated for support.</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="student_full_name">Student Full Name <span style={req}>*</span></label>
                                                <input type="text" id="student_full_name" name="student_full_name" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label htmlFor="student_dob">Date of Birth <span style={req}>*</span></label>
                                                <input type="date" id="student_dob" name="student_dob" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label htmlFor="student_age">Age <span style={req}>*</span></label>
                                                <input type="number" min="0" max="25" id="student_age" name="student_age" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="choice-group">
                                                <label className="choice-title">Gender <span style={req}>*</span></label>
                                                {['Male','Female'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="student_gender" id={`gen_${t}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`gen_${t}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="choice-group">
                                                <label className="choice-title">Nationality <span style={req}>*</span></label>
                                                {['Nigerian','Non-Nigerian Resident','Refugee / Displaced Person'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="student_nationality" id={`nat_${t.replace(/\s|\/|,/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`nat_${t.replace(/\s|\/|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="state_of_origin">State of Origin <span style={req}>*</span></label>
                                                <input type="text" id="state_of_origin" name="state_of_origin" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="lga_of_origin">LGA of Origin <span style={req}>*</span></label>
                                                <input type="text" id="lga_of_origin" name="lga_of_origin" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="student_address">Home Address / Community <span style={req}>*</span></label>
                                                <textarea id="student_address" name="student_address" className="form-control" rows="2" required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="choice-group">
                                                <label className="choice-title">Does the student have any form of identification? <span style={req}>*</span></label>
                                                {['Yes — Birth Certificate','Yes — School ID','Yes — National ID (NIN)','Yes — Other','No identification available'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="student_id_type" id={`sid_${t.replace(/\s|\/|\(|\)|—/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`sid_${t.replace(/\s|\/|\(|\)|—/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Does the student have any known disability or special need? <span style={req}>*</span></label>
                                                {['Yes','No'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="has_disability" id={`dis_${t}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`dis_${t}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="disability_description">If yes, please describe the disability or special need</label>
                                                <textarea id="disability_description" name="disability_description" className="form-control" rows="2"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 4 */}
                                <div className="section-block">
                                    <div style={sectionHead}>
                                        <span style={sectionTag}>Section 4 of 9</span>
                                        <h4 style={sectionTitle}>Academic Details</h4>
                                        <p style={sectionDesc}>Provide details about the student's current academic standing and performance.</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="current_class">Current Class / Grade <span style={req}>*</span></label>
                                                <input type="text" id="current_class" name="current_class" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">School Level <span style={req}>*</span></label>
                                                {['Nursery','Primary','Junior Secondary','Senior Secondary'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="school_level" id={`sl_${t.replace(/\s/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`sl_${t.replace(/\s/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">How long has the student been enrolled? <span style={req}>*</span></label>
                                                {['Less than 1 year','1 – 2 years','3 – 4 years','5 years or more'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="enrollment_duration" id={`ed_${t.replace(/\s|–/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`ed_${t.replace(/\s|–/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Has the student ever repeated a class? <span style={req}>*</span></label>
                                                {['Yes','No'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="repeated_class" id={`rc_${t}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`rc_${t}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="form-group" style={{ marginTop: 8 }}>
                                                <label htmlFor="repeated_class_detail">If yes, which class and why?</label>
                                                <textarea id="repeated_class_detail" name="repeated_class_detail" className="form-control" rows="2"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Academic performance <span style={req}>*</span></label>
                                                {['Excellent','Good','Average','Below Average','Struggling significantly'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="academic_performance" id={`ap_${t.replace(/\s/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`ap_${t.replace(/\s/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Student's attendance <span style={req}>*</span></label>
                                                {['Regular — rarely misses school','Fairly regular — misses occasionally','Irregular — misses frequently','Very poor — at risk of being withdrawn'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="attendance" id={`att_${t.replace(/\s|—|,/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`att_${t.replace(/\s|—|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="choice-group">
                                                <label className="choice-title">Main reasons for poor attendance (Select all that apply)</label>
                                                {['Unable to pay school fees','No food / comes to school hungry','Has to work to support family','Distance from school','Health issues','Domestic responsibilities','Not applicable'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="checkbox" name={`attendance_reason_${t.replace(/\s|\/|,/g,'_').toLowerCase()}`} id={`ar_${t.replace(/\s|\/|,/g,'_')}`} value={t} />
                                                        <label className="form-check-label" htmlFor={`ar_${t.replace(/\s|\/|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Is the student currently at risk of dropping out? <span style={req}>*</span></label>
                                                {['Yes — immediate risk','Yes — likely within this term','Possibly — if situation does not improve','No — currently stable'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="dropout_risk" id={`dr_${t.replace(/\s|—|,/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`dr_${t.replace(/\s|—|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Primary reason for dropout risk (Select all that apply)</label>
                                                {['Cannot afford school fees','Cannot afford books or uniform','Hunger and malnutrition','Family instability','Child labour','Teenage pregnancy','Health challenges','Lack of parental support','Not applicable'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="checkbox" name={`dropout_reason_${t.replace(/\s|\/|,/g,'_').toLowerCase()}`} id={`dor_${t.replace(/\s|\/|,/g,'_')}`} value={t} />
                                                        <label className="form-check-label" htmlFor={`dor_${t.replace(/\s|\/|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 5 */}
                                <div className="section-block">
                                    <div style={sectionHead}>
                                        <span style={sectionTag}>Section 5 of 9</span>
                                        <h4 style={sectionTitle}>Family & Guardian Details</h4>
                                        <p style={sectionDesc}>Provide details about the student's home situation and those responsible for their care.</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="guardian_name">Name of Parent / Guardian <span style={req}>*</span></label>
                                                <input type="text" id="guardian_name" name="guardian_name" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Relationship to Student <span style={req}>*</span></label>
                                                {['Mother','Father','Both Parents','Grandparent','Uncle / Aunt','Older Sibling','Guardian / Foster Carer','Community / Church / Mosque Carer','None — child has no guardian'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="guardian_relationship" id={`gr_${t.replace(/\s|\/|,|—/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`gr_${t.replace(/\s|\/|,|—/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Parental Status <span style={req}>*</span></label>
                                                {['Both parents alive and present','Both parents alive but separated','Only mother alive','Only father alive','Both parents deceased','Parents alive but child is abandoned','Unknown'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="parental_status" id={`ps_${t.replace(/\s|\/|,/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`ps_${t.replace(/\s|\/|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Is the guardian aware and consenting? <span style={req}>*</span></label>
                                                {['Yes — fully aware and consenting','Yes — verbally consented','Guardian is unavailable but applying in student\'s best interest','No guardian available to consent'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="guardian_consent" id={`gc_${t.replace(/\s|\/|'|,|—/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`gc_${t.replace(/\s|\/|'|,|—/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="guardian_phone">Guardian Phone Number (if available)</label>
                                                <input type="tel" id="guardian_phone" name="guardian_phone" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Guardian Occupation <span style={req}>*</span></label>
                                                {['Unemployed','Subsistence farmer','Petty trader / street vendor','Artisan / skilled labourer','Civil servant','Private sector employee','Self-employed / business owner','Retired','Deceased','Other'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="guardian_occupation" id={`go_${t.replace(/\s|\/|,/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`go_${t.replace(/\s|\/|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Estimated Monthly Household Income <span style={req}>*</span></label>
                                                {['No income','Below ₦30,000','₦30,000 – ₦70,000 (below minimum wage)','₦70,000 (at minimum wage)','₦70,000 – ₦150,000','Above ₦150,000'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="household_income" id={`hi_${t.replace(/\s|₦|,|–|\(|\)/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`hi_${t.replace(/\s|₦|,|–|\(|\)/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="num_dependants">Number of Children / Dependants in the Household <span style={req}>*</span></label>
                                                <input type="number" min="0" id="num_dependants" name="num_dependants" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Is the student the first, middle, or last born? <span style={req}>*</span></label>
                                                {['First born','Middle child','Last born','Only child'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="birth_order" id={`bo_${t.replace(/\s/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`bo_${t.replace(/\s/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Does any other child in the household also need support? <span style={req}>*</span></label>
                                                {['Yes','No'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="other_children_need_support" id={`ocns_${t}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`ocns_${t}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="form-group" style={{ marginTop: 8 }}>
                                                <label htmlFor="other_children_count">If yes, how many other children need support?</label>
                                                <input type="number" min="0" id="other_children_count" name="other_children_count" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Housing situation <span style={req}>*</span></label>
                                                {['Owns home','Renting','Living with relatives','Squatting / informal settlement','Displaced / temporary shelter','Homeless'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="housing_situation" id={`hs_${t.replace(/\s|\/|,/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`hs_${t.replace(/\s|\/|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Does the family have access to regular meals? <span style={req}>*</span></label>
                                                {['Yes — at least 3 meals a day','Sometimes — 1 to 2 meals a day','Rarely — food is a serious challenge','No — student often goes without food'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="meal_access" id={`ma_${t.replace(/\s|—|,/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`ma_${t.replace(/\s|—|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Does the family have access to healthcare? <span style={req}>*</span></label>
                                                {['Yes — regularly','Sometimes — when affordable','Rarely — very limited access','No access at all'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="healthcare_access" id={`hca_${t.replace(/\s|—|,/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`hca_${t.replace(/\s|—|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 6 */}
                                <div className="section-block">
                                    <div style={sectionHead}>
                                        <span style={sectionTag}>Section 6 of 9</span>
                                        <h4 style={sectionTitle}>Vulnerability Assessment</h4>
                                        <p style={sectionDesc}>Please be as honest and detailed as possible.</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="choice-group">
                                                <label className="choice-title">What is the student's primary vulnerability? (Select all that apply) <span style={req}>*</span></label>
                                                {['Extreme poverty','Orphaned — one parent deceased','Orphaned — both parents deceased','Child of a single parent','Abandoned by one or both parents','Displaced or refugee background','Living with a physical disability','Living with a learning disability','Victim of abuse or neglect','Child in a child labour situation','Teenage pregnancy','Chronic illness in the family','Caregiver to a sick or disabled parent','Street child or formerly homeless','Other'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="checkbox" name={`vulnerability_${t.replace(/\s|—|,|\/|'/g,'_').toLowerCase()}`} id={`vuln_${t.replace(/\s|—|,|\/|'/g,'_')}`} value={t} />
                                                        <label className="form-check-label" htmlFor={`vuln_${t.replace(/\s|—|,|\/|'/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="situation_description">Please describe the student's situation in detail <span style={req}>*</span></label>
                                                <textarea id="situation_description" name="situation_description" className="form-control" rows="4" required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">How long has the student been in this vulnerable situation? <span style={req}>*</span></label>
                                                {['Less than 6 months','6 months – 1 year','1 – 2 years','3 – 5 years','More than 5 years','Since birth'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="vulnerability_duration" id={`vd_${t.replace(/\s|–|,/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`vd_${t.replace(/\s|–|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Has the student's situation recently gotten worse? <span style={req}>*</span></label>
                                                {['Yes — significantly worse','Yes — slightly worse','No — situation is stable','It has improved slightly'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="situation_worsened" id={`sw_${t.replace(/\s|—|,/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`sw_${t.replace(/\s|—|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Has the student received any external support before? <span style={req}>*</span></label>
                                                {['Yes','No'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="prior_support" id={`prs_${t}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`prs_${t}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="form-group" style={{ marginTop: 8 }}>
                                                <label htmlFor="prior_support_detail">If yes, what type of support and from whom?</label>
                                                <textarea id="prior_support_detail" name="prior_support_detail" className="form-control" rows="2"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Has the student ever been out of school for an extended period? <span style={req}>*</span></label>
                                                {['Yes','No'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="out_of_school" id={`oos_${t}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`oos_${t}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="form-group" style={{ marginTop: 8 }}>
                                                <label htmlFor="out_of_school_detail">If yes, for how long and why?</label>
                                                <textarea id="out_of_school_detail" name="out_of_school_detail" className="form-control" rows="2"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Does the student show signs of emotional or psychological distress? <span style={req}>*</span></label>
                                                {['Yes — visibly distressed or withdrawn','Sometimes — occasional signs','No — appears emotionally stable','Unsure'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="emotional_distress" id={`ed_${t.replace(/\s|—|,/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`ed_${t.replace(/\s|—|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="emotional_concerns">Please describe any observed emotional or behavioural concerns</label>
                                                <textarea id="emotional_concerns" name="emotional_concerns" className="form-control" rows="3"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 7 */}
                                <div className="section-block">
                                    <div style={sectionHead}>
                                        <span style={sectionTag}>Section 7 of 9</span>
                                        <h4 style={sectionTitle}>Support Required</h4>
                                        <p style={sectionDesc}>Indicate the specific types of support this student needs and the urgency.</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="choice-group">
                                                <label className="choice-title">Types of Support Needed (Select all that apply) <span style={req}>*</span></label>
                                                {['Tuition fee payment','Feeding / school meals','Textbooks and stationery','School uniform and shoes','Mentorship and counselling','Medical / health support','Sanitary products','Transport support','Psychosocial support','Other'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="checkbox" name={`support_type_${t.replace(/\s|\/|,/g,'_').toLowerCase()}`} id={`st_${t.replace(/\s|\/|,/g,'_')}`} value={t} />
                                                        <label className="form-check-label" htmlFor={`st_${t.replace(/\s|\/|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="total_support_cost">Total cost of support needed per term (₦) <span style={req}>*</span></label>
                                                <input type="text" id="total_support_cost" name="total_support_cost" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Which of the following does the student currently lack? (Select all that apply) <span style={req}>*</span></label>
                                                {['School uniform','Textbooks','Exercise books and stationery','School bag','School shoes','Daily meals','A stable home environment','Parental guidance and support'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="checkbox" name={`lacks_${t.replace(/\s|\/|,/g,'_').toLowerCase()}`} id={`lacks_${t.replace(/\s|\/|,/g,'_')}`} value={t} />
                                                        <label className="form-check-label" htmlFor={`lacks_${t.replace(/\s|\/|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">How urgently does this student need support? <span style={req}>*</span></label>
                                                {['Critical — will leave school immediately without support','Urgent — at immediate risk this term','High — significant barriers affecting learning','Moderate — support would make a meaningful difference'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="urgency_level" id={`ul_${t.replace(/\s|—|,/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`ul_${t.replace(/\s|—|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">If this student does not receive support, what is the most likely outcome? <span style={req}>*</span></label>
                                                {['Will drop out of school entirely','Will continue but performance will decline significantly','Will miss school frequently','Will be forced into child labour','Other'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="no_support_outcome" id={`nso_${t.replace(/\s|,/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`nso_${t.replace(/\s|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="additional_needs_info">Any additional information about this student's needs</label>
                                                <textarea id="additional_needs_info" name="additional_needs_info" className="form-control" rows="3"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 8 */}
                                <div className="section-block">
                                    <div style={sectionHead}>
                                        <span style={sectionTag}>Section 8 of 9</span>
                                        <h4 style={sectionTitle}>Support Contact & Follow-Up</h4>
                                        <p style={sectionDesc}>This section ensures we can follow up effectively after the application is submitted.</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="choice-group">
                                                <label className="choice-title">Best person to contact regarding this student <span style={req}>*</span></label>
                                                {['Parent / Guardian','School / Teacher','The applicant (person filling this form)','Community leader','Other'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="best_contact" id={`bc_${t.replace(/\s|\/|\(|\)|,/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`bc_${t.replace(/\s|\/|\(|\)|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="contact_name">Contact Name <span style={req}>*</span></label>
                                                <input type="text" id="contact_name" name="contact_name" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="contact_phone">Contact Phone Number <span style={req}>*</span></label>
                                                <input type="tel" id="contact_phone" name="contact_phone" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="contact_relationship">Contact Relationship to Student <span style={req}>*</span></label>
                                                <input type="text" id="contact_relationship" name="contact_relationship" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Best time to reach this contact <span style={req}>*</span></label>
                                                {['Morning (8am – 12pm)','Afternoon (12pm – 4pm)','Evening (4pm – 7pm)','Any time'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="best_contact_time" id={`bct_${t.replace(/\s|–|\(|\)|,/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`bct_${t.replace(/\s|–|\(|\)|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choice-group">
                                                <label className="choice-title">Is a home or school visit possible for verification? <span style={req}>*</span></label>
                                                {['Yes — home visit is welcome','Yes — school visit is welcome','Both are welcome','Prefer phone verification only'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="visit_possible" id={`vp_${t.replace(/\s|—|,/g,'_')}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`vp_${t.replace(/\s|—|,/g,'_')}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="choice-group">
                                                <label className="choice-title">Preferred language for communication for the child <span style={req}>*</span></label>
                                                {['English','Yoruba','Igbo','Hausa','Pidgin English','Other'].map(t => (
                                                    <div className="form-check" key={t}>
                                                        <input className="form-check-input" type="radio" name="preferred_language" id={`lang_${t}`} value={t} required />
                                                        <label className="form-check-label" htmlFor={`lang_${t}`}>{t}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 9 */}
                                <div className="section-block">
                                    <div style={sectionHead}>
                                        <span style={sectionTag}>Section 9 of 9</span>
                                        <h4 style={sectionTitle}>Declaration</h4>
                                        <p style={sectionDesc}>By submitting this form, the applicant confirms and agrees to the following.</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            {[
                                                { name: 'dec_accurate', id: 'dec1', label: 'The information provided about this student is true, accurate, and complete.' },
                                                { name: 'dec_genuine', id: 'dec2', label: 'I confirm this student genuinely needs support and meets the VCEDI criteria.' },
                                                { name: 'dec_consent', id: 'dec3', label: 'I have obtained or sought the consent of the parent / guardian where possible.' },
                                                { name: 'dec_notify', id: 'dec4', label: 'I agree to notify Roseline Ada Foundation of any significant changes in the student\'s situation.' },
                                                { name: 'dec_cooperate', id: 'dec5', label: 'I agree to cooperate with any verification visit or follow-up contact.' },
                                                { name: 'dec_no_false', id: 'dec6', label: 'I understand that providing false information will result in immediate disqualification.' },
                                                { name: 'dec_benefit', id: 'dec7', label: 'I agree that all support provided must be used directly for the benefit of the named student.' },
                                            ].map(({ name, id, label }) => (
                                                <div className="form-check mb-10 d-block" key={id}>
                                                    <input className="form-check-input" type="checkbox" name={name} id={id} value="Yes" required />
                                                    <label className="form-check-label" htmlFor={id}>{label}</label>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-md-4" style={{ marginTop: 16 }}>
                                            <div className="form-group">
                                                <label htmlFor="declarant_full_name">Full Name of Applicant <span style={req}>*</span></label>
                                                <input type="text" id="declarant_full_name" name="declarant_full_name" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-4" style={{ marginTop: 16 }}>
                                            <div className="form-group">
                                                <label htmlFor="declarant_relationship">Relationship to Student <span style={req}>*</span></label>
                                                <input type="text" id="declarant_relationship" name="declarant_relationship" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-4" style={{ marginTop: 16 }}>
                                            <div className="form-group">
                                                <label htmlFor="declarant_phone">Phone Number <span style={req}>*</span></label>
                                                <input type="tel" id="declarant_phone" name="declarant_phone" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6" style={{ marginTop: 8 }}>
                                            <div className="form-group">
                                                <label htmlFor="submission_date">Date of Submission</label>
                                                <input type="date" id="submission_date" name="submission_date" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12" style={{ marginTop: 16 }}>
                                            <p style={confidentialNote}>🔒 All student information is strictly confidential and will only be used for VCEDI programme administration and reporting purposes.</p>
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

const sectionHead = { borderLeft: '4px solid #e05c1a', paddingLeft: 14, marginBottom: 8 }
const sectionTag = { fontSize: 11, fontWeight: 700, color: '#e05c1a', textTransform: 'uppercase', letterSpacing: 1 }
const sectionTitle = { margin: '4px 0 2px', fontSize: 18, fontWeight: 700, color: '#1a1a2e' }
const sectionDesc = { fontSize: 13, color: '#888', margin: '4px 0 16px' }
const req = { color: '#e05c1a' }
const confidentialNote = { fontSize: 13, color: '#2a5934', background: '#edf7ee', border: '1px solid #b2dfbd', borderRadius: 8, padding: '10px 14px' }