import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display font-bold text-xl text-primary-foreground tracking-tight">
          Social<span className="text-gradient-gold">Grow</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Results", "How It Works", "Pricing", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-medium"
            >
              {item}
            </a>
          ))}
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold">
            Book a Call
          </Button>
        </div>

        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 py-4">
          <div className="container flex flex-col gap-4">
            {["Results", "How It Works", "Pricing", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setOpen(false)}
                className="text-primary-foreground/70 hover:text-primary-foreground font-medium"
              >
                {item}
              </a>
            ))}
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold w-full">
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
