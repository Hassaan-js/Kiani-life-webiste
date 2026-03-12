import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "They took the time to explain every option and never pressured us. Found us a policy that saved $200/month compared to our old coverage.",
    name: "Maria R.",
    meta: "Life Insurance Client",
    badge: "Verified",
    initials: "MR",
  },
  {
    quote: "As a small business owner, finding the right health plan was overwhelming. Kiani simplified everything and got us enrolled in a week.",
    name: "David K.",
    meta: "Health Insurance Client",
    badge: "Verified",
    initials: "DK",
  },
  {
    quote: "The Medicare enrollment process was so confusing until I called Kiani. They compared plans side by side and helped me choose the best one.",
    name: "Patricia H.",
    meta: "Medicare Client",
    badge: "Google Review",
    initials: "PH",
  },
  {
    quote: "I never thought I could afford life insurance. They found me a term policy for less than my streaming subscriptions. Incredible service.",
    name: "James T.",
    meta: "Life Insurance Client",
    badge: "Verified",
    initials: "JT",
  },
  {
    quote: "The IUL strategy they designed for my retirement changed everything. Tax-free income and a death benefit — it's like having a safety net and a growth plan in one.",
    name: "Sandra L.",
    meta: "Retirement Planning Client",
    badge: "Google Review",
    initials: "SL",
  },
  {
    quote: "Professional, knowledgeable, and genuinely caring. They follow up regularly to make sure our coverage still fits our needs. Rare to find.",
    name: "Robert M.",
    meta: "Multi-Policy Client",
    badge: "Verified",
    initials: "RM",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="bg-ink py-24 sm:py-32">
    <div className="wrap">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow block mb-3.5">Client Stories</span>
        <h2 className="d2 text-t1">Trusted by <span className="gold-italic">Florida Families</span></h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--border))]">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-ink p-8 sm:p-10 flex flex-col transition-colors duration-350 hover:bg-panel"
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
              <div className="w-[42px] h-[42px] border border-gold-line flex items-center justify-center font-serif text-base font-bold text-gold flex-shrink-0 bg-gold-lo">
                {t.initials}
              </div>
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
