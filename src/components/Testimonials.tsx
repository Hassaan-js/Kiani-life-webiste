import { motion } from "framer-motion";
import { Star } from "lucide-react";
import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";

const testimonials = [
  {
    quote: "I was working retail making $14/hour. Three months into Kiani, I made $8,200 in a single month. I wish I'd found this sooner.",
    name: "Jasmine R.",
    meta: "Agent · 8 months",
    badge: "Top Producer",
    initials: "JR",
    image: agent1,
  },
  {
    quote: "The training is world-class. They don't just give you a script — they teach you how to actually help families. The money follows naturally.",
    name: "Marcus T.",
    meta: "Team Leader · 2 years",
    badge: "6 Figures",
    initials: "MT",
    image: agent2,
  },
  {
    quote: "I dropped out of college because I was already making more than my professors. No cap on earnings, real mentorship, and I set my own hours.",
    name: "Dylan P.",
    meta: "Agent · 14 months",
    badge: "Rising Star",
    initials: "DP",
  },
  {
    quote: "As a single mom, flexibility was everything. I work while my kids are at school and earn more than my corporate job ever paid.",
    name: "Aisha K.",
    meta: "Agent · 11 months",
    badge: "Verified",
    initials: "AK",
  },
  {
    quote: "I went from delivering pizzas to running a team of 6 agents in under two years. Kiani gave me the blueprint — I just followed it.",
    name: "Carlos M.",
    meta: "Team Leader · 22 months",
    badge: "Leader",
    initials: "CM",
  },
  {
    quote: "The lead system is what sold me. No cold calling, no begging friends and family. Real leads, real appointments, real money.",
    name: "Taylor S.",
    meta: "Agent · 6 months",
    badge: "Verified",
    initials: "TS",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="bg-deep py-24 sm:py-32">
    <div className="wrap">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow block mb-3.5">Success Stories</span>
        <h2 className="d2 text-t1">Real People, <span className="gold-italic">Real Results</span></h2>
        <p className="text-base font-light text-t2 leading-relaxed max-w-[520px] mt-4">
          Don't take our word for it. Hear from agents who started exactly where you are now.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--border))]">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-deep p-8 sm:p-10 flex flex-col transition-colors duration-350 hover:bg-panel"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="flex items-center gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-4 h-4 text-gold fill-[hsl(var(--gold))]" />
              ))}
            </div>
            <p className="font-serif text-base font-normal italic leading-relaxed text-t2 flex-1 mb-7">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3.5 pt-5 border-t border-subtle">
              {t.image ? (
                <img src={t.image} alt={t.name} className="w-[42px] h-[42px] object-cover border border-gold-line flex-shrink-0" />
              ) : (
                <div className="w-[42px] h-[42px] border border-gold-line flex items-center justify-center font-serif text-base font-bold text-gold flex-shrink-0 bg-gold-lo">
                  {t.initials}
                </div>
              )}
              <div className="flex-1">
                <span className="block text-sm font-semibold text-t1 mb-0.5">{t.name}</span>
                <span className="text-[11px] text-t3 tracking-[0.04em]">{t.meta}</span>
              </div>
              <span className="px-2.5 py-1 border border-gold-line text-[10px] font-semibold tracking-[0.1em] text-gold uppercase whitespace-nowrap">
                {t.badge}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
