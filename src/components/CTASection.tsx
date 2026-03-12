import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="bg-gold py-24 sm:py-28 relative overflow-hidden">
    <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, rgba(7,9,15,0.04) 0, rgba(7,9,15,0.04) 1px, transparent 1px, transparent 12px)' }} />
    <div className="wrap relative z-10">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center lg:text-left">
          <h2 className="d2 text-primary-foreground" style={{ letterSpacing: '-0.02em' }}>
            Ready to Protect <em className="font-normal italic">What Matters?</em>
          </h2>
          <p className="text-base font-light text-[rgba(7,9,15,0.6)] leading-relaxed mt-3.5">
            Get a free, no-obligation quote from a licensed Florida insurance advisor. We'll compare options across 15+ carriers to find your perfect fit.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 items-center flex-shrink-0">
          <a
            href="#quote"
            className="group relative inline-flex items-center gap-2.5 px-10 py-[18px] bg-ink text-gold text-[13px] font-semibold tracking-[0.1em] uppercase overflow-hidden whitespace-nowrap"
          >
            <span className="relative z-10">Get My Free Quote</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-deep -translate-x-full transition-transform duration-400 group-hover:translate-x-0" />
          </a>
          <a
            href="tel:8442983473"
            className="text-xs font-medium tracking-[0.08em] text-[rgba(7,9,15,0.5)] hover:text-[rgba(7,9,15,0.85)] transition-colors"
          >
            or call 844.298.3473
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
