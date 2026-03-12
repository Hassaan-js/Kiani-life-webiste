import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Check, Phone } from "lucide-react";

const BookCallForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    motivation: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!data.firstName.trim()) e.firstName = "Required";
    if (!data.lastName.trim()) e.lastName = "Required";
    if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) e.email = "Valid email required";
    if (!data.phone.trim()) e.phone = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-[52px] h-[52px] border border-gold mx-auto mb-5 flex items-center justify-center text-gold">
          <Check className="w-6 h-6" />
        </div>
        <h3 className="font-serif text-[22px] font-bold text-t1 mb-2.5">You're In!</h3>
        <p className="text-sm text-t2 font-light leading-relaxed mb-6 max-w-[360px] mx-auto">
          A Kiani recruiter will reach out within 24 hours to schedule your discovery call. Get ready — this could change everything.
        </p>
        <a href="tel:8442983473" className="inline-flex items-center gap-2.5 px-9 py-[15px] border border-subtle text-t2 text-[13px] font-semibold tracking-[0.08em] uppercase hover:border-gold-line hover:text-t1 transition-all">
          <Phone className="w-4 h-4" /> Call Now: 844.298.3473
        </a>
      </div>
    );
  }

  const inputClass = (field: string) =>
    `w-full p-3 bg-[hsl(var(--input))] border text-t1 text-sm outline-none transition-colors focus:border-gold-line placeholder:text-t3 ${errors[field] ? "border-destructive" : "border-subtle"}`;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">
        <div>
          <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-t3 mb-1.5">First Name</label>
          <input value={data.firstName} onChange={(e) => setData({ ...data, firstName: e.target.value })} className={inputClass("firstName")} placeholder="Your first name" />
        </div>
        <div>
          <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-t3 mb-1.5">Last Name</label>
          <input value={data.lastName} onChange={(e) => setData({ ...data, lastName: e.target.value })} className={inputClass("lastName")} placeholder="Your last name" />
        </div>
      </div>
      <div className="mb-3.5">
        <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-t3 mb-1.5">Email</label>
        <input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className={inputClass("email")} placeholder="your@email.com" />
      </div>
      <div className="mb-3.5">
        <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-t3 mb-1.5">Phone</label>
        <input type="tel" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} className={inputClass("phone")} placeholder="(555) 123-4567" />
      </div>
      <div className="mb-3.5">
        <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-t3 mb-1.5">Sales Experience</label>
        <select
          value={data.experience}
          onChange={(e) => setData({ ...data, experience: e.target.value })}
          className={`${inputClass("experience")}`}
          style={{ backgroundColor: 'hsl(225 39% 9%)' }}
        >
          <option value="">Select one (optional)</option>
          <option>No experience — ready to learn</option>
          <option>Some sales experience</option>
          <option>Licensed insurance agent</option>
          <option>Experienced agent looking to switch</option>
        </select>
      </div>
      <div className="mb-5">
        <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-t3 mb-1.5">What excites you most?</label>
        <select
          value={data.motivation}
          onChange={(e) => setData({ ...data, motivation: e.target.value })}
          className={`${inputClass("motivation")}`}
          style={{ backgroundColor: 'hsl(225 39% 9%)' }}
        >
          <option value="">Select one (optional)</option>
          <option>Uncapped income potential</option>
          <option>Being my own boss</option>
          <option>Flexible schedule</option>
          <option>Building a team / leadership</option>
          <option>All of the above</option>
        </select>
      </div>
      <button
        onClick={submit}
        disabled={loading}
        className={`group relative w-full py-[16px] bg-gold text-primary-foreground text-[13px] font-bold tracking-[0.1em] uppercase overflow-hidden flex items-center justify-center gap-2 ${loading ? "opacity-65 pointer-events-none" : ""}`}
      >
        <Calendar className="relative z-10 w-4 h-4" />
        <span className="relative z-10">{loading ? "Submitting..." : "Book My Discovery Call"}</span>
        <span className="absolute inset-0 bg-[hsl(var(--gold-hi))] -translate-x-full transition-transform duration-350 group-hover:translate-x-0" />
      </button>
      <p className="text-[11px] text-t3 text-center mt-3 leading-relaxed tracking-wide">
        No commitment. No pressure. Just a conversation about your future.
      </p>
    </div>
  );
};

const ApplySection = () => (
  <section id="apply" className="bg-ink py-24 sm:py-32">
    <div className="wrap">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow block mb-3.5">Take the First Step</span>
          <h2 className="d2 text-t1 mb-4">Ready to Bet <span className="gold-italic">On Yourself?</span></h2>
          <p className="text-base font-light text-t2 leading-relaxed mb-6">
            Book a free, no-pressure discovery call with a Kiani recruiter. We'll answer your questions, share the full compensation breakdown, and help you decide if this is the right move.
          </p>
          <div className="flex flex-col gap-4 mb-8">
            {[
              "15-minute casual conversation",
              "Full comp plan walkthrough",
              "No experience required to apply",
              "Positions available nationwide",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-t2 font-light">
                <div className="w-5 h-5 border border-gold-line flex items-center justify-center flex-shrink-0 text-gold">
                  <Check className="w-3 h-3" />
                </div>
                {item}
              </div>
            ))}
          </div>
          <div className="p-5 border border-subtle bg-panel">
            <div className="text-[11px] font-semibold tracking-[0.12em] text-t3 uppercase mb-2">Next Info Session</div>
            <div className="font-serif text-lg font-bold text-t1 mb-1">Every Wednesday & Saturday</div>
            <div className="text-sm text-t2 font-light">Virtual sessions at 7:00 PM EST — open to all</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="bg-panel border border-subtle border-t-2 border-t-[hsl(var(--gold))] p-8 sm:p-10">
            <h3 className="font-serif text-[21px] font-bold text-t1 mb-1">Book Your Call</h3>
            <p className="text-xs font-medium tracking-[0.1em] text-t3 uppercase mb-7">Free · 15 minutes · Life-changing</p>
            <BookCallForm />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ApplySection;
