import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Trophy, Plane, Gift } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bonuses = [
  { icon: Trophy, title: "Production Bonuses", desc: "Hit milestones and earn cash bonuses on top of your commissions. Every deal counts toward your next bonus tier." },
  { icon: Plane, title: "Incentive Trips", desc: "Top producers earn all-expenses-paid trips to destinations worldwide. Compete with your peers and get rewarded with unforgettable experiences." },
  { icon: Gift, title: "Rapid Promotion Contests", desc: "Fast-track your career with promotion contests. Move up the ranks faster and earn leadership bonuses for building your team." },
];

const BonusesPage = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-ink pt-[120px] pb-24">
      <div className="wrap">
        <Link to="/#why" className="inline-flex items-center gap-2 text-[13px] font-medium text-t3 hover:text-gold transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[720px] mb-16">
          <span className="eyebrow block mb-3.5">Incentives</span>
          <h1 className="d2 text-t1 mb-6">Fast-Track <span className="gold-italic">Bonuses & Rewards</span></h1>
          <p className="text-base font-light text-t2 leading-relaxed">
            We don't just pay commissions — we celebrate performance. From cash bonuses to luxury trips, every milestone is rewarded.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[hsl(var(--border))] mb-14">
          {bonuses.map((b, i) => (
            <motion.div
              key={b.title}
              className="bg-ink p-8 sm:p-10 hover:bg-panel transition-colors"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 border border-subtle flex items-center justify-center text-gold mb-6">
                <b.icon className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-[18px] font-bold text-t1 mb-3">{b.title}</h3>
              <p className="text-sm font-light text-t2 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <a href="https://calendly.com/kiani-life-and-health/30min" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-2.5 px-10 py-[16px] bg-gold text-primary-foreground text-[13px] font-semibold tracking-[0.08em] uppercase overflow-hidden">
          <span className="relative z-10">Join & Start Earning Bonuses</span>
          <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          <span className="absolute inset-0 bg-[hsl(var(--gold-hi))] -translate-x-full transition-transform duration-400 group-hover:translate-x-0" />
        </a>
      </div>
    </main>
    <Footer />
  </>
);

export default BonusesPage;
