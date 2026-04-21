import { motion } from "framer-motion";
import { Check, ArrowRight, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Starter",
    price: "25,000 Birr",
    popular: false,
    features: [
      "8 High Quality videos per month",
      "Clean Editing & Fast Delivery",
      "Professional editing",
    ],
    bonus: "Perfect For Brands Testing content ",
  },
  {
    name: "Growth",
    price: "33,000 Birr",
    popular: true,
    features: [
      "15 High Quality videos per month",
      "Advance Editing & Fast Delivery",
    ],
    bonus: "For Brands Ready to Grow consistently ",
  },
  {
    name: "Dominance",
    price: "50,000 Birr",
    popular: false,
    features: [
      "25-30 High Quality videos per month",
      "viral Editing & Full Strategy",
      "Advance Editing & Fast Delivery",
    ],
    bonus: "For Brands that Want Attention + Sales ",
  },
];

const Pricing = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground tracking-tight">
          SOCIAL MEDIA MANAGEMENT{" "}
          <span className="text-gradient-gold">PACKAGES</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Choose the plan that fits your growth goals.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {packages.map((pkg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col ${
              pkg.popular ? "ring-2 ring-accent scale-[1.03]" : ""
            }`}
          >
            {pkg.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-display font-bold px-4 py-1 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3" /> MOST POPULAR
              </span>
            )}

            <h3 className="font-display font-bold text-xl text-foreground mb-2">
              {pkg.name}
            </h3>
            <p className="text-4xl font-display font-bold text-foreground mb-1">
              {pkg.price}
            </p>
            <p className="text-muted-foreground text-sm mb-6">per video</p>

            <ul className="space-y-3 mb-6 flex-1">
              {pkg.features.map((f, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2.5 text-sm text-foreground"
                >
                  <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="bg-accent/10 rounded-md p-3 mb-6">
              <p className="text-xs font-display font-semibold text-accent">
                {" "}
                {pkg.bonus}
              </p>
            </div>

            <Button
              className={`w-full font-display font-semibold py-6 transition-all duration-300 hover:scale-[1.02] ${
                pkg.popular
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              <span className={pkg.popular ? "text-background" : "text-accent"}>
                Call us{" "}
              </span>
              +251946662902
              <Phone
                className={`${pkg.popular ? "text-background" : "text-accent"} ml-2 h-4 w-4`}
              />
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
