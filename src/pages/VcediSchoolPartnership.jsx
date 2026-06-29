import { useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

/* ─── Styles (outside component, never re-created) ─── */
const s = {
    card: {
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 1px 4px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.04)',
        border: '1.5px solid #eef0f4',
        overflow: 'hidden',
    },
    cardHead: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '18px 28px 16px',
        borderBottom: '1px solid #f0f2f6',
        background: '#fafbfd',
    },
    stepPill: {
        background: '#0f1b35',
        color: '#fff',
        fontSize: 10,
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '1.2px',
        padding: '4px 12px',
        borderRadius: 99,
        whiteSpace: 'nowrap',
        flexShrink: 0,
    },
    cardTitle: { fontSize: 15, fontWeight: 700, color: '#0f1b35' },
    cardSubtitle: { fontSize: 12, fontWeight: 400, color: '#9ca3af', marginLeft: 4 },
    cardBody: { padding: '24px 28px' },
    grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px 28px' },
    formGroup: { display: 'flex', flexDirection: 'column', gap: 6 },
    label: { fontSize: 11, fontWeight: 700, color: '#0f1b35', textTransform: 'uppercase', letterSpacing: '0.5px' },
    req: { color: '#e05c1a' },
    input: {
        width: '100%',
        border: '1.5px solid #dde1e9',
        borderRadius: 8,
        padding: '11px 14px',
        fontSize: 14,
        color: '#1a1a2e',
        background: '#fafbfd',
        outline: 'none',
        transition: 'border-color 0.18s, background 0.18s',
        fontFamily: 'inherit',
    },
    textarea: {
        width: '100%',
        border: '1.5px solid #dde1e9',
        borderRadius: 8,
        padding: '11px 14px',
        fontSize: 14,
        color: '#1a1a2e',
        background: '#fafbfd',
        outline: 'none',
        transition: 'border-color 0.18s, background 0.18s',
        fontFamily: 'inherit',
        resize: 'vertical',
    },
    choiceBlock: { display: 'flex', flexDirection: 'column', gap: 8 },
    choiceLabel: { fontSize: 11, fontWeight: 700, color: '#0f1b35', textTransform: 'uppercase', letterSpacing: '0.5px' },
    chipWrap: { display: 'flex', flexWrap: 'wrap', gap: 8 },
    chip: {
        display: 'inline-flex', alignItems: 'center', gap: 7,
        padding: '8px 14px',
        border: '1.5px solid #dde1e9',
        borderRadius: 99,
        cursor: 'pointer',
        fontSize: 13,
        color: '#6b7280',
        background: '#fafbfd',
        transition: 'all 0.15s',
        userSelect: 'none',
    },
    chipActive: {
        borderColor: '#e05c1a',
        color: '#e05c1a',
        background: '#fff4ef',
        fontWeight: 600,
    },
    chipDot: {
        width: 8, height: 8, borderRadius: '50%',
        border: '2px solid currentColor',
        flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
    },
    chipDotActive: { borderColor: '#e05c1a' },
    chipDotInner: {
        width: 4, height: 4, borderRadius: '50%',
        background: '#e05c1a',
        position: 'absolute',
    },
    noteBox: {
        display: 'flex', gap: 10, alignItems: 'flex-start',
        background: '#fff4ef', border: '1px solid #f5d0bc',
        borderRadius: 8, padding: '12px 16px',
        fontSize: 13, color: '#7a4020', lineHeight: 1.6,
    },
    noteBoxBlue: {
        background: '#f0f4ff', borderColor: '#d0daf5', color: '#3a4a80',
    },
    introCard: {
        background: '#fff4ef', border: '1.5px solid #f5d0bc',
        borderRadius: 12, padding: '22px 24px',
        display: 'flex', gap: 16, alignItems: 'flex-start',
    },
    progressCard: {
        background: '#fff',
        border: '1.5px solid #eef0f4',
        borderRadius: 12,
        padding: '22px 24px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        flex: '0 0 280px',
        minWidth: 240,
    },
    progressCardSticky: {
        background: '#fff',
        border: '1.5px solid #eef0f4',
        borderRadius: 12,
        padding: '18px 22px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
        flex: '0 0 280px',
        minWidth: 240,
        position: 'sticky',
        top: 20,
        alignSelf: 'flex-start',
        maxHeight: 'calc(100vh - 40px)',
        overflowY: 'auto',
    },
    declCheck: {
        display: 'flex', gap: 12, alignItems: 'flex-start',
        padding: '14px 16px',
        border: '1.5px solid #dde1e9',
        borderRadius: 8, cursor: 'pointer',
        transition: 'border-color 0.15s, background 0.15s',
        userSelect: 'none',
    },
    declCheckActive: { borderColor: '#e05c1a', background: '#fff4ef' },
    declBox: {
        width: 20, height: 20, border: '2px solid #dde1e9',
        borderRadius: 4, flexShrink: 0, marginTop: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.15s',
    },
    declBoxActive: { background: '#e05c1a', borderColor: '#e05c1a' },
    declTick: { color: '#fff', fontSize: 12, fontWeight: 700 },
    declText: { fontSize: 14, color: '#1a1a2e', lineHeight: 1.5 },
    progressWrapper: {
        position: 'relative',
    },
    formWrapper: {
        display: 'flex',
        gap: 24,
        alignItems: 'flex-start',
        flexWrap: 'nowrap',
    },
    formContent: {
        flex: '1 1 auto',
        minWidth: 0,
        maxWidth: '100%',
    },
    progressContainer: {
        flex: '0 0 280px',
        minWidth: 240,
        position: 'sticky',
        top: 20,
        alignSelf: 'flex-start',
    },
    mobileProgress: {
        display: 'none',
        marginBottom: 24,
    },
    mainWrapper: {
        maxWidth: 1400,
        margin: '0 auto',
        padding: '0 24px',
    },
}

