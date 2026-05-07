"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

const links = [
  { label: "Home", href: "/" },
  { label: "Why Pie & Patty Co", href: "#services" },
  { label: "Magic", href: "#magic" },
  { label: "Order Menu", href: "#menu", external: false },
  { label: "Contact Us", href: "#contact" },

];

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(10);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-100"
            : "bg-white/80 backdrop-blur-sm"
        )}
      >
        {/* Top utility bar */}
        <div className="bg-red-600 text-white text-xs py-1.5 px-4 text-center hidden sm:block">
          <span className="mr-4">📞 <a href="tel:+919944994417" className="hover:underline font-medium">+91 9944994417</a></span>
          <span>🕐 Open 11 AM – 3 AM  ·  Free Home Delivery</span>
        </div>

        {/* Main nav */}
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group" id="nav-logo">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center shadow-md group-hover:shadow-red-500/40 transition-shadow">
              <span className="text-white text-xl">🍕</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-red-600 text-lg tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                PIE &amp; PATTY
              </span>
              <span className="text-gray-500 text-[10px] font-medium uppercase tracking-widest">
                Co.
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150",
                  link.external
                    ? "bg-red-600 text-white hover:bg-red-700 ml-2 px-5"
                    : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
          >
            <span
              className={cn("block w-5 h-0.5 bg-gray-700 transition-all duration-300", open && "rotate-45 translate-y-2")}
            />
            <span
              className={cn("block w-5 h-0.5 bg-gray-700 transition-all duration-300", open && "opacity-0")}
            />
            <span
              className={cn("block w-5 h-0.5 bg-gray-700 transition-all duration-300", open && "-rotate-45 -translate-y-2")}
            />
          </button>
        </nav>


      </header>

      {open && (
        <div
          id="mobile-menu"
          className="fixed top-16 left-0 right-0 bottom-0 z-[100] bg-white backdrop-blur-xl border-t border-gray-100 md:hidden overflow-y-auto"
        >
          <div className="flex flex-col p-6 gap-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-700 hover:text-red-600 hover:bg-red-50"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>

  );
}
