import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Do I need experience to get started?",
    a: "Not at all. Most of our top earners had zero sales or insurance experience before joining. We provide a complete training system that takes you from beginner to confident closer.",
  },
  {
    q: "How much does it cost to get started?",
    a: "You'll need to get your state insurance license (study materials are provided). The licensing exam fee varies by state but is typically $50–$150. There are no franchise fees, desk fees, or startup costs with Kiani.",
  },
  {
    q: "Is this a W-2 job or 1099?",
    a: "This is a 1099 independent contractor position. You're building your own business with the full support of our agency. That means you control your schedule, your income, and your growth.",
  },
  {
    q: "What kind of leads do you provide?",
    a: "We provide exclusive mortgage protection leads — homeowners who have recently purchased a home and need coverage. These are warm leads, not cold calls.",
  },
  {
    q: "How soon can I start earning?",
    a: "Many new agents begin earning attractive paychecks within their first month. Commissions are paid weekly via direct deposit.",
  },
  {
    q: "Can I do this part-time?",
    a: "Yes, many agents start part-time while keeping their current job. However, our highest earners treat this as a full-time career. We'll work with your schedule either way.",
  },
  {
    q: "What's the career path?",
    a: "Agent → Senior Agent → Team Leader → Agency Owner. As you grow, you can recruit and train your own team, earning overrides on their production. Several of our leaders built six-figure agencies within 2 years.",
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-panel py-24 sm:py-32">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow block mb-3.5">FAQ</span>
            <h2 className="d3 text-t1 mb-5">Got Questions? <span className="gold-italic">We've Got Answers</span></h2>
            <p className="text-[15px] font-light text-t2 leading-relaxed mb-9">
              We know you're evaluating your options. Here are the most common questions from people just like you who are considering a career with Kiani.
            </p>
            <a
              href="/#apply"
              className="group relative inline-flex items-center gap-2.5 px-9 py-[15px] bg-gold text-primary-foreground text-[13px] font-semibold tracking-[0.08em] uppercase overflow-hidden"
            >
              <span className="relative z-10">Still Curious? Book a Call</span>
              <span className="absolute inset-0 bg-[hsl(var(--gold-hi))] -translate-x-full transition-transform duration-400 group-hover:translate-x-0" />
            </a>
          </motion.div>

          <div className="border-t border-subtle">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-subtle">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between gap-5 py-5 text-left text-[15px] font-medium transition-colors duration-300 hover:text-t1"
                  style={{ color: openIdx === i ? 'hsl(var(--t1))' : 'hsl(var(--t2))' }}
                >
                  {faq.q}
                  <div className={`w-[26px] h-[26px] border flex items-center justify-center flex-shrink-0 transition-all duration-400 ${openIdx === i ? "border-gold text-gold rotate-45" : "border-subtle text-t3"}`}>
                    <Plus className="w-4 h-4" />
                  </div>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: openIdx === i ? "280px" : "0", transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
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