/* ─── Static sub-components ─── */
const SectionCard = ({ num, title, subtitle, children }) => (
    <div data-section={num} style={s.card}>
        <div style={s.cardHead}>
            <span style={s.stepPill}>Step {String(num).padStart(2, '0')}</span>
            <span style={s.cardTitle}>
                {title}
                {subtitle && <span style={s.cardSubtitle}> {subtitle}</span>}
            </span>
        </div>
        <div style={s.cardBody}>{children}</div>
    </div>
)

const Field = ({ label, req: required, children, full }) => (
    <div style={{ gridColumn: full ? '1 / -1' : undefined }}>
        <div style={s.formGroup}>
            <label style={s.label}>
                {label} {required && <span style={s.req}>*</span>}
            </label>
            {children}
        </div>
    </div>
)

// Progress component that can be reused
const ProgressCard = ({ progress, pct, formRef, totalSections }) => {
    return (
        <div style={s.progressCard}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#0f1b35', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Form Progress
                </span>
                <span style={{ fontSize: 22, fontWeight: 800, color: '#e05c1a' }}>{pct}%</span>
            </div>
            <div style={{ height: 10, background: '#f0f2f6', borderRadius: 99, overflow: 'hidden', marginBottom: 10 }}>
                <div style={{
                    height: '100%', width: `${pct}%`,
                    background: 'linear-gradient(90deg, #e05c1a, #f58c4a)',
                    borderRadius: 99, transition: 'width 0.4s ease'
                }} />
            </div>
            <div style={{ fontSize: 12, color: '#9ca3af', marginBottom: 14 }}>
                {progress.filled} of {progress.total} sections touched
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {Array.from({ length: totalSections }, (_, i) => {
                    const n = i + 1
                    const done = (() => {
                        if (!formRef.current) return false
                        const card = formRef.current.querySelector(`[data-section="${n}"]`)
                        if (!card) return false
                        return Array.from(card.querySelectorAll('input, textarea')).some(inp => {
                            if ((inp.type === 'checkbox' || inp.type === 'radio') && inp.checked) return true
                            if (inp.type !== 'checkbox' && inp.type !== 'radio' && inp.value.trim()) return true
                            return false
                        })
                    })()
                    return (
                        <div key={n} title={`Section ${n}`} style={{
                            width: 28, height: 28, borderRadius: '50%',
                            background: done ? '#e05c1a' : '#f0f2f6',
                            color: done ? '#fff' : '#9ca3af',
                            fontSize: 10, fontWeight: 700,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transition: 'all 0.2s',
                        }}>{n}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default function VcediSchoolPartnership() {
    const formRef = useRef(null)
    const [status, setStatus] = useState('idle')
    const [progress, setProgress] = useState({ filled: 0, total: 8 })
    const [chips, setChips] = useState({})
    const [checks, setChecks] = useState({})
    const [decls, setDecls] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!window.emailjs) return
        setStatus('sending')
        window.emailjs.sendForm('service_ptzp7rd', 'template_uvkbxrd', formRef.current).then(
            () => {
                setStatus('success')
                formRef.current.reset()
                setChips({})
                setChecks({})
                setDecls({})
                if (window.Swal) {
                    window.Swal.fire({
                        icon: 'success',
                        title: 'Application Submitted!',
                        text: 'Thank you for applying for the VCEDI School Partnership. We will review your application and reach out after verification.',
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

    const updateProgress = useCallback(() => {
        if (!formRef.current) return
        const cards = formRef.current.querySelectorAll('[data-section]')
        let filled = 0
        cards.forEach(card => {
            const inputs = card.querySelectorAll('input, textarea')
            let touched = false
            inputs.forEach(inp => {
                if ((inp.type === 'checkbox' || inp.type === 'radio') && inp.checked) touched = true
                else if (inp.type !== 'checkbox' && inp.type !== 'radio' && inp.value.trim()) touched = true
            })
            if (touched) filled++
        })
        setProgress({ filled, total: cards.length || 8 })
    }, [])

    const selectChip = (name, value, multi = false) => {
        setChips(prev => {
            if (multi) {
                const current = prev[name] || []
                const exists = current.includes(value)
                return { ...prev, [name]: exists ? current.filter(v => v !== value) : [...current, value] }
            }
            return { ...prev, [name]: value }
        })
        setTimeout(updateProgress, 50)
    }

    const toggleCheck = (name, value) => {
        setChecks(prev => {
            const current = prev[name] || []
            const exists = current.includes(value)
            return { ...prev, [name]: exists ? current.filter(v => v !== value) : [...current, value] }
        })
        setTimeout(updateProgress, 50)
    }

    const toggleDecl = (name) => {
        setDecls(prev => ({ ...prev, [name]: !prev[name] }))
        setTimeout(updateProgress, 50)
    }

    const pct = Math.round((progress.filled / progress.total) * 100)

    const RadioChips = ({ name, options, required }) => (
        <div style={s.chipWrap}>
            {options.map(opt => {
                const checked = chips[name] === opt
                return (
                    <label key={opt} style={{ ...s.chip, ...(checked ? s.chipActive : {}) }}
                        onClick={() => selectChip(name, opt)}>
                        <input type="radio" name={name} value={opt} required={required}
                            checked={checked} onChange={() => {}} style={{ display: 'none' }} />
                        <span style={{ ...s.chipDot, ...(checked ? s.chipDotActive : {}) }}>
                            {checked && <span style={s.chipDotInner} />}
                        </span>
                        {opt}
                    </label>
                )
            })}
        </div>
    )

    const CheckChips = ({ name, options }) => (
        <div style={s.chipWrap}>
            {options.map(opt => {
                const checked = (chips[name] || []).includes(opt)
                return (
                    <label key={opt} style={{ ...s.chip, ...(checked ? s.chipActive : {}) }}
                        onClick={() => selectChip(name, opt, true)}>
                        <input type="checkbox" name={`${name}_${opt.replace(/\s|\//g, '_').toLowerCase()}`}
                            value={opt} checked={checked} onChange={() => {}} style={{ display: 'none' }} />
                        <span style={{ ...s.chipDot, ...(checked ? s.chipDotActive : {}) }}>
                            {checked && <span style={s.chipDotInner} />}
                        </span>
                        {opt}
                    </label>
                )
            })}
        </div>
    )

    const ChoiceGroup = ({ label, required, children, full }) => (
        <div style={{ gridColumn: full ? '1 / -1' : undefined }}>
            <div style={s.choiceBlock}>
                <span style={s.choiceLabel}>{label} {required && <span style={s.req}>*</span>}</span>
                {children}
            </div>
        </div>
    )

    const YesNo = ({ name, required }) => <RadioChips name={name} options={['Yes', 'No']} required={required} />

    const DeclCheck = ({ name, children }) => (
        <label style={{ ...s.declCheck, ...(decls[name] ? s.declCheckActive : {}) }}
            onClick={() => toggleDecl(name)}>
            <input type="checkbox" name={name} value="Yes" required
                checked={!!decls[name]} onChange={() => {}} style={{ display: 'none' }} />
            <span style={{ ...s.declBox, ...(decls[name] ? s.declBoxActive : {}) }}>
                {decls[name] && <span style={s.declTick}>✓</span>}
            </span>
            <span style={s.declText}>{children}</span>
        </label>
    )

    return (
        <>
            <style>{`
                .vcedi-form input[type="text"]:focus,
                .vcedi-form input[type="email"]:focus,
                .vcedi-form input[type="tel"]:focus,
                .vcedi-form input[type="number"]:focus,
                .vcedi-form input[type="file"]:focus,
                .vcedi-form textarea:focus {
                    border-color: #e05c1a !important;
                    background: #fff !important;
                    outline: none;
                }
                .vcedi-form input::placeholder,
                .vcedi-form textarea::placeholder { color: #bbb; font-size: 13px; }
                
                @media (max-width: 1200px) {
                    .vcedi-grid { grid-template-columns: 1fr !important; }
                    .vcedi-form-wrapper { flex-direction: column !important; flex-wrap: wrap !important; }
                    .vcedi-progress-sticky { 
                        position: relative !important;
                        top: 0 !important;
                        flex: 1 1 100% !important;
                        min-width: unset !important;
                        margin-bottom: 24px;
                        width: 100% !important;
                    }
                    .vcedi-progress-mobile { display: block !important; }
                    .vcedi-main-wrapper { padding: 0 16px !important; }
                }
                
                @media (min-width: 1201px) {
                    .vcedi-form-wrapper { flex-wrap: nowrap !important; }
                }
            `}</style>

            {/* ORIGINAL HERO BANNER */}
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

            {/* MAIN CONTENT - Full Width */}
            <div style={{ background: '#f5f6f8', padding: '48px 0 80px' }}>
                <div className="vcedi-main-wrapper" style={s.mainWrapper}>

                    {/* INTRO CARD - Full width */}
                    <div style={{ marginBottom: 32 }}>
                        <div style={{ ...s.introCard, flex: '1 1 480px' }}>
                            <div style={{ fontSize: 24, flexShrink: 0 }}>🏫</div>
                            <div>
                                <h4 style={{ fontSize: 15, fontWeight: 700, color: '#0f1b35', marginBottom: 6 }}>
                                    School Partnership Application Form — VCEDI Programme
                                </h4>
                                <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.75, margin: 0 }}>
                                    Roseline Ada Foundation partners with community and low-cost private schools to support
                                    vulnerable children. Complete this form accurately for consideration under the <strong>VCEDI</strong> programme.
                                    All information will be reviewed and verified before onboarding.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* FORM WITH STICKY PROGRESS - Wider layout */}
                    <div className="vcedi-form-wrapper" style={s.formWrapper}>
                        
                        {/* Form Content - Expands to fill space */}
                        <div className="vcedi-form-content" style={s.formContent}>
                            <form ref={formRef} onSubmit={handleSubmit} className="vcedi-form"
                                style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                                {/* SECTION 1 - School Information */}
                                <SectionCard num={1} title="School Information">
                                    <div className="vcedi-grid" style={s.grid}>
                                        <Field label="Name of School" req full>
                                            <input type="text" name="school_name" required
                                                placeholder="e.g. Bright Minds Academy" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <ChoiceGroup label="School Type" required full>
                                            <RadioChips name="school_type" required options={['Community', 'Low-Cost Private', 'Public']} />
                                        </ChoiceGroup>
                                        <Field label="Year Established" req>
                                            <input type="text" name="year_established" required
                                                placeholder="e.g. 2015" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="School Address" req>
                                            <input type="text" name="school_address" required
                                                placeholder="Street address" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Community">
                                            <input type="text" name="community"
                                                placeholder="Community name" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="LGA" req>
                                            <input type="text" name="lga" required
                                                placeholder="Local Govt. Area" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="State" req>
                                            <input type="text" name="state" required
                                                placeholder="e.g. Anambra" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="School Phone Number" req>
                                            <input type="tel" name="school_phone" required
                                                placeholder="+234 800 000 0000" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="School Email Address">
                                            <input type="email" name="school_email"
                                                placeholder="school@example.com" style={s.input} onChange={updateProgress} />
                                        </Field>
                                    </div>
                                </SectionCard>

                                {/* SECTION 2 - School Management Details */}
                                <SectionCard num={2} title="School Management Details">
                                    <div className="vcedi-grid" style={s.grid}>
                                        <Field label="Proprietor / Administrator Name" req full>
                                            <input type="text" name="proprietor_name" required
                                                placeholder="Full name" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Position / Title" req>
                                            <input type="text" name="position_title" required
                                                placeholder="e.g. Principal" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Phone Number" req>
                                            <input type="tel" name="management_phone" required
                                                placeholder="+234 800 000 0000" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Email Address">
                                            <input type="email" name="management_email"
                                                placeholder="admin@example.com" style={s.input} onChange={updateProgress} />
                                        </Field>
                                    </div>
                                </SectionCard>

                                {/* SECTION 3 - Academic Structure */}
                                <SectionCard num={3} title="Academic Structure">
                                    <div className="vcedi-grid" style={s.grid}>
                                        <ChoiceGroup label="Levels Available" required full>
                                            <CheckChips name="levels" options={['Nursery', 'Primary', 'Secondary']} />
                                        </ChoiceGroup>
                                        <Field label="Number of Students" req>
                                            <input type="number" name="number_of_students" min="0" required
                                                placeholder="e.g. 150" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Number of Teachers" req>
                                            <input type="number" name="number_of_teachers" min="0" required
                                                placeholder="e.g. 12" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Average Class Size">
                                            <input type="text" name="average_class_size"
                                                placeholder="e.g. 25" style={s.input} onChange={updateProgress} />
                                        </Field>
                                    </div>
                                </SectionCard>

                                {/* SECTION 4 - Financial Details */}
                                <SectionCard num={4} title="Financial Details">
                                    <div className="vcedi-grid" style={s.grid}>
                                        <ChoiceGroup label="Does the school charge tuition?" required full>
                                            <RadioChips name="charges_tuition" required options={['Yes', 'No']} />
                                        </ChoiceGroup>
                                        <Field label="Tuition Fee Per Term (₦)">
                                            <input type="text" name="tuition_fee_per_term"
                                                placeholder="e.g. 15,000" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Other Charges (₦)">
                                            <input type="text" name="other_charges"
                                                placeholder="e.g. 5,000" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Total Cost Per Term (₦)">
                                            <input type="text" name="total_cost_per_term"
                                                placeholder="e.g. 20,000" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="School Bank Name" req>
                                            <input type="text" name="school_bank_name" required
                                                placeholder="e.g. First Bank" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="School Account Name" req>
                                            <input type="text" name="school_account_name" required
                                                placeholder="Account name as registered" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="School Account Number" req>
                                            <input type="text" name="school_account_number" required
                                                placeholder="10-digit number" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <ChoiceGroup label="Is the account in the official school name?" required full>
                                            <RadioChips name="account_in_school_name" required options={['Yes', 'No']} />
                                        </ChoiceGroup>
                                        <div style={{ gridColumn: '1 / -1' }}>
                                            <div style={s.noteBox}>
                                                <span>⚠️</span>
                                                <span>Payments will only be made to verified school accounts. No payments to personal accounts.</span>
                                            </div>
                                        </div>
                                    </div>
                                </SectionCard>

                                {/* SECTION 5 - School Facilities */}
                                <SectionCard num={5} title="School Facilities">
                                    <div className="vcedi-grid" style={s.grid}>
                                        <ChoiceGroup label="Does the school have adequate classrooms?" required>
                                            <RadioChips name="adequate_classrooms" required options={['Yes', 'No']} />
                                        </ChoiceGroup>
                                        <ChoiceGroup label="Does the school have learning materials?" required>
                                            <RadioChips name="learning_materials" required options={['Yes', 'No']} />
                                        </ChoiceGroup>
                                        <ChoiceGroup label="Does the school provide student welfare support?" required>
                                            <RadioChips name="student_welfare_support" required options={['Yes', 'No']} />
                                        </ChoiceGroup>
                                        <Field label="Brief Description of Facilities" full>
                                            <textarea name="facilities_description" rows="3"
                                                placeholder="Describe the school's facilities, classrooms, equipment, etc."
                                                style={s.textarea} onChange={updateProgress} />
                                        </Field>
                                    </div>
                                </SectionCard>

                                {/* SECTION 6 - Student Support Capacity */}
                                <SectionCard num={6} title="Student Support Capacity">
                                    <div className="vcedi-grid" style={s.grid}>
                                        <Field label="Number of Vulnerable Students Currently Enrolled" req>
                                            <input type="number" name="vulnerable_students_enrolled" min="0" required
                                                placeholder="e.g. 30" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Number of Students Needing Support" req>
                                            <input type="number" name="students_needing_support" min="0" required
                                                placeholder="e.g. 20" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <ChoiceGroup label="Types of Support Required" required full>
                                            <CheckChips name="support_types" options={['Tuition', 'Feeding', 'Books', 'Uniform', 'Mentorship']} />
                                        </ChoiceGroup>
                                    </div>
                                </SectionCard>

                                {/* SECTION 7 - Document Upload */}
                                <SectionCard num={7} title="Document Upload">
                                    <div className="vcedi-grid" style={s.grid}>
                                        <Field label="School Registration Certificate" req>
                                            <input type="file" name="upload_school_cert" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Proof of School Bank Account" req>
                                            <input type="file" name="upload_bank_proof" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="School ID / Official Letterhead" req>
                                            <input type="file" name="upload_school_id" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <div style={{ gridColumn: '1 / -1' }}>
                                            <div style={{ ...s.noteBox, ...s.noteBoxBlue }}>
                                                <span>📎</span>
                                                <span>Attachments are not sent through this online form. After submitting, email documents to <strong>impact@roselineadafoundation.org</strong> quoting the school name.</span>
                                            </div>
                                        </div>
                                    </div>
                                </SectionCard>

                                {/* SECTION 8 - Declaration */}
                                <SectionCard num={8} title="Declaration">
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                        <DeclCheck name="declare_accurate">
                                            I confirm the information provided is true and accurate.
                                        </DeclCheck>
                                        <DeclCheck name="declare_verification">
                                            I agree to verification by Roseline Ada Foundation.
                                        </DeclCheck>
                                        <DeclCheck name="declare_guidelines">
                                            I agree to comply with VCEDI partnership guidelines.
                                        </DeclCheck>
                                    </div>
                                    <div className="vcedi-grid" style={{ ...s.grid, marginTop: 18 }}>
                                        <Field label="Full Name of Signatory" req full>
                                            <input type="text" name="signatory_full_name" required
                                                placeholder="Full name" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Date of Submission">
                                            <input type="date" name="submission_date" style={s.input} onChange={updateProgress} />
                                        </Field>
                                    </div>
                                </SectionCard>

                                <input type="hidden" name="to_email" value="impact@roselineadafoundation.org" />

                                {/* SUBMIT - Full width */}
                                <button type="submit" disabled={status === 'sending'} style={{
                                    width: '100%',
                                    background: status === 'success' ? '#1a7a4a' : '#e05c1a',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: 10,
                                    padding: '18px 24px',
                                    fontSize: 17,
                                    fontWeight: 700,
                                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                                    letterSpacing: 0.3,
                                    transition: 'background 0.2s',
                                    fontFamily: 'inherit',
                                }}>
                                    {status === 'sending' ? 'Submitting…' : status === 'success' ? '✓ Submitted — Thank you!' : 'Submit Application →'}
                                </button>

                            </form>
                        </div>

                        {/* Sticky Progress Card */}
                        <div className="vcedi-progress-sticky" style={s.progressContainer}>
                            <ProgressCard 
                                progress={progress} 
                                pct={pct} 
                                formRef={formRef} 
                                totalSections={8} 
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}