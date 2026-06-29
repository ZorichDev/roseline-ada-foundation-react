import { useState } from "react";

// ── Styles ──────────────────────────────────────────────
const labelStyle = { fontWeight: 600, fontSize: 13, color: "#444", marginBottom: 6, display: "block" };
const inputStyle = { borderRadius: 8, border: "1.5px solid #ddd", padding: "10px 14px", fontSize: 14, width: "100%" };
const optionStyle = { display: "inline-flex", alignItems: "center", gap: 6, marginRight: 18, marginBottom: 8, cursor: "pointer", fontWeight: 400, fontSize: 14 };

// ── Constants ────────────────────────────────────────────
const STEPS = [
    { number: 1, label: "Associate Info" },
    { number: 2, label: "Profile" },
    { number: 3, label: "Services" },
    { number: 4, label: "Experience" },
    { number: 5, label: "Financials" },
    { number: 6, label: "Declaration" },
];

const initialData = {
    fullName: "", associateType: [], address: "", community: "", lga: "", state: "", country: "", phone: "", email: "",
    entityType: "", cacNumber: "", yearsExperience: "", teamMembers: "",
    contactName: "", contactPosition: "", contactPhone: "", contactEmail: "",
    areasOfSupport: [], serviceDescription: "", targetAgeGroup: [], deliveryMode: "",
    childrenPerSession: "", frequency: "", locations: "", workInSchools: "",
    workedWithChildren: "", workedWithSchools: "", workedWithNGOs: "", pastExperience: "",
    hasMaterials: "", providesBooks: "", sampleTopics: "",
    vulnerableExperience: "", childProtection: "", professionalConduct: "",
    canTravel: "", needsEquipment: "", equipmentList: "",
    chargesForServices: "", feeStructure: "", estimatedCost: "", bankName: "", accountName: "", accountNumber: "",
    availableToWork: "", canCommit: "",
    hasPhotoID: false, hasCACCert: false, hasMaterialSamples: false, hasPhotographs: false,
    refName: "", refOrganization: "", refPhone: "", refEmail: "",
    confirmAccurate: false, consentVerification: false, agreeGuidelines: false,
};

