"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedFeatureSpotlight3DProps extends React.HTMLAttributes<HTMLElement> {
  preheaderIcon?: React.ReactNode;
  preheaderText: string;
  heading: React.ReactNode;
  description: string;
  buttonText: string;
  buttonHref?: string;
  imageUrl: string;
  imageAlt?: string;
  reverse?: boolean;
}

export const AnimatedFeatureSpotlight3D = React.forwardRef<
  HTMLElement,
  AnimatedFeatureSpotlight3DProps
>(
  (
    {
      className,
      preheaderIcon,
      preheaderText,
      heading,
      description,
      buttonText,
      buttonHref = "#",
      imageUrl,
      imageAlt = "Feature image",
      reverse = false,
      ...props
    },
    ref
  ) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [15, -15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      x.set(e.clientX - rect.left - rect.width / 2);
      y.set(e.clientY - rect.top - rect.height / 2);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <section
        ref={ref}
        className={cn(
          "w-full max-w-6xl mx-auto p-8 md:p-12 rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden",
          className
        )}
        aria-labelledby="feature-spotlight-heading"
        {...props}
      >
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
            reverse && "md:[&>*:first-child]:order-2"
          )}
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6 text-center md:text-left items-center md:items-start"
          >
            <div className="flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full badge-brand">
              {preheaderIcon}
              <span>{preheaderText}</span>
            </div>

            <motion.h2
              id="feature-spotlight-heading"
              className="text-4xl lg:text-5xl font-black tracking-tight text-gray-900"
              style={{ fontFamily: "var(--font-outfit)" }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {heading}
            </motion.h2>

            <motion.p
              className="text-lg text-gray-500 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a
                href={buttonHref}
                className="btn-brand inline-flex items-center gap-2 px-7 py-3.5 rounded-xl"
              >
                {buttonText}
              </a>
            </motion.div>
          </motion.div>

          {/* 3D Image */}
          <motion.div
            className="relative w-full min-h-[250px] md:min-h-[340px] flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-full max-w-md"
            >
              <motion.img
                src={imageUrl}
                alt={imageAlt}
                className="w-full object-contain rounded-2xl drop-shadow-2xl"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }
);
AnimatedFeatureSpotlight3D.displayName = "AnimatedFeatureSpotlight3D";
