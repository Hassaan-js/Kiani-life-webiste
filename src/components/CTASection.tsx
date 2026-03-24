import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="bg-gold py-24 sm:py-28 relative overflow-hidden">
    <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, rgba(7,9,15,0.04) 0, rgba(7,9,15,0.04) 1px, transparent 1px, transparent 12px)' }} />
    <div className="wrap relative z-10">
      <motion.div
        className="text-center max-w-[700px] mx-auto"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="d2 text-primary-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
          Stop Trading Time <em className="font-normal italic">for Money.</em>
        </h2>
        <p className="text-base font-light text-[rgba(7,9,15,0.6)] leading-relaxed mb-8">
          The average American earns $4M in their lifetime. Our top agents are on pace to double that — in half the time. The only question is: are you ready?
        </p>

        <div className="flex flex-col sm:flex-row gap-3.5 items-center justify-center">
          <a
            href="https://calendly.com/kiani-life-and-health/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-10 py-[18px] bg-ink text-gold text-[13px] font-semibold tracking-[0.1em] uppercase overflow-hidden whitespace-nowrap"
          >
            <span className="relative z-10">Book My Discovery Call</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-deep -translate-x-full transition-transform duration-400 group-hover:translate-x-0" />
          </a>
          <a href="tel:8442983473" className="text-xs font-medium tracking-[0.08em] text-[rgba(7,9,15,0.5)] hover:text-[rgba(7,9,15,0.85)] transition-colors">
            or call 844.298.3473
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
