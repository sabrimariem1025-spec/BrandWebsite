"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#training", label: "Training" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#gallery", label: "Gallery" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/80 dark:bg-ink/80 backdrop-blur-md border-b border-ink/10 dark:border-paper/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container-content flex items-center justify-between h-16">
        <a href="#top" className="font-display text-lg font-medium tracking-tight">
          Mariem Sabri
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate dark:text-paper/70 hover:text-gold dark:hover:text-gold-light transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center border border-ink/15 dark:border-paper/15 rounded-full"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-paper dark:bg-ink border-t border-ink/10 dark:border-paper/10">
          <div className="container-content flex flex-col py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm border-b border-ink/5 dark:border-paper/5 last:border-none"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
