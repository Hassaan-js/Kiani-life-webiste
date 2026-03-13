import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Play, FileText, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const curriculum = [
  { title: "Step-by-Step Onboarding", desc: "From getting licensed to your first appointment — we walk you through every step so nothing is left to guesswork." },
  { title: "Proven Sales Scripts", desc: "Battle-tested scripts that help you sound confident from day one. No reinventing the wheel — just follow the system." },
  { title: "Role-Play Training", desc: "Practice objection handling, closing techniques, and real-world scenarios with experienced mentors before you're in the field." },
  { title: "Mentorship from 7-Figure Earners", desc: "Learn directly from agents and leaders who have already built what you're trying to build. Real guidance, not theory." },
];

const weeklyProof = [
  {
    week: "Week 1",
    production: "$9,000",
    details: "First appointments, first closes. Recordings of actual sales calls available.",
  },
  {
    week: "Week 2",
    production: "$14,000",
    details: "Building momentum. Call recordings showing customer interactions and closes.",
  },
  {
    week: "Week 3",
    production: "$18,000+",
    details: "Scaling production. Full breakdown of premiums, commissions, and client payments.",
  },
];

const TrainingPage = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-ink pt-[120px] pb-24">
      <div className="wrap">
        <Link to="/#why" className="inline-flex items-center gap-2 text-[13px] font-medium text-t3 hover:text-gold transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[720px] mb-16"
        >
          <span className="eyebrow block mb-3.5">Training</span>
          <h1 className="d2 text-t1 mb-6">Elite <span className="gold-italic">Training System</span></h1>
          <p className="text-base font-light text-t2 leading-relaxed">
            We don't just hire you and hope for the best. Our training program is designed to take someone with zero experience and turn them into a confident, high-earning insurance professional.
          </p>
        </motion.div>

        {/* Curriculum */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[hsl(var(--border))] mb-20">
          {curriculum.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-ink p-8 sm:p-10 group hover:bg-panel transition-colors"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 border border-gold-line flex items-center justify-center text-gold font-serif text-sm font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-[18px] font-bold text-t1">{item.title}</h3>
              </div>
              <p className="text-sm font-light text-t2 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Proof Section */}
        <div id="proof">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <span className="eyebrow block mb-3.5">Real Results</span>
            <h2 className="d3 text-t1 mb-4">Proof, Not <span className="gold-italic">Promises</span></h2>
            <p className="text-base font-light text-t2 leading-relaxed max-w-[600px]">
              Last month Moiz produced <strong className="text-gold font-semibold">$40,000 issue paid</strong>. Here's what a real agent's first few weeks look like — with full transparency.
            </p>
          </motion.div>

          <div className="border border-subtle mb-10">
            <div className="p-5 border-b border-subtle bg-[rgba(255,255,255,0.02)]">
              <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-gold">Weekly Production Breakdown</span>
            </div>
            {weeklyProof.map((w, i) => (
              <motion.div
                key={w.week}
                className="p-6 border-b border-[hsl(var(--input))] last:border-b-0 hover:bg-panel transition-colors"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif text-[17px] font-bold text-t1">{w.week}</span>
                  <span className="font-serif text-[22px] font-bold text-gold">{w.production}</span>
                </div>
                <p className="text-[13px] font-light text-t2 leading-relaxed mb-4">{w.details}</p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-subtle text-[11px] font-medium text-t3 uppercase tracking-[0.08em]">
                    <Headphones className="w-3.5 h-3.5" /> Call Recordings
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-subtle text-[11px] font-medium text-t3 uppercase tracking-[0.08em]">
                    <FileText className="w-3.5 h-3.5" /> Scripts Used
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-subtle text-[11px] font-medium text-t3 uppercase tracking-[0.08em]">
                    <Play className="w-3.5 h-3.5" /> Commission Breakdown
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-panel border border-subtle p-6 sm:p-8 mb-10">
            <p className="text-sm font-light text-t2 leading-relaxed">
              <strong className="text-t1 font-semibold">Each recording shows:</strong> the customer payment, the annual premium, and the commission earned. Full transparency so you know exactly what to expect.
            </p>
          </div>

          <a
            href="/#apply"
            className="group relative inline-flex items-center gap-2.5 px-10 py-[16px] bg-gold text-primary-foreground text-[13px] font-semibold tracking-[0.08em] uppercase overflow-hidden"
          >
            <span className="relative z-10">Book a Call to Access Training</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-[hsl(var(--gold-hi))] -translate-x-full transition-transform duration-400 group-hover:translate-x-0" />
          </a>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default TrainingPage;