// ── Sub-components (outside Donate to prevent remount) ───
function SectionHead({ sec, title }) {
    return (
        <div style={{ borderLeft: "4px solid #e05c1a", paddingLeft: 14, marginBottom: 24 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#e05c1a", textTransform: "uppercase", letterSpacing: 1 }}>Section {sec}</span>
            <h5 style={{ margin: "4px 0 0", fontSize: 17, fontWeight: 700, color: "#1a1a2e" }}>{title}</h5>
        </div>
    );
}

function SubHead({ sec, title, sub }) {
    return (
        <div style={{ marginTop: 16, borderLeft: "4px solid #e05c1a", paddingLeft: 14, marginBottom: 24 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#e05c1a", textTransform: "uppercase", letterSpacing: 1 }}>Section {sec}</span>
            <h5 style={{ margin: "4px 0 0", fontSize: 17, fontWeight: 700, color: "#1a1a2e" }}>
                {title} {sub && <span style={{ fontSize: 13, fontWeight: 400, color: "#888" }}>{sub}</span>}
            </h5>
        </div>
    );
}

function Field({ label, name, type = "text", placeholder, required, half, value, onChange }) {
    return (
        <div className={half ? "col-sm-6" : "col-lg-12"}>
            <div className="form-group">
                <label htmlFor={name} style={labelStyle}>
                    {label}{required && <span style={{ color: "#e05c1a" }}> *</span>}
                </label>
                {type === "textarea" ? (
                    <textarea id={name} name={name} className="form-control" placeholder={placeholder} rows={3}
                        value={value} onChange={onChange} style={inputStyle} />
                ) : (
                    <input type={type} id={name} name={name} className="form-control"
                        placeholder={placeholder} required={required}
                        value={value} onChange={onChange} style={inputStyle} />
                )}
            </div>
        </div>
    );
}

function Radio({ name, value, label, checked, onChange }) {
    return (
        <label style={optionStyle}>
            <input type="radio" name={name} value={value} checked={checked} onChange={onChange}
                style={{ accentColor: "#e05c1a", width: 15, height: 15 }} />
            {label}
        </label>
    );
}

function Check({ name, value, label, checked, onChange }) {
    return (
        <label style={optionStyle}>
            <input type="checkbox" name={name} value={value} checked={checked} onChange={onChange}
                style={{ accentColor: "#e05c1a", width: 15, height: 15 }} />
            {label}
        </label>
    );
}

function YesNo({ label, name, value, onChange }) {
    return (
        <div className="col-sm-4">
            <p style={labelStyle}>{label}</p>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                <Radio name={name} value="Yes" label="Yes" checked={value === "Yes"} onChange={onChange} />
                <Radio name={name} value="No" label="No" checked={value === "No"} onChange={onChange} />
            </div>
        </div>
    );
}

// ── Step Panels ──────────────────────────────────────────
function Step1({ formData, handle, handleMulti }) {
    return (
        <>
            <SectionHead sec="1" title="Associate Information" />
            <div className="row">
                <Field label="Full Name / Organization Name" name="fullName" placeholder="Enter full name or organization name" required value={formData.fullName} onChange={handle} />
                <div className="col-lg-12">
                    <p style={labelStyle}>Type of Associate</p>
                    <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 16 }}>
                        {["Trainer", "Teacher", "Mentor", "Book Supplier", "Educational Service Provider", "Craft Instructor", "Other"].map(t => (
                            <Check key={t} name="associateType" value={t} label={t} checked={formData.associateType.includes(t)} onChange={() => handleMulti("associateType", t)} />
                        ))}
                    </div>
                </div>
                <Field label="Business / Office Address" name="address" placeholder="Enter address" value={formData.address} onChange={handle} />
                <Field label="Community" name="community" placeholder="Community" half value={formData.community} onChange={handle} />
                <Field label="LGA" name="lga" placeholder="LGA" half value={formData.lga} onChange={handle} />
                <Field label="State" name="state" placeholder="State" half value={formData.state} onChange={handle} />
                <Field label="Country" name="country" placeholder="Country" half value={formData.country} onChange={handle} />
                <Field label="Phone Number" name="phone" type="tel" placeholder="+234..." required half value={formData.phone} onChange={handle} />
                <Field label="Email Address" name="email" type="email" placeholder="email@example.com" required half value={formData.email} onChange={handle} />
            </div>

            <SubHead sec="2" title="Profile & Background" />
            <div className="row">
                <div className="col-lg-12">
                    <p style={labelStyle}>Type of Entity</p>
                    <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 16 }}>
                        {["Individual", "Business", "Organization"].map(t => (
                            <Radio key={t} name="entityType" value={t} label={t} checked={formData.entityType === t} onChange={handle} />
                        ))}
                    </div>
                </div>
                <Field label="CAC Registration Number (if applicable)" name="cacNumber" placeholder="RC000000" half value={formData.cacNumber} onChange={handle} />
                <Field label="Years of Experience" name="yearsExperience" placeholder="e.g. 5" half value={formData.yearsExperience} onChange={handle} />
                <Field label="Number of Team Members (if any)" name="teamMembers" placeholder="e.g. 10" half value={formData.teamMembers} onChange={handle} />
            </div>

            <SubHead sec="3" title="Contact Person" sub="(if Organization or Group)" />
            <div className="row">
                <Field label="Full Name" name="contactName" placeholder="Contact person's full name" half value={formData.contactName} onChange={handle} />
                <Field label="Position / Role" name="contactPosition" placeholder="e.g. Director" half value={formData.contactPosition} onChange={handle} />
                <Field label="Phone Number" name="contactPhone" type="tel" placeholder="+234..." half value={formData.contactPhone} onChange={handle} />
                <Field label="Email Address" name="contactEmail" type="email" placeholder="contact@example.com" half value={formData.contactEmail} onChange={handle} />
            </div>
        </>
    );
}

