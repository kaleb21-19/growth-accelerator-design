import { motion } from "framer-motion";
import before1 from "@/assets/before-1.png";
import after1 from "@/assets/after-1.png";
import before2 from "@/assets/before-2.png";
import after2 from "@/assets/after-2.png";
import before3 from "@/assets/before-3.png";
import after3 from "@/assets/after-3.png";

const results = [
  { before: before1, after: after1, caption: "2,500 → 450K followers in 6 months" },
  { before: before2, after: after2, caption: "800 → 320K followers in 4 months" },
  { before: before3, after: after3, caption: "1,200 → 185K followers in 5 months" },
];

const ResultCard = ({ result, index }: { result: typeof results[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="bg-card rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden"
  >
    <div className="grid grid-cols-2 gap-0">
      <div className="relative">
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-display font-semibold px-2.5 py-1 rounded-sm z-10">
          BEFORE
        </span>
        <img src={result.before} alt="Before results" className="w-full h-48 object-cover" />
      </div>
      <div className="relative">
        <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-display font-semibold px-2.5 py-1 rounded-sm z-10">
          AFTER
        </span>
        <img src={result.after} alt="After results" className="w-full h-48 object-cover" />
      </div>
    </div>
    <div className="p-5">
      <p className="font-display font-semibold text-foreground text-sm">{result.caption}</p>
    </div>
  </motion.div>
);

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
        {results.map((result, i) => (
          <ResultCard key={i} result={result} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
