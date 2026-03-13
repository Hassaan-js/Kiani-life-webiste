import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Moiz Kiani",
    title: "CEO — Kiani Life & Health",
    subtitle: "Co-Founder — RevUp · Co-Founder — Orca BPO",
    bio: "Moiz built Kiani Life & Health from the ground up, producing over $40,000 in issue-paid premiums in a single month. He's passionate about mentoring new agents and proving that anyone with drive can build a six-figure career in insurance.",
    initials: "MK",
  },
];

const MeetTheTeam = () => (
  <section id="team" className="bg-ink py-24 sm:py-32">
    <div className="wrap">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow block mb-3.5">Leadership</span>
        <h2 className="d2 text-t1">Meet <span className="gold-italic">the Team</span></h2>
        <p className="text-base font-light text-t2 leading-relaxed max-w-[520px] mx-auto mt-4">
          Led by people who've done the work — and are still doing it.
        </p>
      </motion.div>

      <div className="max-w-[600px] mx-auto">
        {team.map((member) => (
          <motion.div
            key={member.name}
            className="bg-panel border border-subtle p-8 sm:p-12 text-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-[100px] h-[100px] border-2 border-gold mx-auto mb-6 flex items-center justify-center font-serif text-[36px] font-bold text-gold bg-gold-lo">
              {member.initials}
            </div>
            <h3 className="font-serif text-[24px] font-bold text-t1 mb-1">{member.name}</h3>
            <p className="text-[13px] font-semibold text-gold tracking-[0.06em] mb-1">{member.title}</p>
            <p className="text-[12px] text-t3 tracking-[0.04em] mb-6">{member.subtitle}</p>
            <p className="text-sm font-light text-t2 leading-relaxed max-w-[460px] mx-auto">
              {member.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MeetTheTeam;
