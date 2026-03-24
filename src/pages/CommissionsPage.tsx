import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CommissionsPage = () => (
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
          className="max-w-[720px]"
        >
          <span className="eyebrow block mb-3.5">Compensation</span>
          <h1 className="d2 text-t1 mb-6">Uncapped <span className="gold-italic">Commissions</span></h1>
          <p className="text-base font-light text-t2 leading-relaxed mb-10">
            Our compensation structure is designed to reward performance from day one. No salary caps, no income limits — just a direct correlation between your effort and your earnings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-panel border border-subtle p-10 sm:p-14 text-center max-w-[600px]"
        >
          <div className="w-[64px] h-[64px] border border-gold mx-auto mb-6 flex items-center justify-center text-gold">
            <Lock className="w-7 h-7" />
          </div>
          <h2 className="font-serif text-[22px] font-bold text-t1 mb-3">Commission Grid — Protected</h2>
          <p className="text-sm font-light text-t2 leading-relaxed mb-8 max-w-[420px] mx-auto">
            The detailed commission grid and compensation structure is available to verified candidates. Book a discovery call to get full access.
          </p>
          <a
            href="https://calendly.com/kiani-life-and-health/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-10 py-[16px] bg-gold text-primary-foreground text-[13px] font-semibold tracking-[0.08em] uppercase overflow-hidden"
          >
            <span className="relative z-10">Book a Call to View</span>
            <span className="absolute inset-0 bg-[hsl(var(--gold-hi))] -translate-x-full transition-transform duration-400 group-hover:translate-x-0" />
          </a>
          <p className="text-[11px] text-t3 mt-4">
            Full login-based access coming soon.
          </p>
        </motion.div>
      </div>
    </main>
    <Footer />
  </>
);

export default CommissionsPage;
