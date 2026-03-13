import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const partners = [
  {
    name: "Kiani Life & Health",
    desc: "Full-service insurance agency specializing in mortgage protection and life insurance.",
    url: "#",
    initials: "KLH",
  },
  {
    name: "RevUp",
    desc: "Technology-driven sales enablement and lead generation platform.",
    url: "#",
    initials: "RU",
  },
  {
    name: "Orca BPO",
    desc: "Business process outsourcing solutions for insurance and financial services.",
    url: "#",
    initials: "OB",
  },
];

const Partners = () => (
  <section id="partners" className="bg-deep py-24 sm:py-32">
    <div className="wrap">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow block mb-3.5">Our Ecosystem</span>
        <h2 className="d2 text-t1">Built on <span className="gold-italic">Strong Partnerships</span></h2>
        <p className="text-base font-light text-t2 leading-relaxed max-w-[520px] mx-auto mt-4">
          Kiani Life & Health is part of a powerful ecosystem of companies working together to support your success.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[hsl(var(--border))]">
        {partners.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target={p.url !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="bg-deep p-8 sm:p-10 text-center group hover:bg-panel transition-colors duration-350 flex flex-col items-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-[72px] h-[72px] border border-subtle flex items-center justify-center font-serif text-[24px] font-bold text-gold mb-5 group-hover:border-gold-line transition-colors bg-gold-lo">
              {p.initials}
            </div>
            <h3 className="font-serif text-[19px] font-bold text-t1 mb-2 flex items-center gap-2">
              {p.name}
              <ExternalLink className="w-3.5 h-3.5 text-t3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="text-sm font-light text-t2 leading-relaxed">{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;
