import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Target, Users, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: Target, title: "Exclusive Mortgage Protection Leads", desc: "Homeowners who have recently purchased a home and need coverage. These are warm, qualified prospects — not cold calls." },
  { icon: Users, title: "Pre-Set Appointments", desc: "Many of our leads come with scheduled appointments. You focus on presenting and closing — we handle the prospecting." },
  { icon: TrendingUp, title: "Consistent Lead Flow", desc: "Our lead system ensures you always have prospects to work with. No dry spells, no scrambling for business." },
];

const LeadsPage = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-ink pt-[120px] pb-24">
      <div className="wrap">
        <Link to="/#why" className="inline-flex items-center gap-2 text-[13px] font-medium text-t3 hover:text-gold transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[720px] mb-16">
          <span className="eyebrow block mb-3.5">Lead System</span>
          <h1 className="d2 text-t1 mb-6">Warm Leads, <span className="gold-italic">Real Appointments</span></h1>
          <p className="text-base font-light text-t2 leading-relaxed">
            No cold calling. No door-to-door. We provide you with exclusive, qualified leads so you can focus on what matters — helping families and earning commissions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[hsl(var(--border))] mb-14">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-ink p-8 sm:p-10 hover:bg-panel transition-colors"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 border border-subtle flex items-center justify-center text-gold mb-6">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-[18px] font-bold text-t1 mb-3">{f.title}</h3>
              <p className="text-sm font-light text-t2 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <a href="https://calendly.com/kiani-life-and-health/30min" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-2.5 px-10 py-[16px] bg-gold text-primary-foreground text-[13px] font-semibold tracking-[0.08em] uppercase overflow-hidden">
          <span className="relative z-10">Get Access to Leads</span>
          <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          <span className="absolute inset-0 bg-[hsl(var(--gold-hi))] -translate-x-full transition-transform duration-400 group-hover:translate-x-0" />
        </a>
      </div>
    </main>
    <Footer />
  </>
);

export default LeadsPage;