function Step2({ formData, handle, handleMulti }) {
    return (
        <>
            <SectionHead sec="4" title="Service Offerings" />
            <div className="row">
                <div className="col-lg-12">
                    <p style={labelStyle}>Areas of Support</p>
                    <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 16 }}>
                        {["Academic Teaching", "Career / Personal Development", "Mentorship", "Book Supply", "Digital Skills", "Vocational Training", "Others"].map(t => (
                            <Check key={t} name="areasOfSupport" value={t} label={t} checked={formData.areasOfSupport.includes(t)} onChange={() => handleMulti("areasOfSupport", t)} />
                        ))}
                    </div>
                </div>
                <Field label="Brief Description of Services Provided" name="serviceDescription" type="textarea" placeholder="Describe your services..." value={formData.serviceDescription} onChange={handle} />
                <div className="col-lg-12">
                    <p style={labelStyle}>Target Age Group</p>
                    <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 16 }}>
                        {["Nursery", "Primary", "Secondary", "Mixed"].map(t => (
                            <Check key={t} name="targetAgeGroup" value={t} label={t} checked={formData.targetAgeGroup.includes(t)} onChange={() => handleMulti("targetAgeGroup", t)} />
                        ))}
                    </div>
                </div>
                <div className="col-lg-12">
                    <p style={labelStyle}>Mode of Delivery</p>
                    <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 16 }}>
                        {["Physical", "Virtual", "Both"].map(t => (
                            <Radio key={t} name="deliveryMode" value={t} label={t} checked={formData.deliveryMode === t} onChange={handle} />
                        ))}
                    </div>
                </div>
            </div>

            <SubHead sec="5" title="Capacity & Delivery" />
            <div className="row">
                <Field label="Approximate number of children per session" name="childrenPerSession" placeholder="e.g. 30" half value={formData.childrenPerSession} onChange={handle} />
                <div className="col-sm-6">
                    <p style={labelStyle}>Frequency of Engagement</p>
                    <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 16 }}>
                        {["Daily", "Weekly", "Monthly", "Other"].map(t => (
                            <Radio key={t} name="frequency" value={t} label={t} checked={formData.frequency === t} onChange={handle} />
                        ))}
                    </div>
                </div>
                <Field label="Primary locations of operation" name="locations" placeholder="e.g. Lagos, Abuja" value={formData.locations} onChange={handle} />
                <div className="col-lg-12">
                    <p style={labelStyle}>Can work within school environments?</p>
                    <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                        <Radio name="workInSchools" value="Yes" label="Yes" checked={formData.workInSchools === "Yes"} onChange={handle} />
                        <Radio name="workInSchools" value="No" label="No" checked={formData.workInSchools === "No"} onChange={handle} />
                    </div>
                </div>
            </div>
        </>
    );
}

