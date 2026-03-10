import { motion } from "framer-motion";
import ResultCard from "@/components/ResultCard";
import { primaryResults } from "@/lib/resultsData";

const SocialProof = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground tracking-tight">
          CLIENT BEFORE & AFTER <span className="text-gradient-gold">RESULTS</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Real growth from real businesses we've helped scale on social media.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {primaryResults.map((result, i) => (
          <ResultCard key={i} before={result.before} after={result.after} caption={result.caption} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
