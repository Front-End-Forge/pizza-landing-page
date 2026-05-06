"use client";

import React, { useRef, useEffect } from "react";

interface ScrollVideoProps {
    src: string | { src: string };  // handles Next.js static imports
    poster?: string;
    className?: string;
}

export function ScrollVideo({ src, poster, className }: ScrollVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    // resolve Next.js static import object or plain string
    const videoSrc = typeof src === "string" ? src : src.src;

    // useEffect(() => {
    //     const video = videoRef.current;
    //     const section = sectionRef.current;
    //     if (!video || !section) return;

    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if (entry.isIntersecting) {
    //                 video.play().catch(() => { });
    //             } else {
    //                 video.pause();
    //             }
    //         },
    //         { threshold: 0.4 }
    //     );

    //     observer.observe(section);
    //     return () => observer.disconnect();
    // }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // 🚀 The video only starts loading when it's on screen
                    video.play().catch(() => { });
                } else {
                    video.pause();
                }
            },
            { threshold: 0.2 } // Lower threshold so it starts earlier
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className={className}>
            <video
                ref={videoRef}
                src={videoSrc}
                poster={poster}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover rounded-2xl"
                onError={(e) => console.error("Video Error:", e)}
            />
        </div>
    );
}