import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUp, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResultCard from "@/components/ResultCard";
import { Button } from "@/components/ui/button";
import { allResults } from "@/lib/resultsData";

const Results = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-24 pb-20 lg:pb-28 bg-background">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 pt-4">
            <Link to="/" className="hover:text-foreground transition-colors font-medium">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">Client Results</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <h1 className="text-3xl lg:text-4xl font-display font-bold text-foreground tracking-tight">
              CLIENT BEFORE & AFTER <span className="text-gradient-gold">RESULTS</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Explore real growth results from our clients across different industries.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allResults.map((result, i) => (
              <ResultCard key={i} before={result.before} after={result.after} caption={result.caption} index={i} />
            ))}
          </div>

          <div className="text-center mt-14">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-display font-semibold text-base px-8 py-6"
            >
              <Link to="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />

      {/* Back to Top */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground p-3 rounded-full shadow-lg hover:bg-accent/90 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </div>
  );
};

export default Results;
