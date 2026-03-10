import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero min-h-[90vh] flex items-center">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-display font-medium tracking-widest text-sm mb-6"
            >
              SOCIAL MEDIA GROWTH AGENCY
            </motion.p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-[1.05] tracking-tight mb-4">
              GROW & SELL ON{" "}
              <span className="text-gradient-gold">SOCIAL MEDIA</span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-primary-foreground/70 mb-6">
              AS A BUSY BUSINESS OWNER
            </p>
            
            <p className="text-primary-foreground/60 text-lg max-w-lg mb-10 leading-relaxed">
              Done-for-you monthly social media marketing services designed to help businesses grow their audience, increase engagement, and convert followers into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold text-base px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Book a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
                {/* <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-display font-medium text-base px-8 py-6">
                  <Play className="mr-2 h-4 w-4" />
                  See Results
                </Button> */}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <img
              src={heroDashboard}
              alt="Social media growth analytics dashboard"
              className="w-full drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
