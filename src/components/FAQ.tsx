import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How much does it cost to use your services?",
    a: "Our services are completely free to you. We're compensated by the insurance carriers we work with, so there's never a fee or hidden cost for our guidance.",
  },
  {
    q: "How do I know which plan is right for me?",
    a: "We start with a free consultation to understand your needs, budget, and goals. Then we compare options across 15+ carriers to find the best fit — and walk you through everything before you decide.",
  },
  {
    q: "What's the difference between term and whole life insurance?",
    a: "Term life covers you for a set period (10-30 years) at a lower cost. Whole life covers you for your entire life and builds cash value over time. We'll help you decide which makes sense for your situation.",
  },
  {
    q: "Can you help me if I already have coverage?",
    a: "Absolutely. We regularly review existing policies to make sure you're getting the best value. Many clients save money or get better coverage after a policy review.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in Deltona, Florida and serve families across the entire state. Many of our services can be handled over the phone or via video call for your convenience.",
  },
  {
    q: "How quickly can I get coverage?",
    a: "Many plans can be activated within 24-48 hours. Some life insurance policies require a brief health questionnaire but we handle the paperwork to make it as fast as possible.",
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-panel py-24 sm:py-32">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow block mb-3.5">FAQ</span>
            <h2 className="d3 text-t1 mb-5">Common Questions, <span className="gold-italic">Clear Answers</span></h2>
            <p className="text-[15px] font-light text-t2 leading-relaxed mb-9">
              Insurance can feel complicated. We're here to simplify it. If you don't see your question below, give us a call — we're always happy to help.
            </p>
            <a
              href="tel:8442983473"
              className="group relative inline-flex items-center gap-2.5 px-9 py-[15px] border border-subtle text-t2 text-[13px] font-semibold tracking-[0.08em] uppercase hover:border-gold-line hover:text-t1 transition-all"
            >
              Call 844.298.3473
            </a>
          </motion.div>

          <div className="border-t border-subtle">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-subtle">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between gap-5 py-5 text-left text-[15px] font-medium text-t2 transition-colors duration-300 hover:text-t1"
                  style={{ color: openIdx === i ? 'hsl(var(--t1))' : undefined }}
                >
                  {faq.q}
                  <div
                    className={`w-[26px] h-[26px] border flex items-center justify-center flex-shrink-0 transition-all duration-400 ${
                      openIdx === i ? "border-gold text-gold rotate-45" : "border-subtle text-t3"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: openIdx === i ? "280px" : "0",
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <p className="pb-5 text-sm font-light text-t2 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