function Step3({ formData, handle }) {
    return (
        <>
            <SectionHead sec="6" title="Experience & Track Record" />
            <div className="row">
                <YesNo label="Worked with children before?" name="workedWithChildren" value={formData.workedWithChildren} onChange={handle} />
                <YesNo label="Worked with schools before?" name="workedWithSchools" value={formData.workedWithSchools} onChange={handle} />
                <YesNo label="Worked with NGOs before?" name="workedWithNGOs" value={formData.workedWithNGOs} onChange={handle} />
                <Field label="Summary of past experience and projects" name="pastExperience" type="textarea" placeholder="Briefly describe your past work..." value={formData.pastExperience} onChange={handle} />
            </div>

            <SubHead sec="7" title="Content / Materials" />
            <div className="row">
                <div className="col-sm-6">
                    <p style={labelStyle}>Structured training materials available?</p>
                    <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                        <Radio name="hasMaterials" value="Yes" label="Yes" checked={formData.hasMaterials === "Yes"} onChange={handle} />
                        <Radio name="hasMaterials" value="No" label="No" checked={formData.hasMaterials === "No"} onChange={handle} />
                    </div>
                </div>
                <div className="col-sm-6">
                    <p style={labelStyle}>Provides books or educational resources?</p>
                    <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                        <Radio name="providesBooks" value="Yes" label="Yes" checked={formData.providesBooks === "Yes"} onChange={handle} />
                        <Radio name="providesBooks" value="No" label="No" checked={formData.providesBooks === "No"} onChange={handle} />
                    </div>
                </div>
                <Field label="Sample topics / curriculum offered" name="sampleTopics" type="textarea" placeholder="List sample topics or curriculum..." value={formData.sampleTopics} onChange={handle} />
            </div>

            <SubHead sec="8" title="Quality & Child Protection" />
            <div className="row">
                <YesNo label="Experience with vulnerable children?" name="vulnerableExperience" value={formData.vulnerableExperience} onChange={handle} />
                <YesNo label="Can comply with child protection standards?" name="childProtection" value={formData.childProtection} onChange={handle} />
                <YesNo label="Maintains professional conduct and ethics?" name="professionalConduct" value={formData.professionalConduct} onChange={handle} />
            </div>

            <SubHead sec="9" title="Operations & Logistics" />
            <div className="row">
                <div className="col-sm-6">
                    <p style={labelStyle}>Can travel to schools or field locations?</p>
                    <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                        <Radio name="canTravel" value="Yes" label="Yes" checked={formData.canTravel === "Yes"} onChange={handle} />
                        <Radio name="canTravel" value="No" label="No" checked={formData.canTravel === "No"} onChange={handle} />
                    </div>
                </div>
                <div className="col-sm-6">
                    <p style={labelStyle}>Requires special equipment or resources?</p>
                    <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                        <Radio name="needsEquipment" value="Yes" label="Yes" checked={formData.needsEquipment === "Yes"} onChange={handle} />
                        <Radio name="needsEquipment" value="No" label="No" checked={formData.needsEquipment === "No"} onChange={handle} />
                    </div>
                </div>
                {formData.needsEquipment === "Yes" && (
                    <Field label="List required tools / equipment" name="equipmentList" type="textarea" placeholder="List your required equipment..." value={formData.equipmentList} onChange={handle} />
                )}
            </div>
        </>
    );
}

function Step4({ formData, handle }) {
    return (
        <>
            <SectionHead sec="10" title="Financial Details" />
            <div style={{ background: "#fff8f4", border: "1px solid #f3d5c0", borderRadius: 8, padding: "12px 16px", fontSize: 13, color: "#888", marginBottom: 20 }}>
                💡 For paid services or partnerships only. Payments are made only to verified accounts after validation and approval.
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <p style={labelStyle}>Charges for services?</p>
                    <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                        <Radio name="chargesForServices" value="Yes" label="Yes" checked={formData.chargesForServices === "Yes"} onChange={handle} />
                        <Radio name="chargesForServices" value="No" label="No" checked={formData.chargesForServices === "No"} onChange={handle} />
                    </div>
                </div>
                <Field label="Fee structure / Range (per session or project)" name="feeStructure" placeholder="e.g. ₦5,000 per session" half value={formData.feeStructure} onChange={handle} />
                <Field label="Estimated cost (if known)" name="estimatedCost" placeholder="e.g. ₦50,000" half value={formData.estimatedCost} onChange={handle} />
                <Field label="Bank Name" name="bankName" placeholder="e.g. GTBank" half value={formData.bankName} onChange={handle} />
                <Field label="Account Name" name="accountName" placeholder="Account name" half value={formData.accountName} onChange={handle} />
                <Field label="Account Number" name="accountNumber" placeholder="0000000000" half value={formData.accountNumber} onChange={handle} />
            </div>

            <SubHead sec="11" title="Availability & Commitment" />
            <div className="row">
                <div className="col-sm-6">
                    <p style={labelStyle}>Available to work with Roseline Ada Foundation (VCEDI)?</p>
                    <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                        <Radio name="availableToWork" value="Yes" label="Yes" checked={formData.availableToWork === "Yes"} onChange={handle} />
                        <Radio name="availableToWork" value="No" label="No" checked={formData.availableToWork === "No"} onChange={handle} />
                    </div>
                </div>
                <div className="col-sm-6">
                    <p style={labelStyle}>Can commit to scheduled programme activities when invited?</p>
                    <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                        <Radio name="canCommit" value="Yes" label="Yes" checked={formData.canCommit === "Yes"} onChange={handle} />
                        <Radio name="canCommit" value="No" label="No" checked={formData.canCommit === "No"} onChange={handle} />
                    </div>
                </div>
            </div>
        </>
    );
}

