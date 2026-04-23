import React, { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", onMouseMove);
    const animationFrame = requestAnimationFrame(animateRing);

    const handleMouseEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "60px";
        ringRef.current.style.height = "60px";
      }
    };

    const handleMouseLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "40px";
        ringRef.current.style.height = "40px";
      }
    };

    const interactiveElements = document.querySelectorAll(
      "a, button, .card-hover, input, select, textarea",
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrame);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Inner dot: white center with dark outline + white/gold glow for maximum contrast */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2"
        style={{
          boxShadow:
            "0 0 0 2px #0A1929, 0 0 12px rgba(255, 255, 255, 0.9), 0 0 24px rgba(255, 215, 0, 0.5)",
        }}
      />
      {/* Outer ring: gold with dark shadow for separation from green particles */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-[#FFD700] rounded-full pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200"
        style={{
          boxShadow:
            "0 0 0 1px rgba(10, 25, 41, 0.8), 0 0 16px rgba(255, 215, 0, 0.4)",
        }}
      />
    </>
  );
}
