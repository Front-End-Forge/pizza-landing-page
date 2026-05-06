"use client";

import React, { useState } from "react";

const SocialConnect = () => {
  const socialLinks = [
    {
      name: "Instagram",
      href: "#footer",
      className: "instagram",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#footer",
      className: "facebook",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#footer",
      className: "linkedin",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-white py-20 px-4 border-t border-gray-100" id="contact">
      {/* Craving CTA Banner */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <div className="backdrop-blur-sm rounded-3xl p-10 md:p-14 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #7f1d1d 100%)" }}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-400 to-transparent" />
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4 relative z-10"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Craving For Some Pizza? 🍕
          </h2>
          <p className="text-white/80 text-lg mb-8 relative z-10">
            Order directly or via your favourite platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              className="bg-white font-black px-8 py-3.5 rounded-xl hover:scale-105 transition-all shadow-lg text-brand-gradient"
            >
              Order Now
            </a>
            <a
              className="bg-white/10 border border-white/30 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/20 transition-all"
            >
              Find an Outlet
            </a>
          </div>
        </div>
      </div>

      {/* Community Sign-up */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h3 className="text-3xl font-black text-gray-900 mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
          🎉 Join the Community
        </h3>
        <p className="text-gray-500 mb-6">Get exclusive offers and early access to new menu items!</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            id="community-email"
            type="email"
            placeholder="Your Email ID"
            className="flex-1 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 focus:outline-none focus:border-red-400 transition-colors"
          />
          <input
            id="community-mobile"
            type="tel"
            placeholder="Mobile Number"
            className="flex-1 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 focus:outline-none focus:border-red-400 transition-colors"
          />
          <button
            id="community-join-btn"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3 rounded-xl transition-colors whitespace-nowrap"
          >
            Join →
          </button>
        </div>
      </div>

      {/* Social Connect */}
      <div className="w-full max-w-3xl mx-auto text-center mb-12">
        <h3
          className="text-4xl md:text-5xl font-black text-gray-900 mb-3"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Connect{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-orange-400">
            With Us
          </span>
        </h3>
        <p className="text-gray-500 mb-10">
          Follow us on this crazy journey of delivering you the perfect pizza
        </p>

        <div
          className="rounded-3xl bg-gray-50 border border-gray-200 shadow-sm p-10 mx-auto"
          style={{}}
        >
          <div className="flex flex-wrap justify-center gap-10">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className={`social-icon ${social.className}`}>
                <div className="icon-container">{social.icon}</div>
                <span className="icon-label">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="max-w-5xl mx-auto pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
            <span className="text-white text-base">🍕</span>
          </div>
          <span className="font-black text-gray-900 text-lg" style={{ fontFamily: "var(--font-outfit)" }}>
            PIE &amp; PATTY CO
          </span>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center gap-1">
          <a href="tel:+919944990034" className="text-gray-500 hover:text-red-600 transition-colors">
            📞 +91 9944990034
          </a>
        </div>

        <p className="text-gray-400">© Pie &amp; Patty Co. All rights reserved.</p>
      </div>
    </footer>
  );
};

export { SocialConnect };
