import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Tax-free growth and distributions",
  "Guaranteed minimum returns",
  "Access to cash value at any time",
  "Death benefit for your family",
  "Protection from market downturns",
];

const comparisons = [
  { traditional: "Market risk exposure", vs: "VS", kiani: "Downside protection with upside potential" },
  { traditional: "Taxed on withdrawals", vs: "VS", kiani: "Tax-free access to cash value" },
  { traditional: "Limited access to funds", vs: "VS", kiani: "Flexible loans against your policy" },
  { traditional: "No death benefit", vs: "VS", kiani: "Built-in legacy protection" },
];

const InfiniteBanking = () => (
  <section id="ib" className="bg-panel py-24 sm:py-32 relative overflow-hidden">
    <div className="wrap">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow block mb-3.5">Infinite Banking Concept</span>
          <h2 className="d2 text-t1 mb-2">Become Your Own <span className="gold-italic">Bank</span></h2>
          <p className="text-base font-light text-t2 leading-relaxed mb-3.5">
            The Infinite Banking Concept uses specially designed whole life insurance policies to create your own personal banking system — giving you control over your money and your future.
          </p>
          <p className="text-base font-light text-t2 leading-relaxed">
            Instead of paying interest to banks, you pay yourself — building wealth while maintaining insurance protection for your family.
          </p>

          <div className="flex flex-col gap-3.5 my-7">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3.5 text-sm text-t2 font-light">
                <div className="w-[30px] h-[30px] border border-gold-line flex items-center justify-center flex-shrink-0 text-gold">
                  <Check className="w-3.5 h-3.5" />
                </div>
                {b}
              </div>
            ))}
          </div>

          <a
            href="#quote"
            className="group relative inline-flex items-center gap-2.5 px-9 py-[15px] bg-gold text-primary-foreground text-[13px] font-semibold tracking-[0.08em] uppercase overflow-hidden"
          >
            <span className="relative z-10">Learn More</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-[hsl(var(--gold-hi))] -translate-x-full transition-transform duration-400 group-hover:translate-x-0" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="border border-subtle">
            <div className="grid grid-cols-[1fr_44px_1fr] border-b border-subtle bg-[rgba(255,255,255,0.02)]">
              <div className="p-3 text-center text-[10px] font-semibold tracking-[0.16em] uppercase text-t3">Traditional</div>
              <div className="p-3" />
              <div className="p-3 text-center text-[10px] font-semibold tracking-[0.16em] uppercase text-gold">Kiani IBC</div>
            </div>
            {comparisons.map((c, i) => (
              <div key={i} className="grid grid-cols-[1fr_44px_1fr] border-b border-[hsl(var(--input))] last:border-b-0">
                <div className="p-3.5 text-[13px] text-t3 text-center font-light border-r border-[hsl(var(--input))] leading-snug">{c.traditional}</div>
                <div className="p-3.5 flex items-center justify-center text-[10px] font-bold tracking-[0.1em] text-t3 border-r border-[hsl(var(--input))]">VS</div>
                <div className="p-3.5 text-[13px] text-gold-hi text-center font-medium leading-snug">{c.kiani}</div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-t3 mt-3.5 leading-relaxed tracking-wide">
            * Comparison is for illustrative purposes. Individual results may vary based on policy design and carrier.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default InfiniteBanking;
