import { motion } from "framer-motion";

const AboutUs = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground tracking-tight text-center mb-10">
          ABOUT <span className="text-gradient-gold">US</span>
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            In today's world, <strong className="text-foreground">personal branding isn't optional — it's essential.</strong> The most successful business owners understand that visibility drives revenue. Think of how{" "}
            <strong className="text-foreground">Kylie Jenner</strong> built a billion-dollar empire or how{" "}
            <strong className="text-foreground">Rihanna</strong> turned personal brand into Fenty's massive success.
          </p>
          <p>
            You don't need to be a celebrity to leverage the same principles. Our team specializes in turning busy business owners into recognized authorities in their space — growing audiences that convert into paying customers.
          </p>
          <blockquote className="border-l-4 border-accent pl-6 py-2 italic text-foreground font-medium">
            "Your brand is what people say about you when you're not in the room. We make sure they're talking."
          </blockquote>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutUs;
