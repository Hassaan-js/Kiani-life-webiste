import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const tiers = [
  { level: "New Agent", timeline: "Month 1–3", income: "$5K–$10K/mo", desc: "Learning the system, closing your first deals, building confidence.", color: "text-t2" },
  { level: "Agent", timeline: "Month 3–6", income: "~$30K/mo", desc: "Consistent closings, refining your pitch, scaling production.", color: "text-t1" },
  { level: "Top Producer", timeline: "Month 6+", income: "$30K–$100K/mo", desc: "High-volume closer, building a personal brand, leadership track.", color: "text-gold" },
  { level: "Team Leader", timeline: "Year 1+", income: "$100K+/mo", desc: "Running your own team, earning overrides, scaling your agency.", color: "text-gold-hi" },
];

const Earnings = () => (
  <section id="earnings" className="bg-deep py-24 sm:py-32">
    <div className="wrap">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow block mb-3.5">Earning Potential</span>
          <h2 className="d2 text-t1 mb-4">Your Income Has <span className="gold-italic">No Ceiling</span></h2>
          <p className="text-base font-light text-t2 leading-relaxed mb-6">
            This isn't a salaried position with annual raises. This is a performance-based career where the top earners in their 20s out-earn doctors, lawyers, and engineers — with no student debt.
          </p>
          <p className="text-base font-light text-t2 leading-relaxed mb-8">
            Our compensation structure rewards effort from day one. Weekly pay, fast advances, and production bonuses mean you don't wait months to see results.
          </p>

          <div className="flex items-start gap-5 p-6 border border-subtle bg-panel mb-4">
            <div className="text-[40px] font-serif font-bold text-gold leading-none">$</div>
            <div>
              <div className="text-[15px] font-semibold text-t1 mb-1">Average First Year Agent Potential</div>
              <div className="font-serif text-[28px] font-bold text-gold leading-none mb-2">$90,000+</div>
              <div className="text-[11px] text-t3 leading-relaxed">*Based on full-time agents who completed training. Individual results vary.</div>
            </div>
          </div>

          <div className="flex items-start gap-5 p-6 border border-subtle bg-panel mb-8">
            <div className="text-[40px] font-serif font-bold text-gold leading-none">↑</div>
            <div>
              <div className="text-[15px] font-semibold text-t1 mb-1">Annual Income Potential</div>
              <div className="font-serif text-[28px] font-bold text-gold leading-none mb-2">$200,000 – $500,000+</div>
              <div className="text-[11px] text-t3 leading-relaxed">*Top producers and team leaders. Results depend on effort and performance.</div>
            </div>
          </div>

          <a
            href="https://calendly.com/kiani-life-and-health/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-9 py-[15px] bg-gold text-primary-foreground text-[13px] font-semibold tracking-[0.08em] uppercase overflow-hidden"
          >
            <span className="relative z-10">See If You Qualify</span>
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
            <div className="p-5 border-b border-subtle bg-[rgba(255,255,255,0.02)]">
              <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-gold">Income Growth Path</span>
            </div>
            {tiers.map((tier) => (
              <div key={tier.level} className="p-5 border-b border-[hsl(var(--input))] last:border-b-0 hover:bg-panel transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif text-[17px] font-bold text-t1">{tier.level}</span>
                  <span className={`font-serif text-[20px] font-bold ${tier.color}`}>{tier.income}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.1em] text-t3 uppercase">{tier.timeline}</span>
                  <span className="text-[13px] text-t2 font-light">{tier.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-t3 mt-3.5 leading-relaxed tracking-wide">
            * Income examples are illustrative. Actual earnings depend on individual effort, skill, and market conditions.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Earnings;
