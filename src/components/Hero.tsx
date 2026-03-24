import { motion } from "framer-motion";
import { ArrowRight, Calendar, Check } from "lucide-react";
import heroImg from "@/assets/hero-team.jpg";

const bullets = [
  "No experience needed",
  "Uncapped commissions",
  "World-class training",
  "Build your own team",
  "Write your own paycheck",
];

const stats = [
  { num: "$15K–$60K+", label: "Monthly Potential" },
  { num: "100%", label: "Commission-Based" },
  { num: "15+", label: "Top Carriers" },
  { num: "0", label: "Experience Required" },
];

const Hero = () => (
  <section className="min-h-screen flex items-center bg-ink relative overflow-hidden pt-[120px] pb-20">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Kiani team" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--ink))] via-[hsl(var(--ink)/0.85)] to-[hsl(var(--ink)/0.6)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--ink))] via-transparent to-[hsl(var(--ink)/0.4)]" />
    </div>

    <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 w-full">
      <motion.div
        className="max-w-[720px]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center gap-3.5 mb-7">
          <div className="w-10 h-px bg-gradient-to-r from-transparent to-[hsl(var(--gold))]" />
          <span className="eyebrow">Now Recruiting · Florida & Nationwide</span>
        </div>

        <h1 className="d1 text-t1 mb-6">
          Your 9–5 Won't<br />
          <span className="gold-italic">Build Your Empire.</span>
        </h1>

        <p className="text-lg font-light leading-relaxed text-t2 max-w-[560px] mb-8">
          Join Kiani Life & Health and launch your career in insurance sales.
        </p>

        <div className="flex flex-col gap-2.5 mb-10">
          {bullets.map((b) => (
            <div key={b} className="flex items-center gap-3 text-[15px] text-t2 font-light">
              <div className="w-5 h-5 border border-gold-line flex items-center justify-center flex-shrink-0 text-gold">
                <Check className="w-3 h-3" />
              </div>
              {b}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 flex-wrap mb-16">
          <a
            href="https://calendly.com/kiani-life-and-health/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-10 py-[18px] bg-gold text-primary-foreground text-[13px] font-semibold tracking-[0.08em] uppercase overflow-hidden"
          >
            <Calendar className="relative z-10 w-4 h-4" />
            <span className="relative z-10">Book a Discovery Call with Moiz Kiani</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-[hsl(var(--gold-hi))] -translate-x-full transition-transform duration-400 group-hover:translate-x-0" />
          </a>
          <a
            href="#earnings"
            className="inline-flex items-center gap-2.5 px-9 py-[15px] border border-subtle text-t2 text-[13px] font-semibold tracking-[0.08em] uppercase hover:border-gold-line hover:text-t1 transition-all"
          >
            See the Numbers
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 border-t border-subtle pt-10">
          {stats.map((s, i) => (
            <div key={s.label} className={`sm:pr-7 ${i < 3 ? "sm:border-r sm:border-subtle" : ""} ${i > 0 ? "sm:pl-7" : ""}`}>
              <div className="font-serif text-[26px] sm:text-[30px] font-bold text-t1 leading-none mb-1 tabular-nums">{s.num}</div>
              <div className="text-[11px] font-medium tracking-[0.1em] text-t3 uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
