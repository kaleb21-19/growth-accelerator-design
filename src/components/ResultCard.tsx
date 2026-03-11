import { motion } from "framer-motion";

interface ResultCardProps {
  before: string;
  after: string;
  caption: string;
  index: number;
}

const ResultCard = ({ before, after, caption, index }: ResultCardProps) => (
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
        <img src={before} alt="Before results" className="w-full h-48 object-cover" />
      </div>
      <div className="relative">
        <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-display font-semibold px-2.5 py-1 rounded-sm z-10">
          AFTER
        </span>
        <img src={after} alt="After results" className="w-full h-64 object-contain" />
      </div>
    </div>
    <div className="p-5">
      <p className="font-display font-semibold text-foreground text-sm">{caption}</p>
    </div>
  </motion.div>
);

export default ResultCard;
