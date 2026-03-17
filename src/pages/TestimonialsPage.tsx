import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TestimonialsPage = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-ink pt-[120px]">
      <div className="wrap mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-t3 hover:text-gold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
      <Testimonials />
    </main>
    <Footer />
  </>
);

export default TestimonialsPage;
