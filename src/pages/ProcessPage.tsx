import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ProcessPage = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-ink pt-[120px]">
      <div className="wrap mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-t3 hover:text-gold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
      <Process />
    </main>
    <Footer />
  </>
);

export default ProcessPage;
