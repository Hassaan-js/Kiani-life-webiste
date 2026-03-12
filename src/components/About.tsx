import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const values = [
  { n: "01", title: "Client-First Philosophy", desc: "Your needs come first. We never push products — we recommend solutions." },
  { n: "02", title: "Unbiased Guidance", desc: "Independent agents, not captive. We compare across 15+ carriers." },
  { n: "03", title: "Transparent Process", desc: "No hidden fees, no fine-print surprises. Just honest advice." },
];

const About = () => (
  <section id="about" className="bg-ink py-24 sm:py-32">
    <div className="wrap">
      <div className="grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-16 lg:gap-24 items-center">
        {/* Image placeholder */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[3/4] bg-panel border border-subtle flex items-center justify-center relative overflow-hidden">
            <div className="flex flex-col items-center gap-3 text-t3">
              <Shield className="w-12 h-12 opacity-25" />
              <span className="text-xs font-medium tracking-[0.1em] uppercase opacity-40">Professional Photo</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(var(--ink))] opacity-70" />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-px -right-px bg-gold p-5 min-w-[180px]">
            <div className="font-serif text-4xl font-bold text-primary-foreground leading-none mb-1">10+</div>
            <div className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[rgba(7,9,15,0.6)]">Years of Service</div>
          </div>
          <div className="absolute -top-px -left-px bg-panel border border-subtle p-3.5 min-w-[160px]">
            <div className="text-[11px] font-semibold tracking-[0.12em] text-t3 uppercase mb-0.5">Licensed In</div>
            <div className="font-serif text-lg font-bold text-t1">Florida</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow block mb-3.5">Who We Are</span>
          <h2 className="d2 text-t1 mb-2">Your Trusted <span className="gold-italic">Local Advisor</span></h2>
          <p className="text-base font-light text-t2 leading-relaxed mb-4">
            Kiani Life & Health is a licensed, independent insurance agency based in Deltona, Florida. We serve families across the state with honest, unbiased guidance — helping you navigate coverage options without the pressure.
          </p>
          <p className="text-base font-light text-t2 leading-relaxed">
            As independent agents, we're not tied to any single carrier. That means we shop across 15+ top-rated insurance companies to find you the best coverage at the best price.
          </p>

          <div className="mt-9 border-t border-subtle">
            {values.map((v) => (
              <div key={v.n} className="flex items-start gap-4 py-5 border-b border-subtle">
                <span className="text-[10px] font-semibold tracking-[0.12em] text-gold pt-1 flex-shrink-0">{v.n}</span>
                <div>
                  <strong className="block text-[15px] font-semibold text-t1 mb-1">{v.title}</strong>
                  <span className="text-[13px] text-t2 font-light leading-relaxed">{v.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#quote"
            className="group relative inline-flex items-center gap-2.5 mt-8 px-9 py-[15px] bg-gold text-primary-foreground text-[13px] font-semibold tracking-[0.08em] uppercase overflow-hidden"
          >
            <span className="relative z-10">Schedule a Consultation</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-[hsl(var(--gold-hi))] -translate-x-full transition-transform duration-400 group-hover:translate-x-0" />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

// Need the Shield import for placeholder
import { Shield } from "lucide-react";

export default About;
