import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import QuoteForm from "./QuoteForm";

const stats = [
  { num: "500+", label: "Families Protected" },
  { num: "15+", label: "Top-Rated Carriers" },
  { num: "4.9", label: "Google Rating" },
  { num: "$0", label: "Cost to You" },
];

const Hero = () => (
  <section className="min-h-screen flex items-center bg-ink relative overflow-hidden pt-[120px] pb-20">
    {/* Geometric bg */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 right-0 w-[55%] h-full border-l border-subtle bg-gradient-to-br from-transparent via-[hsl(228,35%,9%)] to-[hsl(225,39%,9%)]" />
      <div className="absolute top-[15%] right-[8%] w-[480px] h-[480px] rounded-full" style={{ background: 'radial-gradient(ellipse, hsl(46 52% 48% / 0.07) 0%, transparent 65%)' }} />
    </div>

    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-20 max-w-[1200px] mx-auto px-6 lg:px-12 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3.5 mb-7">
          <div className="w-10 h-px bg-gradient-to-r from-transparent to-[hsl(var(--gold))]" />
          <span className="eyebrow">Licensed Insurance Agency · Deltona, Florida</span>
        </div>

        <h1 className="d1 text-t1 mb-6">
          Protect What<br />
          <span className="gold-italic">Matters Most.</span>
        </h1>

        <p className="text-[17px] font-light leading-relaxed text-t2 max-w-[500px] mb-11">
          Life insurance, Medicare, health coverage, and retirement planning tailored for Florida families. Access to 15+ top-rated carriers with honest, unbiased guidance — at no cost to you.
        </p>

        <div className="flex items-center gap-4 flex-wrap mb-16">
          <a
            href="#quote"
            className="group relative inline-flex items-center gap-2.5 px-9 py-[18px] bg-gold text-primary-foreground text-[13px] font-semibold tracking-[0.08em] uppercase overflow-hidden"
          >
            <span className="relative z-10">Get My Free Coverage Review</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-[hsl(var(--gold-hi))] -translate-x-full transition-transform duration-400 group-hover:translate-x-0" />
          </a>
          <a
            href="tel:8442983473"
            className="inline-flex items-center gap-2.5 px-9 py-[15px] border border-subtle text-t2 text-[13px] font-semibold tracking-[0.08em] uppercase hover:border-gold-line hover:text-t1 transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call Us Free</span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 border-t border-subtle pt-10">
          {stats.map((s, i) => (
            <div key={s.label} className={`sm:pr-7 ${i < 3 ? "sm:border-r sm:border-subtle" : ""} ${i > 0 ? "sm:pl-7" : ""}`}>
              <div className="font-serif text-[30px] font-bold text-t1 leading-none mb-1 tabular-nums">{s.num}</div>
              <div className="text-[11px] font-medium tracking-[0.1em] text-t3 uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <QuoteForm />
      </motion.div>
    </div>
  </section>
);

export default Hero;
