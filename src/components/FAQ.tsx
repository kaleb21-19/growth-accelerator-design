import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I know if this service is right for my business?",
    answer: "If you're a business owner who wants to grow on social media but doesn't have the time, expertise, or team to produce consistent content — our service is built exactly for you. We work with coaches, consultants, e-commerce brands, and service-based businesses.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients start seeing meaningful growth within the first 30–60 days. Viral content can happen at any time, but consistent growth is typically visible within the first month of working together.",
  },
  {
    question: "Do I need to create the content myself?",
    answer: "No. We handle everything from research and scripting to filming direction and editing. All you need to do is show up for filming sessions — we guide you through the entire process.",
  },
  {
    question: "What social platforms do you manage?",
    answer: "We primarily focus on Instagram, TikTok, YouTube Shorts, and LinkedIn. Our strategy is tailored to whichever platforms make the most sense for your brand and audience.",
  },
];

const FAQ = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground tracking-tight">
          <span className="text-gradient-gold">FAQ</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card rounded-lg px-6 shadow-card border-none"
            >
              <AccordionTrigger className="font-display font-semibold text-foreground text-left hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQ;
