import { motion } from "framer-motion";
import { Search, FileText, Video, Upload } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Research",
    description: "Analyze your niche, competitors, and audience to identify viral content opportunities.",
  },
  {
    icon: FileText,
    title: "Script",
    description: "Create engaging short-form content scripts designed to capture attention and increase watch time.",
  },
  {
    icon: Video,
    title: "Film & Edit",
    description: "Produce and edit professional social media videos optimized for algorithm performance.",
  },
  {
    icon: Upload,
    title: "Upload",
    description: "Publish and optimize content across your social platforms to maximize reach and engagement.",
  },
];

const HowItWorks = () => (
  <section className="py-20 lg:py-28 bg-muted">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground tracking-tight">
          HOW IT <span className="text-gradient-gold">WORKS</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Our proven 4-step process to grow your social media presence.
        </p>
      </motion.div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-display font-bold text-accent bg-accent/10 w-8 h-8 rounded-full flex items-center justify-center">
                {String(i + 1).padStart(2, "0")}
              </span>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 w-6 border-t-2 border-dashed border-border z-10" />
              )}
            </div>
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <step.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-display font-bold text-foreground text-lg mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
