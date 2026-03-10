import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const stats = [
  { from: "700", to: "450,000", period: "6 months", platform: "Instagram" },
  { from: "1,200", to: "320,000", period: "4 months", platform: "TikTok" },
  { from: "3,500", to: "185,000", period: "5 months", platform: "Instagram" },
];

const MoreResults = () => (
  <section className="py-20 lg:py-28 bg-hero">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground tracking-tight">
          MORE BEFORE & AFTER <span className="text-gradient-gold">CLIENT RESULTS</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-primary-foreground/10 transition-colors"
          >
            <TrendingUp className="w-8 h-8 text-accent mx-auto mb-4" />
            <p className="text-primary-foreground/50 text-sm font-display mb-1">From</p>
            <p className="text-2xl font-display font-bold text-primary-foreground">{stat.from}</p>
            <p className="text-primary-foreground/50 text-sm font-display my-2">to</p>
            <p className="text-4xl font-display font-bold text-gradient-gold">{stat.to}</p>
            <p className="text-primary-foreground/60 text-sm mt-3">followers in {stat.period}</p>
            <span className="inline-block mt-3 text-xs font-display font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
              {stat.platform}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MoreResults;
