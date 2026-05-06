"use client";

import React from "react";
import { motion } from "framer-motion";

interface MenuCardProps {
  name: string;
  category: string;
  price: string;
  rating: string;
  imageUrl: string;
}

export function MenuCard({ name, category, price, rating, imageUrl }: MenuCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 260, damping: 14 }}
      className="relative"
      style={{ perspective: "1000px" }}
    >
      {/* Red glow behind card */}
      <motion.div
        className="absolute -inset-3 rounded-3xl blur-2xl -z-10 bg-red-500/40"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      {/* Card */}
      <div className="relative w-72 rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-red-400/30"
        style={{ background: "linear-gradient(145deg, #dc4242ff 0%, #e42f2fff 50%, #b42020ff 100%)" }}
      >
        {/* Animated shine overlay */}
        <motion.div
          className="absolute inset-0 -z-0 rounded-2xl"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          style={{
            backgroundImage:
              "radial-gradient(at 80% 10%, rgba(255,255,255,0.18) 0px, transparent 60%), radial-gradient(at 20% 90%, rgba(255,150,150,0.12) 0px, transparent 60%)",
          }}
        />

        {/* Category badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/30 tracking-wide uppercase">
            {category}
          </span>
        </div>

        {/* Rating badge */}
        <div className="absolute top-3 right-3 z-20">
          <span className="bg-yellow-400 text-yellow-900 text-xs font-black px-2 py-0.5 rounded-full flex items-center gap-0.5">
            ★ {rating}
          </span>
        </div>

        {/* 3D Food Image */}
        <div className="relative h-52 flex items-end justify-center pt-6 pb-0 z-10 overflow-visible">
          <motion.img
            src={imageUrl}
            alt={name}
            className="h-52 w-full object-cover drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
            whileHover={{ scale: 1.12, y: -8, rotateY: 8 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            style={{ transformStyle: "preserve-3d" }}
          />
        </div>

        {/* Card body */}
        <div className="relative z-10 p-4 pt-3 flex flex-col gap-3">
          {/* Name */}
          <h3
            className="text-white font-black text-base leading-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            {name}
          </h3>

          <div className="h-px bg-white/20 rounded-full" />

          {/* Price + Order */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-white font-black text-xl">{price}</span>
            <motion.a
              whileTap={{ scale: 0.95 }}
              href="#menu"
              className="bg-white text-red-600 font-black text-xs px-4 py-2 rounded-xl hover:bg-red-50 transition-colors shadow-md"
            >
              Order →
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
