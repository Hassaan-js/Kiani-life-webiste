import { motion } from "framer-motion";
import { DollarSign, GraduationCap, Clock, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const perks = [
  {
    icon: DollarSign,
    title: "Uncapped Commissions",
    desc: "No salary cap, no ceiling. Top performers earn $10K–$15K+/month within their first year. Your income grows as fast as you do.",
    highlight: "$10K–$15K+/mo",
    href: "/commissions",
  },
  {
    icon: GraduationCap,
    title: "Elite Training System",
    desc: "Step-by-step sales training, scripts, role-plays, and mentorship from 7-figure earners. We don't just hire you — we build you.",
    highlight: "Day-1 Ready",
    href: "/training",
  },
  {
    icon: Clock,
    title: "Total Flexibility",
    desc: "Set your own schedule. Work from home, the office, or anywhere. No territories, no mandatory hours. You're the boss.",
    highlight: "Your Schedule",
    href: null,
  },
  {
    icon: TrendingUp,
    title: "Career Growth Path",
    desc: "Go from agent to team leader to agency owner. Build your own organization and earn overrides on your team's production.",
    highlight: "Agent → Owner",
    href: "/career-growth",
  },
  {
    icon: Users,
    title: "Warm Lead System",
    desc: "No cold calling. We provide exclusive mortgage protection leads — homeowners who already need coverage. You just show up and close.",
    highlight: "Pre-Set Leads",
    href: "/leads",
  },
  {
    icon: Zap,
    title: "Fast-Track Bonuses",
    desc: "Production bonuses, trip incentives, and rapid promotion contests. Get rewarded for every milestone, not just the big ones.",
    highlight: "Bonus Trips",
    href: "/bonuses",
  },
];

const WhyKiani = () => (
  <section id="why" className="bg-ink py-24 sm:py-32">
    <div className="wrap">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow block mb-3.5">Why Join Kiani</span>
        <h2 className="d2 text-t1 mb-4">Everything You Need to <span className="gold-italic">Win Big</span></h2>
        <p className="text-base font-light text-t2 leading-relaxed max-w-[520px]">
          We built the system. You bring the ambition. No degree required, no experience needed — just the drive to build something real.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--border))]">
        {perks.map((perk, i) => {
          const content = (
            <>
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 border border-subtle flex items-center justify-center text-gold group-hover:border-gold-line transition-colors">
                  <perk.icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-gold uppercase">{perk.highlight}</span>
              </div>
              <h3 className="font-serif text-[21px] font-bold text-t1 mb-3 leading-tight">{perk.title}</h3>
              <p className="text-sm font-light leading-relaxed text-t2 mb-4">{perk.desc}</p>
              {perk.href && (
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.08em] text-gold uppercase mt-auto">
                  Learn More <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              )}
            </>
          );

          const className = "bg-ink p-8 sm:p-10 relative overflow-hidden group transition-colors duration-350 hover:bg-panel flex flex-col";

          return perk.href ? (
            <motion.div key={perk.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <Link to={perk.href} className={`${className} block h-full`}>
                {content}
              </Link>
            </motion.div>
          ) : (
            <motion.div key={perk.title} className={className} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.08 }}>
              {content}
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyKiani;
