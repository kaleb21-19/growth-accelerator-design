import { motion } from "framer-motion";
import { Search, FileText, Video, Upload } from "lucide-react";

const steps = [
  {
    image:"src/assets/research.png" ,
    title: "Research",
    description: "Analyze your niche, competitors, and audience to identify viral content opportunities.",
  },
  {
    image:"src/assets/script.png" ,
    title: "Script",
    description: "Create engaging short-form content scripts designed to capture attention and increase watch time.",
  },
  {
    image:"src/assets/camera.png" ,
    title: "Film & Edit",
    description: "Produce and edit professional social media videos optimized for algorithm performance.",
  },
  {
    image:"src/assets/upload.png" ,
    title: "Upload",
    description: "Publish and optimize content across your social platforms to maximize reach and engagement.",
  },
];

const HowItWorks = () => (
  <section className="py-20 lg:py-28 bg-background">
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
            <div className="flex items-center gap-3 ">
              <span className="text-xs font-display font-bold text-accent bg-accent/10 w-8 h-8 rounded-full flex items-center justify-center">
                {String(i + 1).padStart(2, "0")}
              </span>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 w-6 border-t-2 border-dashed border-border z-10" />
              )}
            </div>
            
              <img src={step.image} alt={step.title} className="w-20 h-20 object-contain mx-auto" />
            
            <h3 className="font-display font-bold text-foreground text-lg mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
