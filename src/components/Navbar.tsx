import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoImage from "../assets/Copilot_20260310_174748.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Results", href: "/#results" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (isHome && href.startsWith("/#")) {
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-display font-bold text-2xl text-primary-foreground tracking-tight">
          <img src={logoImage} alt="TESFA CREATIVE Logo" className="h-14 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            isHome && item.href.startsWith("/#") ? (
              <a
                key={item.label}
                href={item.href.replace("/", "")}
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-medium"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-medium"
              >
                {item.label}
              </Link>
            )
          )}
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold">
            Call us +251946662902
          </Button>
        </div>

        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 py-4">
          <div className="container flex flex-col gap-4">
            {navItems.map((item) =>
              isHome && item.href.startsWith("/#") ? (
                <a
                  key={item.label}
                  href={item.href.replace("/", "")}
                  onClick={() => setOpen(false)}
                  className="text-primary-foreground/70 hover:text-primary-foreground font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="text-primary-foreground/70 hover:text-primary-foreground font-medium"
                >
                  {item.label}
                </Link>
              )
            )}
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