function Step5({ formData, handle }) {
    return (
        <>
            <SectionHead sec="12" title="Documents & Media" />
            <p style={{ fontSize: 13, color: "#666", marginBottom: 16 }}>Please confirm soft or printed copies of the following (where applicable):</p>
            <div className="row">
                <div className="col-lg-12">
                    {[
                        { name: "hasPhotoID", label: "Valid Photo ID (e.g., National ID, Driver's License, Voter's Card)" },
                        { name: "hasCACCert", label: "CAC Certificate (if registered organization)" },
                        { name: "hasMaterialSamples", label: "Samples of training materials, curriculum, or resource books" },
                        { name: "hasPhotographs", label: "Photographs of past work / events" },
                    ].map(({ name, label }) => (
                        <label key={name} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 14, cursor: "pointer", fontSize: 14, color: "#333" }}>
                            <input type="checkbox" name={name} checked={formData[name]} onChange={handle}
                                style={{ accentColor: "#e05c1a", marginTop: 2, width: 16, height: 16, flexShrink: 0 }} />
                            {label}
                        </label>
                    ))}
                </div>
            </div>

            <SubHead sec="13" title="References" />
            <div className="row">
                <Field label="Reference Name" name="refName" placeholder="Full name" half value={formData.refName} onChange={handle} />
                <Field label="Organization / Institution" name="refOrganization" placeholder="Organization name" half value={formData.refOrganization} onChange={handle} />
                <Field label="Contact Number" name="refPhone" type="tel" placeholder="+234..." half value={formData.refPhone} onChange={handle} />
                <Field label="Email" name="refEmail" type="email" placeholder="reference@example.com" half value={formData.refEmail} onChange={handle} />
            </div>
        </>
    );
}

function Step6({ formData, handle }) {
    return (
        <>
            <SectionHead sec="14" title="Declaration" />
            <div className="row">
                <div className="col-lg-12">
                    {[
                        { name: "confirmAccurate", label: "I confirm that the information provided is accurate and complete." },
                        { name: "consentVerification", label: "I consent to verification and background check by Roseline Ada Foundation." },
                        { name: "agreeGuidelines", label: "I agree to observe the values and guidelines of the VCEDI Programme." },
                    ].map(({ name, label }) => (
                        <label key={name} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 16, cursor: "pointer", fontSize: 14, color: "#333" }}>
                            <input type="checkbox" name={name} checked={formData[name]} onChange={handle} required
                                style={{ accentColor: "#e05c1a", marginTop: 2, width: 16, height: 16, flexShrink: 0 }} />
                            {label}
                        </label>
                    ))}
                </div>
                <div className="col-lg-12">
                    <div style={{ background: "#fff8f4", border: "1.5px solid #f3d5c0", borderRadius: 10, padding: "18px 20px", marginTop: 8 }}>
                        <p style={{ fontSize: 13, color: "#666", margin: 0, lineHeight: 1.7 }}>
                            Thank you for partnering with <strong>Roseline Ada Foundation</strong> to empower children and communities through education and development.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

