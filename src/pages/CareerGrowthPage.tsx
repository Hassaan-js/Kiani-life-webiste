import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const levels = [
  { title: "Agent", desc: "Start closing deals, building confidence, and earning commissions from day one. You'll have warm leads, scripts, and a mentor guiding you.", income: "$5K–$10K/mo" },
  { title: "Senior Agent", desc: "Consistent production, refined sales skills, and a growing client base. You're now a proven closer and starting to think about leadership.", income: "~$30K/mo" },
  { title: "Team Leader", desc: "Recruit and train your own team. Earn overrides on their production while continuing to close your own deals.", income: "$100K+/mo" },
  { title: "Agency Owner", desc: "Build your own organization within the Kiani ecosystem. Full autonomy, multiple income streams, and a legacy business.", income: "Unlimited" },
];

const CareerGrowthPage = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-ink pt-[120px] pb-24">
      <div className="wrap">
        <Link to="/#why" className="inline-flex items-center gap-2 text-[13px] font-medium text-t3 hover:text-gold transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[720px] mb-16">
          <span className="eyebrow block mb-3.5">Career Path</span>
          <h1 className="d2 text-t1 mb-6">Your Path from Agent to <span className="gold-italic">Agency Owner</span></h1>
          <p className="text-base font-light text-t2 leading-relaxed">
            This isn't a job — it's a career with a clear trajectory. Every level unlocks higher income, more autonomy, and greater impact.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-[32px] top-0 bottom-0 w-px bg-gradient-to-b from-[hsl(var(--border))] via-[hsl(var(--gold))] to-[hsl(var(--border))]" />
          <div className="flex flex-col gap-8">
            {levels.map((l, i) => (
              <motion.div
                key={l.title}
                className="md:pl-20 relative group"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="hidden md:flex absolute left-[17px] top-6 w-[30px] h-[30px] border border-subtle bg-ink items-center justify-center font-serif text-sm font-bold text-t3 group-hover:border-gold group-hover:text-gold transition-colors z-10">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="bg-panel border border-subtle p-8 hover:border-gold-line transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-[20px] font-bold text-t1">{l.title}</h3>
                    <span className="font-serif text-[20px] font-bold text-gold">{l.income}</span>
                  </div>
                  <p className="text-sm font-light text-t2 leading-relaxed">{l.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <a href="/#apply" className="group relative inline-flex items-center gap-2.5 px-10 py-[16px] bg-gold text-primary-foreground text-[13px] font-semibold tracking-[0.08em] uppercase overflow-hidden">
            <span className="relative z-10">Start Your Journey</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-[hsl(var(--gold-hi))] -translate-x-full transition-transform duration-400 group-hover:translate-x-0" />
          </a>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default CareerGrowthPage;
