import { motion } from "framer-motion";
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
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground tracking-tight uppercase">
          Measurable <span className="text-gradient-gold">Success</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          Data-driven strategies delivering consistent, explosive growth for our
          partners.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {primaryResults.map((result, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-sm"
          >
            <img
              src={result.after}
              alt={`Client Result ${i + 1}`}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle overlay effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
