import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FloatingWrapper } from "./FloatingWrapper";

interface FloatingImageProps {
  src: string;
  alt: string;
  className: string;
}

export interface FloatingFoodHeroProps {
  title: string;
  description: string;
  images: FloatingImageProps[];
  className?: string;
}

const Swirls = () => (
  <>
    <svg
      className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 text-red-100/60"
      width="700" height="700" viewBox="0 0 600 600"
      fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    >
      <path
        d="M515.266 181.33C377.943 51.564 128.537 136.256 50.8123 293.565C-26.9127 450.874 125.728 600 125.728 600"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />
    </svg>
    <svg
      className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-yellow-100/60"
      width="700" height="700" viewBox="0 0 700 700"
      fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    >
      <path
        d="M26.8838 528.274C193.934 689.816 480.051 637.218 594.397 451.983C708.742 266.748 543.953 2.22235 543.953 2.22235"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />
    </svg>
  </>
);

export function FloatingFoodHero({ title, description, images, className }: FloatingFoodHeroProps) {
  return (
    <section
      className={cn(
        "relative w-full min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-white py-20 md:py-28",
        className
      )}
    >
      {/* Subtle glow blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[250px] h-[250px] bg-yellow-400/5 rounded-full blur-2xl" />
        <Swirls />
      </div>

      {/* Floating food images — LARGER */}
      {/* <div className="absolute inset-0 z-10 pointer-events-none">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={384}  // match your largest size (lg:w-96)
            height={384}
            priority={index === 0} // only first image is LCP
            loading={index === 0 ? "eager" : "lazy"}
            {...(index === 0 && { fetchPriority: "high" })}
            className={cn("absolute object-contain drop-shadow-xl", image.className)}
            style={{
              animationDelay: `${index * 400}ms`,
              animationDuration: `${4 + index * 0.7}s`,
            }}
          />
        ))}
      </div> */}

      {images.map((image, index) => (
        <FloatingWrapper key={image.src} index={index} className={image.className}>
          <Image
            src={image.src}
            alt={image.alt}
            width={384}
            height={384}
            priority={index === 0} // Highest priority for the main pizza
            loading={index === 0 ? "eager" : "lazy"}
            {...(index === 0 && { fetchPriority: "high" } as any)}
            // className="object-contain drop-shadow-xl "
            className={cn(
              "absolute animate-float",
              className
            )}
            style={{
              animationDelay: `${index * 0.4}s`,
              animationDuration: `${4 + index * 0.7}s`,
            }}
            sizes="(max-width: 768px) 144px, 384px"
          />
        </FloatingWrapper>
      ))}

      {/* Text + CTAs — narrower max-w so icons stay visible */}
      <div className="relative z-20 container mx-auto px-4 text-center max-w-lg">
        {/* Hours badge */}
        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-1.5 text-red-600 text-xs font-medium mb-5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Open 11 AM – 3 AM · Free Delivery
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          {title}
        </h1>

        <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-sm mx-auto">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            id="hero-order-now"
            href="#menu"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-red-500/40 hover:scale-105 transition-all duration-200 text-base"
          >
            🍕 Order NOW
          </a>

          <div className="flex gap-2">
            <a
              id="hero-find-outlet"
              href="#services"
              className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 font-semibold px-4 py-3 rounded-xl hover:border-red-300 hover:text-red-600 shadow-sm transition-all duration-200 text-sm"
            >
              <span className="text-red-500 font-black text-sm">📍</span>
              Find Outlet
            </a>
            <a
              id="hero-contact"
              href="#footer"
              className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 font-semibold px-4 py-3 rounded-xl hover:border-orange-300 hover:text-orange-600 shadow-sm transition-all duration-200 text-sm"
            >
              <span className="text-orange-500 font-black text-sm">📞</span>
              Contact Us
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-xs mx-auto">
          {[
            { value: "40+", label: "Stores" },
            { value: "100%", label: "Dairy Cheese" },
            { value: "30 min", label: "Delivery" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl sm:text-2xl font-black text-gray-900" style={{ fontFamily: "var(--font-outfit)" }}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
