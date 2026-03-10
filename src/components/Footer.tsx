import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 bg-hero">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-primary-foreground">
        © {new Date().getFullYear()} SocialGrow Agency. All rights reserved.
      </p>
      <div className="flex gap-4">
        <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
          <Youtube className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
