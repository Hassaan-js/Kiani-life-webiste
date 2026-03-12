import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Book a Call", desc: "Schedule a quick 15-minute discovery call. We'll learn about your goals and see if you're a fit." },
  { num: "02", title: "Get Licensed", desc: "We guide you through getting your insurance license — study materials, exam prep, and support included." },
  { num: "03", title: "Complete Training", desc: "Our intensive training program teaches you scripts, objection handling, and real-world selling skills." },
  { num: "04", title: "Start Earning", desc: "Hit the field with warm leads, a mentor by your side, and a clear path to your first commission check." },
];

const Process = () => (
  <section id="process" className="bg-ink py-24 sm:py-32">
    <div className="wrap">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow block mb-3.5">How It Works</span>
        <h2 className="d2 text-t1">From Zero to <span className="gold-italic">Closing Deals</span></h2>
        <p className="text-base font-light text-t2 leading-relaxed max-w-[520px] mx-auto mt-4">
          We take you from "I've never sold anything" to confidently closing deals — in weeks, not years.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 relative">
        <div className="hidden lg:block absolute top-[43px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[hsl(var(--border))] via-[hsl(var(--gold))] to-[hsl(var(--border))]" />

        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            className="flex flex-col items-center text-center px-6 relative group"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-[86px] h-[86px] border border-subtle bg-ink flex items-center justify-center mb-6 font-serif text-[28px] font-bold text-t3 relative z-10 transition-all duration-400 group-hover:border-gold group-hover:text-gold group-hover:shadow-[0_0_28px_rgba(184,150,62,0.15)]">
              {s.num}
            </div>
            <h3 className="font-serif text-[17px] font-bold text-t1 mb-2.5">{s.title}</h3>
            <p className="text-[13px] font-light text-t2 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
