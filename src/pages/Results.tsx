import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResultCard from "@/components/ResultCard";
import { allResults } from "@/lib/resultsData";

const Results = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-28 pb-20 lg:pb-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-foreground tracking-tight">
            CLIENT BEFORE & AFTER <span className="text-gradient-gold">RESULTS</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Browse all of our client success stories and growth results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allResults.map((result, i) => (
            <ResultCard key={i} before={result.before} after={result.after} caption={result.caption} index={i} />
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Results;
