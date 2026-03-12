import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Shield, Heart, Users, TrendingUp, Phone } from "lucide-react";

const coverageOptions = [
  { label: "Life Insurance", icon: Shield },
  { label: "Health Insurance", icon: Heart },
  { label: "Medicare Plans", icon: Users },
  { label: "Retirement / IUL", icon: TrendingUp },
];

const QuoteForm = () => {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    coverage: "",
    state: "",
    dob: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const selectCoverage = (c: string) => setData({ ...data, coverage: c });

  const validateStep = () => {
    const e: Record<string, string> = {};
    if (step === 1 && !data.coverage) e.coverage = "Please select a coverage type";
    if (step === 2) {
      if (!data.state) e.state = "Required";
      if (!data.dob) e.dob = "Required";
    }
    if (step === 3) {
      if (!data.firstName.trim()) e.firstName = "Required";
      if (!data.lastName.trim()) e.lastName = "Required";
      if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) e.email = "Valid email required";
      if (!data.phone.trim()) e.phone = "Required";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validateStep()) return;
    if (step < 3) setStep(step + 1);
    else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 1500);
    }
  };

  const back = () => step > 1 && setStep(step - 1);

  const stepAnim = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.25 },
  };

  if (success) {
    return (
      <div id="quote" className="bg-panel border border-subtle border-t-2 border-t-[hsl(var(--gold))] p-10 max-w-[440px]">
        <div className="text-center py-5">
          <div className="w-[52px] h-[52px] border border-gold mx-auto mb-5 flex items-center justify-center text-gold">
            <Check className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-[22px] font-bold text-t1 mb-2.5">Request Received</h3>
          <p className="text-sm text-t2 font-light leading-relaxed mb-6">
            A licensed Kiani advisor will reach out within 1 business day with your personalized options. No pressure, ever.
          </p>
          <a
            href="tel:8442983473"
            className="inline-flex items-center gap-2.5 px-9 py-[15px] border border-subtle text-t2 text-[13px] font-semibold tracking-[0.08em] uppercase hover:border-gold-line hover:text-t1 transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call 844.298.3473</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div id="quote" className="bg-panel border border-subtle border-t-2 border-t-[hsl(var(--gold))] p-8 sm:p-10 max-w-[440px] w-full">
      <h3 className="font-serif text-[21px] font-bold text-t1 mb-1">Find Your Coverage</h3>
      <p className="text-xs font-medium tracking-[0.1em] text-t3 uppercase mb-7">Free · No obligation · 2 minutes</p>

      {/* Progress */}
      <div className="flex items-center gap-0 mb-7">
        {[1, 2, 3].map((s, i) => (
          <div key={s} className="flex items-center flex-1 last:flex-initial">
            <div
              className={`w-[26px] h-[26px] border flex items-center justify-center text-[11px] font-semibold flex-shrink-0 transition-all duration-350 ${
                s < step
                  ? "bg-gold border-gold text-primary-foreground"
                  : s === step
                  ? "border-gold text-gold"
                  : "border-subtle text-t3"
              }`}
            >
              {s < step ? <Check className="w-3 h-3" /> : s}
            </div>
            {i < 2 && (
              <div className={`flex-1 h-px transition-colors duration-350 ${s < step ? "bg-gold" : "bg-[hsl(var(--border))]"}`} />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="s1" {...stepAnim}>
            <p className="text-[11px] font-semibold tracking-[0.12em] text-t3 uppercase mb-3">Step 1 of 3 · Coverage type</p>
            <h4 className="font-serif text-lg font-bold text-t1 mb-4 leading-tight">What are you looking for?</h4>
            <div className="grid grid-cols-2 gap-2 mb-5">
              {coverageOptions.map((opt) => {
                const Icon = opt.icon;
                const sel = data.coverage === opt.label;
                return (
                  <button
                    key={opt.label}
                    onClick={() => selectCoverage(opt.label)}
                    className={`flex items-center gap-2.5 p-3 border text-[13px] font-medium text-left transition-all duration-300 ${
                      sel
                        ? "border-gold bg-gold-lo text-t1"
                        : "border-subtle bg-[hsl(var(--input))] text-t2 hover:border-gold-line hover:text-t1"
                    }`}
                  >
                    <Icon className={`w-4 h-4 flex-shrink-0 transition-colors ${sel ? "text-gold" : "text-t3"}`} />
                    {opt.label}
                  </button>
                );
              })}
            </div>
            {errors.coverage && <p className="text-[11px] text-destructive mb-2">{errors.coverage}</p>}
            <button onClick={next} className="group relative w-full py-[15px] bg-gold text-primary-foreground text-[13px] font-bold tracking-[0.1em] uppercase overflow-hidden">
              <span className="relative z-10">Continue</span>
              <span className="absolute inset-0 bg-[hsl(var(--gold-hi))] -translate-x-full transition-transform duration-350 group-hover:translate-x-0" />
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="s2" {...stepAnim}>
            <button onClick={back} className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.1em] uppercase text-t3 mb-4 hover:text-gold transition-colors">
              <ArrowLeft className="w-3 h-3" /> Back
            </button>
            <p className="text-[11px] font-semibold tracking-[0.12em] text-t3 uppercase mb-3">Step 2 of 3 · Location</p>
            <h4 className="font-serif text-lg font-bold text-t1 mb-4 leading-tight">Which state are you in?</h4>
            <div className="mb-3.5">
              <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-t3 mb-1.5">State</label>
              <select
                value={data.state}
                onChange={(e) => setData({ ...data, state: e.target.value })}
                className={`w-full p-3 bg-[hsl(var(--input))] border text-t1 text-sm outline-none transition-colors focus:border-gold-line ${errors.state ? "border-destructive" : "border-subtle"}`}
                style={{ backgroundColor: 'hsl(225 39% 9%)' }}
              >
                <option value="">Select state</option>
                <option>Florida</option>
                <option>Texas</option>
                <option>Georgia</option>
                <option>North Carolina</option>
                <option>South Carolina</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-5">
              <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-t3 mb-1.5">Date of Birth</label>
              <input
                type="date"
                value={data.dob}
                onChange={(e) => setData({ ...data, dob: e.target.value })}
                className={`w-full p-3 bg-[hsl(var(--input))] border text-t1 text-sm outline-none transition-colors focus:border-gold-line ${errors.dob ? "border-destructive" : "border-subtle"}`}
              />
            </div>
            <button onClick={next} className="group relative w-full py-[15px] bg-gold text-primary-foreground text-[13px] font-bold tracking-[0.1em] uppercase overflow-hidden">
              <span className="relative z-10">Continue</span>
              <span className="absolute inset-0 bg-[hsl(var(--gold-hi))] -translate-x-full transition-transform duration-350 group-hover:translate-x-0" />
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="s3" {...stepAnim}>
            <button onClick={back} className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.1em] uppercase text-t3 mb-4 hover:text-gold transition-colors">
              <ArrowLeft className="w-3 h-3" /> Back
            </button>
            <p className="text-[11px] font-semibold tracking-[0.12em] text-t3 uppercase mb-3">Step 3 of 3 · Contact info</p>
            <h4 className="font-serif text-lg font-bold text-t1 mb-4 leading-tight">Where should we send your quotes?</h4>
            <div className="grid grid-cols-2 gap-3 mb-3.5">
              <div>
                <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-t3 mb-1.5">First Name</label>
                <input
                  value={data.firstName}
                  onChange={(e) => setData({ ...data, firstName: e.target.value })}
                  className={`w-full p-3 bg-[hsl(var(--input))] border text-t1 text-sm outline-none transition-colors focus:border-gold-line ${errors.firstName ? "border-destructive" : "border-subtle"}`}
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-t3 mb-1.5">Last Name</label>
                <input
                  value={data.lastName}
                  onChange={(e) => setData({ ...data, lastName: e.target.value })}
                  className={`w-full p-3 bg-[hsl(var(--input))] border text-t1 text-sm outline-none transition-colors focus:border-gold-line ${errors.lastName ? "border-destructive" : "border-subtle"}`}
                />
              </div>
            </div>
            <div className="mb-3.5">
              <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-t3 mb-1.5">Email</label>
              <input
                type="email"
                placeholder="@email.com"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className={`w-full p-3 bg-[hsl(var(--input))] border text-t1 text-sm outline-none transition-colors focus:border-gold-line placeholder:text-t3 ${errors.email ? "border-destructive" : "border-subtle"}`}
              />
            </div>
            <div className="mb-5">
              <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-t3 mb-1.5">Phone</label>
              <input
                type="tel"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                className={`w-full p-3 bg-[hsl(var(--input))] border text-t1 text-sm outline-none transition-colors focus:border-gold-line ${errors.phone ? "border-destructive" : "border-subtle"}`}
              />
            </div>
            <button
              onClick={next}
              disabled={loading}
              className={`group relative w-full py-[15px] bg-gold text-primary-foreground text-[13px] font-bold tracking-[0.1em] uppercase overflow-hidden ${loading ? "opacity-65 pointer-events-none" : ""}`}
            >
              <span className="relative z-10">{loading ? "Submitting..." : "Get My Free Quotes"}</span>
              <span className="absolute inset-0 bg-[hsl(var(--gold-hi))] -translate-x-full transition-transform duration-350 group-hover:translate-x-0" />
            </button>
            <p className="text-[11px] text-t3 text-center mt-2.5 leading-relaxed tracking-wide">
              Your information is private and secure. A licensed advisor will contact you within 1 business day.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuoteForm;
