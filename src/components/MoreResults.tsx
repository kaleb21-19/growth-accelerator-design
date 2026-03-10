import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ResultCard from "@/components/ResultCard";
import { moreResults } from "@/lib/resultsData";

const MoreResults = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground tracking-tight">
          MORE BEFORE & AFTER <span className="text-gradient-gold">CLIENT RESULTS</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {moreResults.map((result, i) => (
          <ResultCard key={i} before={result.before} after={result.after} caption={result.caption} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold text-base px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <Link to="/results">
            View All Results
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default MoreResults;