// ── Main Component ───────────────────────────────────────
export default function Donate() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState(initialData);
    const [submitted, setSubmitted] = useState(false);

    const handle = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    const handleMulti = (name, value) => {
        setFormData(prev => {
            const arr = prev[name];
            return { ...prev, [name]: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value] };
        });
    };

    const next = () => { setStep(s => Math.min(s + 1, STEPS.length)); window.scrollTo({ top: 0, behavior: "smooth" }); };
    const prev = () => { setStep(s => Math.max(s - 1, 1)); window.scrollTo({ top: 0, behavior: "smooth" }); };
    const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); window.scrollTo({ top: 0, behavior: "smooth" }); };

    const stepProps = { formData, handle, handleMulti };

    const renderStep = () => {
        switch (step) {
            case 1: return <Step1 {...stepProps} />;
            case 2: return <Step2 {...stepProps} />;
            case 3: return <Step3 {...stepProps} />;
            case 4: return <Step4 {...stepProps} />;
            case 5: return <Step5 {...stepProps} />;
            case 6: return <Step6 {...stepProps} />;
            default: return null;
        }
    };

    return (
        <>
            {/* Page Banner */}
            <div className="page-banner-area bgs-cover overlay text-white py-165 rpy-125 rmt-65"
                style={{ backgroundImage: "url(\"/assets/img/background/page-banner.jpg\")" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="breadcrumb-inner text-center">
                                <h2 className="page-title">VCEDI Associate Registration</h2>
                                <ul className="page-list">
                                    <li><a href="/">Home</a></li>
                                    <li>Associate Registration</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="donation-area py-120">
                <div className="container">
                    {submitted ? (
                        <div className="row justify-content-center">
                            <div className="col-lg-7 text-center">
                                <div style={{ background: "#f0faf4", border: "2px solid #4caf80", borderRadius: 16, padding: "56px 32px" }}>
                                    <div style={{ fontSize: 64, marginBottom: 16 }}>✅</div>
                                    <h3 style={{ color: "#1a1a2e", marginBottom: 12 }}>Registration Submitted!</h3>
                                    <p style={{ color: "#555", fontSize: 15, maxWidth: 460, margin: "0 auto 28px", lineHeight: 1.7 }}>
                                        Thank you for partnering with Roseline Ada Foundation. Your application will be reviewed and verified before onboarding. We'll reach out via the contact details provided.
                                    </p>
                                    <button className="btn ml-5" onClick={() => { setSubmitted(false); setStep(1); setFormData(initialData); }}>
                                        Submit Another
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="row gap-60">
                            <div className="col-lg-8">
                                {/* Intro */}
                                <div style={{ background: "#fff8f4", border: "1.5px solid #f3d5c0", borderRadius: 12, padding: "20px 24px", marginBottom: 32 }}>
                                    <h5 style={{ color: "#1a1a2e", marginBottom: 6, fontSize: 16 }}>VCEDI Associate Registration & Verification</h5>
                                    <p style={{ color: "#666", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                                        All information provided will be reviewed and verified before onboarding. Associates include individuals and organizations providing training, teaching, mentorship, book supply, digital education, craftsmanship, or other educational support services.
                                    </p>
                                </div>

                                {/* Progress Stepper */}
                                <div style={{ marginBottom: 36 }}>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
                                        <div style={{ position: "absolute", top: 18, left: 0, right: 0, height: 2, background: "#eee", zIndex: 0 }} />
                                        <div style={{ position: "absolute", top: 18, left: 0, height: 2, background: "#e05c1a", zIndex: 1, width: `${((step - 1) / (STEPS.length - 1)) * 100}%`, transition: "width 0.4s ease" }} />
                                        {STEPS.map(s => (
                                            <div key={s.number} style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 2, flex: 1 }}>
                                                <div style={{
                                                    width: 36, height: 36, borderRadius: "50%",
                                                    background: step >= s.number ? "#e05c1a" : "#fff",
                                                    border: `2px solid ${step >= s.number ? "#e05c1a" : "#ddd"}`,
                                                    display: "flex", alignItems: "center", justifyContent: "center",
                                                    fontSize: 13, fontWeight: 700,
                                                    color: step >= s.number ? "#fff" : "#aaa",
                                                    transition: "all 0.3s ease",
                                                    boxShadow: step === s.number ? "0 0 0 4px rgba(224,92,26,0.15)" : "none"
                                                }}>
                                                    {step > s.number ? "✓" : s.number}
                                                </div>
                                                <span style={{ fontSize: 10, marginTop: 6, color: step >= s.number ? "#e05c1a" : "#aaa", fontWeight: step === s.number ? 700 : 400, textAlign: "center", whiteSpace: "nowrap" }}>
                                                    {s.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Form */}
                                <form onSubmit={step === STEPS.length ? handleSubmit : e => { e.preventDefault(); next(); }} className="donation-form">
                                    <div style={{ minHeight: 400 }}>
                                        {renderStep()}
                                    </div>

                                    {/* Nav Buttons */}
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 32, paddingTop: 24, borderTop: "1px solid #eee" }}>
                                        {step > 1 ? (
                                            <button type="button" onClick={prev}
                                                style={{ background: "transparent", border: "2px solid #e05c1a", color: "#e05c1a", padding: "10px 28px", borderRadius: 6, fontWeight: 600, cursor: "pointer", fontSize: 14 }}>
                                                ← Back
                                            </button>
                                        ) : <div />}
                                        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                                            <span style={{ fontSize: 13, color: "#aaa" }}>Step {step} of {STEPS.length}</span>
                                            <button type="submit" className="btn ml-5">
                                                {step < STEPS.length ? "Next →" : "Submit Registration"}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* Sidebar */}
                            <div className="col-lg-4">
                                <div className="main-sidebar rmt-75">
                                    <div className="widget widget_search">
                                        <h5 className="widget-title">Search Causes</h5>
                                        <form className="search-form" onSubmit={e => e.preventDefault()}>
                                            <div className="form-group">
                                                <input type="text" placeholder="Search key word" required />
                                            </div>
                                            <button className="submit-btn" type="submit">
                                                <i className="flaticon-magnifying-glass"></i>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="widget widget-recent-causes">
                                        <h5 className="widget-title">Recent Causes</h5>
                                        <ul>
                                            <li>
                                                <div className="image"><img src="/assets/img/close-up-kids-looking-smartphone.jpg" alt="Cause" /></div>
                                                <div className="content"><h6><a href="/cause-details">Clothes For Everyone</a></h6></div>
                                            </li>
                                            <li>
                                                <div className="image"><img src="/assets/img/medium-shot-african-kids-window.jpg" alt="Cause" /></div>
                                                <div className="content"><h6><a href="/cause-details">New Kindergarten</a></h6></div>
                                            </li>
                                            <li>
                                                <div className="image"><img src="/assets/img/medium-shot-kids-posing-outdoors.jpg" alt="Cause" /></div>
                                                <div className="content"><h6><a href="/cause-details">Food for Children</a></h6></div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget widget_tag_cloud">
                                        <h5 className="widget-title">Tags</h5>
                                        <div className="tagcloud">
                                            <a href="#">Charity</a>
                                            <a href="#">Nigeria Children</a>
                                            <a href="#">Community</a>
                                            <a href="#">Food</a>
                                            <a href="#">Clean Water</a>
                                            <a href="#">Education</a>
                                            <a href="#">Health</a>
                                            <a href="#">Volunteers</a>
                                            <a href="#">Homeless child</a>
                                        </div>
                                    </div>
                                    <div className="widget widget_cta">
                                        <div className="cta-widget-inner" style={{ backgroundImage: "url(\"/assets/img/1.jpg\")" }}>
                                            <h5>We have provided financial help to 5 million people</h5>
                                            <a className="btn ml-5" href="/donate">Donate Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}