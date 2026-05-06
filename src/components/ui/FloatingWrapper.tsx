"use client";

import { cn } from "@/lib/utils";

export function FloatingWrapper({
    children,
    index,
    className
}: {
    children: React.ReactNode;
    index: number;
    className?: string;
}) {
    return (
        <div
            className={cn("absolute z-10 pointer-events-none", className)}
            style={{
                animationDelay: `${index * 400}ms`,
                animationDuration: `${4 + index * 0.7}s`,
                willChange: "transform", // Offloads animation to GPU to fix TBT
            }}
        >
            {children}
        </div>
    );
}
