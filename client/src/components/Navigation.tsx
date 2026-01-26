import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl font-bold font-display uppercase tracking-tighter text-primary cursor-pointer">
            Vote <span className="text-foreground">Yes</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("sfss")} className="text-sm font-semibold hover:text-primary transition-colors">
            SFSS Fee
          </button>
          <button onClick={() => scrollToSection("cgs")} className="text-sm font-semibold hover:text-primary transition-colors">
            CGS Groups
          </button>
          <button onClick={() => scrollToSection("impact")} className="text-sm font-semibold hover:text-primary transition-colors">
            Impact
          </button>
          <button onClick={() => scrollToSection("faq")} className="text-sm font-semibold hover:text-primary transition-colors">
            FAQ
          </button>
          <button
            onClick={() => scrollToSection("volunteer")}
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
          >
            Get Involved
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button onClick={() => scrollToSection("sfss")} className="text-left font-semibold py-2">
                SFSS Fee
              </button>
              <button onClick={() => scrollToSection("cgs")} className="text-left font-semibold py-2">
                CGS Groups
              </button>
              <button onClick={() => scrollToSection("impact")} className="text-left font-semibold py-2">
                Impact
              </button>
              <button onClick={() => scrollToSection("volunteer")} className="w-full text-center px-5 py-3 rounded-xl bg-primary text-primary-foreground font-bold">
                Get Involved
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
