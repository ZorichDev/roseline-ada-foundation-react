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
    progressContainer: {
        flex: '0 0 280px',
        minWidth: 240,
        position: 'sticky',
        top: 20,
        alignSelf: 'flex-start',
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

// Progress component
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

/* ─── Main Component ─── */
export default function VcediAssociateRegistration() {
    const formRef = useRef(null)
    const [status, setStatus] = useState('idle')
    const [progress, setProgress] = useState({ filled: 0, total: 14 })
    const [chips, setChips] = useState({})
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
                setDecls({})
                if (window.Swal) {
                    window.Swal.fire({
                        icon: 'success',
                        title: 'Registration Submitted!',
                        text: 'Thank you for registering as a VCEDI Associate. We will review your details and reach out after verification.',
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
        setProgress({ filled, total: cards.length || 14 })
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
                        <input type="checkbox" name={`area_${opt.replace(/\s|\//g, '_').toLowerCase()}`}
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

            {/* MAIN CONTENT - Full Width */}
            <div style={{ background: '#f5f6f8', padding: '48px 0 80px' }}>
                <div className="vcedi-main-wrapper" style={s.mainWrapper}>

                    {/* INTRO CARD - Full width */}
                    <div style={{ marginBottom: 32 }}>
                        <div style={{ ...s.introCard, flex: '1 1 480px' }}>
                            <div style={{ fontSize: 24, flexShrink: 0 }}>📋</div>
                            <div>
                                <h4 style={{ fontSize: 15, fontWeight: 700, color: '#0f1b35', marginBottom: 6 }}>
                                    VCEDI Associate Registration &amp; Verification Form
                                </h4>
                                <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.75, margin: 0 }}>
                                    Roseline Ada Foundation engages Associates to support its education, development,
                                    and welfare programmes under <strong>VCEDI</strong>. Associates include individuals
                                    and organizations providing training, teaching, mentorship, book supply, digital education,
                                    craftsmanship, or other educational support services. All information will be reviewed
                                    and verified before onboarding.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* FORM WITH STICKY PROGRESS */}
                    <div className="vcedi-form-wrapper" style={s.formWrapper}>
                        
                        {/* Form Content */}
                        <div className="vcedi-form-content" style={s.formContent}>
                            <form ref={formRef} onSubmit={handleSubmit} className="vcedi-form"
                                style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                                {/* SECTION 1 */}
                                <SectionCard num={1} title="Associate Information">
                                    <div className="vcedi-grid" style={s.grid}>
                                        <Field label="Full Name / Organization Name" req full>
                                            <input type="text" name="full_name" required
                                                placeholder="e.g. Chukwuemeka Obi / Bright Minds Academy"
                                                style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <ChoiceGroup label="Type of Associate" required full>
                                            <RadioChips name="associate_type" required
                                                options={['Trainer','Teacher','Mentor','Book Supplier','Educational Service Provider','Craft Instructor','Other']} />
                                        </ChoiceGroup>
                                        <Field label="Business / Office Address" req full>
                                            <input type="text" name="business_address" required
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
                                        <Field label="Country" req>
                                            <input type="text" name="country" required
                                                defaultValue="Nigeria" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Phone Number" req>
                                            <input type="tel" name="phone" required
                                                placeholder="+234 800 000 0000" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Email Address" req>
                                            <input type="email" name="email" required
                                                placeholder="you@example.com" style={s.input} onChange={updateProgress} />
                                        </Field>
                                    </div>
                                </SectionCard>

                                {/* SECTION 2 */}
                                <SectionCard num={2} title="Profile & Background">
                                    <div className="vcedi-grid" style={s.grid}>
                                        <ChoiceGroup label="Type of Entity" required full>
                                            <RadioChips name="entity_type" required options={['Individual','Business','Organization']} />
                                        </ChoiceGroup>
                                        <Field label="CAC Registration No.">
                                            <input type="text" name="cac_number"
                                                placeholder="RC 000000" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Years of Experience">
                                            <input type="number" name="years_experience" min="0"
                                                placeholder="e.g. 5" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Number of Team Members">
                                            <input type="number" name="team_members" min="0"
                                                placeholder="e.g. 10" style={s.input} onChange={updateProgress} />
                                        </Field>
                                    </div>
                                </SectionCard>

                                {/* SECTION 3 */}
                                <SectionCard num={3} title="Contact Person" subtitle="(if Organization or Group)">
                                    <div className="vcedi-grid" style={s.grid}>
                                        <Field label="Full Name">
                                            <input type="text" name="contact_full_name"
                                                placeholder="Contact person's name" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Position / Role">
                                            <input type="text" name="contact_position"
                                                placeholder="e.g. Programme Coordinator" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Phone Number">
                                            <input type="tel" name="contact_phone"
                                                placeholder="+234 800 000 0000" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Email Address">
                                            <input type="email" name="contact_email"
                                                placeholder="contact@example.com" style={s.input} onChange={updateProgress} />
                                        </Field>
                                    </div>
                                </SectionCard>

                                {/* SECTION 4 */}
                                <SectionCard num={4} title="Service Offerings">
                                    <div className="vcedi-grid" style={s.grid}>
                                        <ChoiceGroup label="Areas of Support" full>
                                            <CheckChips name="areas"
                                                options={['Academic Teaching','Career / Personal Development','Mentorship','Book Supply','Digital Skills','Vocational Training']} />
                                        </ChoiceGroup>
                                        <Field label="Other Area of Support" full>
                                            <input type="text" name="area_other"
                                                placeholder="Describe any additional area" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Brief Description of Services" full>
                                            <textarea name="service_description" rows="3"
                                                placeholder="What services do you provide and how?"
                                                style={s.textarea} onChange={updateProgress} />
                                        </Field>
                                        <ChoiceGroup label="Target Age Group">
                                            <RadioChips name="age_group" options={['Nursery','Primary','Secondary','Mixed']} />
                                        </ChoiceGroup>
                                        <ChoiceGroup label="Mode of Delivery">
                                            <RadioChips name="delivery_mode" options={['Physical','Virtual','Both']} />
                                        </ChoiceGroup>
                                    </div>
                                </SectionCard>

                                {/* SECTION 5 */}
                                <SectionCard num={5} title="Capacity & Delivery">
                                    <div className="vcedi-grid" style={s.grid}>
                                        <Field label="Children per Session (approx.)">
                                            <input type="number" name="children_per_session" min="0"
                                                placeholder="e.g. 25" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <ChoiceGroup label="Frequency of Engagement">
                                            <RadioChips name="frequency" options={['Daily','Weekly','Monthly','Other']} />
                                        </ChoiceGroup>
                                        <Field label="Primary Locations of Operation" full>
                                            <input type="text" name="primary_locations"
                                                placeholder="e.g. Onitsha, Awka, Nnewi" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <ChoiceGroup label="Can work within school environments?" full>
                                            <YesNo name="work_in_schools" />
                                        </ChoiceGroup>
                                    </div>
                                </SectionCard>

                                {/* SECTION 6 */}
                                <SectionCard num={6} title="Experience & Track Record">
                                    <div className="vcedi-grid" style={s.grid}>
                                        {[
                                            { label: 'Worked with children before?', name: 'worked_children' },
                                            { label: 'Worked with schools before?', name: 'worked_schools' },
                                            { label: 'Worked with NGOs before?', name: 'worked_ngos' },
                                        ].map(({ label, name }) => (
                                            <ChoiceGroup key={name} label={label}>
                                                <YesNo name={name} />
                                            </ChoiceGroup>
                                        ))}
                                        <Field label="Summary of Past Experience & Projects" full>
                                            <textarea name="experience_summary" rows="3"
                                                placeholder="Briefly describe relevant past work, partnerships, or programmes..."
                                                style={s.textarea} onChange={updateProgress} />
                                        </Field>
                                    </div>
                                </SectionCard>

                                {/* SECTION 7 */}
                                <SectionCard num={7} title="Content & Materials">
                                    <div className="vcedi-grid" style={s.grid}>
                                        <ChoiceGroup label="Structured training materials available?">
                                            <YesNo name="has_materials" />
                                        </ChoiceGroup>
                                        <ChoiceGroup label="Provides books or educational resources?">
                                            <YesNo name="provides_books" />
                                        </ChoiceGroup>
                                        <Field label="Sample Topics / Curriculum Offered" full>
                                            <textarea name="sample_topics" rows="3"
                                                placeholder="List subjects, topics, or modules you cover..."
                                                style={s.textarea} onChange={updateProgress} />
                                        </Field>
                                    </div>
                                </SectionCard>

                                {/* SECTION 8 */}
                                <SectionCard num={8} title="Quality & Child Protection">
                                    <div className="vcedi-grid" style={s.grid}>
                                        {[
                                            { label: 'Experience with vulnerable children?', name: 'vulnerable_exp', req: false },
                                            { label: 'Can comply with child protection standards?', name: 'cp_compliance', req: true },
                                            { label: 'Maintains professional conduct and ethics?', name: 'conduct', req: true },
                                        ].map(({ label, name, req: r }) => (
                                            <ChoiceGroup key={name} label={label} required={r}>
                                                <RadioChips name={name} options={['Yes','No']} required={r} />
                                            </ChoiceGroup>
                                        ))}
                                    </div>
                                </SectionCard>

                                {/* SECTION 9 */}
                                <SectionCard num={9} title="Operations & Logistics">
                                    <div className="vcedi-grid" style={s.grid}>
                                        <ChoiceGroup label="Can travel to schools or field locations?">
                                            <YesNo name="can_travel" />
                                        </ChoiceGroup>
                                        <ChoiceGroup label="Requires special equipment or resources?">
                                            <YesNo name="requires_equipment" />
                                        </ChoiceGroup>
                                        <Field label="If yes, list required tools / equipment" full>
                                            <textarea name="equipment_list" rows="2"
                                                placeholder="e.g. Projector, whiteboard, craft materials..."
                                                style={s.textarea} onChange={updateProgress} />
                                        </Field>
                                    </div>
                                </SectionCard>

                                {/* SECTION 10 */}
                                <SectionCard num={10} title="Financial Details" subtitle="(paid services or partnerships only)">
                                    <div className="vcedi-grid" style={s.grid}>
                                        <ChoiceGroup label="Charges for services?" full>
                                            <YesNo name="charges_for_services" />
                                        </ChoiceGroup>
                                        <Field label="Fee Structure / Range">
                                            <input type="text" name="fee_structure"
                                                placeholder="e.g. ₦5,000 per session" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Estimated Cost (if known)">
                                            <input type="text" name="estimated_cost"
                                                placeholder="e.g. ₦50,000 per project" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <div style={{ gridColumn: '1 / -1', height: 1, background: '#f0f2f6' }} />
                                        <Field label="Bank Name">
                                            <input type="text" name="bank_name"
                                                placeholder="e.g. First Bank" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Account Name">
                                            <input type="text" name="account_name"
                                                placeholder="Account name as registered" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Account Number">
                                            <input type="text" name="account_number"
                                                placeholder="10-digit number" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <div style={{ gridColumn: '1 / -1' }}>
                                            <div style={s.noteBox}>
                                                <span>💡</span>
                                                <span>Payments are made only to verified accounts after validation and approval by the Foundation.</span>
                                            </div>
                                        </div>
                                    </div>
                                </SectionCard>

                                {/* SECTION 11 */}
                                <SectionCard num={11} title="Availability & Commitment">
                                    <div className="vcedi-grid" style={s.grid}>
                                        <ChoiceGroup label="Available to work with Roseline Ada Foundation (VCEDI)?" required>
                                            <RadioChips name="available_vcedi" options={['Yes','No']} required />
                                        </ChoiceGroup>
                                        <ChoiceGroup label="Can commit to scheduled programme activities?" required>
                                            <RadioChips name="can_commit" options={['Yes','No']} required />
                                        </ChoiceGroup>
                                    </div>
                                </SectionCard>

                                {/* SECTION 12 */}
                                <SectionCard num={12} title="Documents & Media">
                                    <div className="vcedi-grid" style={s.grid}>
                                        <Field label="Valid Photo ID">
                                            <input type="file" name="upload_photo_id" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="CAC Certificate (if registered org)">
                                            <input type="file" name="upload_cac" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Training Materials / Curriculum Samples">
                                            <input type="file" name="upload_samples" multiple style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Photographs of Past Work / Events">
                                            <input type="file" name="upload_photos" multiple style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <div style={{ gridColumn: '1 / -1' }}>
                                            <div style={{ ...s.noteBox, ...s.noteBoxBlue }}>
                                                <span>📎</span>
                                                <span>Attachments are not sent through this form. After submitting, email your documents to <strong>impact@roselineadafoundation.org</strong> with your full name as the subject.</span>
                                            </div>
                                        </div>
                                    </div>
                                </SectionCard>

                                {/* SECTION 13 */}
                                <SectionCard num={13} title="References">
                                    <div className="vcedi-grid" style={s.grid}>
                                        <Field label="Reference Name">
                                            <input type="text" name="ref_name"
                                                placeholder="Full name" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Organization / Institution">
                                            <input type="text" name="ref_organization"
                                                placeholder="Where they work" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Contact Number">
                                            <input type="tel" name="ref_phone"
                                                placeholder="+234 800 000 0000" style={s.input} onChange={updateProgress} />
                                        </Field>
                                        <Field label="Email">
                                            <input type="email" name="ref_email"
                                                placeholder="ref@example.com" style={s.input} onChange={updateProgress} />
                                        </Field>
                                    </div>
                                </SectionCard>

                                {/* SECTION 14 */}
                                <SectionCard num={14} title="Declaration">
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                        <DeclCheck name="declare_accurate">
                                            I confirm that the information provided is accurate and complete.
                                        </DeclCheck>
                                        <DeclCheck name="declare_consent">
                                            I consent to verification and background check by Roseline Ada Foundation.
                                        </DeclCheck>
                                        <DeclCheck name="declare_values">
                                            I agree to observe the values and guidelines of the VCEDI Programme.
                                        </DeclCheck>
                                    </div>
                                </SectionCard>

                                <input type="hidden" name="to_email" value="impact@roselineadafoundation.org" />

                                {/* SUBMIT */}
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
                                    {status === 'sending' ? 'Submitting…' : status === 'success' ? '✓ Submitted — Thank you!' : 'Submit Registration →'}
                                </button>

                            </form>
                        </div>

                        {/* Sticky Progress Card */}
                        <div className="vcedi-progress-sticky" style={s.progressContainer}>
                            <ProgressCard 
                                progress={progress} 
                                pct={pct} 
                                formRef={formRef} 
                                totalSections={14} 
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}