import { motion } from "framer-motion";
import { Shield, Heart, Users, TrendingUp, Umbrella, ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Shield,
    title: "Life Insurance",
    desc: "Protect your family's financial future with a policy built around your life — not a one-size-fits-all template.",
    items: ["Term Life Insurance", "Whole Life Insurance", "Indexed Universal Life (IUL)", "Final Expense Coverage"],
    cta: "Get a quote",
  },
  {
    num: "02",
    icon: Heart,
    title: "Health Insurance",
    desc: "Individual, family, and small business health plans — including ACA Marketplace options with potential subsidies.",
    items: ["ACA Marketplace Plans", "Private Health Coverage", "Small Business Group Plans", "Dental & Vision Add-ons"],
    cta: "See what you qualify for",
  },
  {
    num: "03",
    icon: Users,
    title: "Medicare Plans",
    desc: "Navigate Medicare with confidence. We compare Advantage, Supplement, and Part D plans from top carriers.",
    items: ["Medicare Advantage (Part C)", "Medicare Supplement (Medigap)", "Prescription Drug Plans (Part D)", "Annual Enrollment Help"],
    cta: "Compare plans",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Retirement Planning",
    desc: "Build wealth and protect your retirement with indexed universal life and strategic financial planning.",
    items: ["IUL Strategies", "Tax-Free Retirement Income", "Wealth Transfer Planning", "Legacy Protection"],
    cta: "Explore options",
  },
  {
    num: "05",
    icon: Umbrella,
    title: "Supplemental Coverage",
    desc: "Fill the gaps in your primary coverage with supplemental plans that protect against unexpected costs.",
    items: ["Accident Insurance", "Critical Illness Coverage", "Hospital Indemnity", "Disability Income"],
    cta: "Learn more",
  },
];

const Services = () => (
  <section id="services" className="bg-ink py-24 sm:py-32">
    <div className="wrap">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow block mb-3.5">Our Coverage Solutions</span>
        <h2 className="d2 text-t1 mb-4">Everything Your Family Needs,<br /><span className="gold-italic">Under One Roof</span></h2>
        <p className="text-base font-light text-t2 leading-relaxed max-w-[520px]">
          From your first life policy to Medicare enrollment and retirement planning — we match you with the right coverage at the right price across 15+ carriers.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--border))]">
        {services.map((svc, i) => (
          <motion.div
            key={svc.num}
            className="bg-ink p-8 sm:p-10 relative overflow-hidden group transition-colors duration-350 hover:bg-panel"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <span className="text-[10px] font-semibold tracking-[0.2em] text-t3 uppercase block mb-7">{svc.num} · {svc.title}</span>
            <div className="w-12 h-12 border border-subtle flex items-center justify-center mb-6 text-gold group-hover:border-gold-line transition-colors">
              <svc.icon className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-[21px] font-bold text-t1 mb-3 leading-tight">{svc.title}</h3>
            <p className="text-sm font-light leading-relaxed text-t2 mb-6">{svc.desc}</p>
            <div className="flex flex-col gap-2.5 mb-7">
              {svc.items.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-[13px] text-t2 font-light">
                  <span className="w-4 h-px bg-gold flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <a href="#quote" className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-gold group/cta hover:gap-3.5 transition-all">
              {svc.cta} <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
