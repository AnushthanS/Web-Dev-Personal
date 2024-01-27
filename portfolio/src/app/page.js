'use client';
import { useLayoutEffect, useRef, useEffect } from "react";
import Hero from "../components/hero/Hero";
import About from "../components/about";
import Nav from "@/components/navbar/Nav";
import { motion } from 'framer-motion'

export default function Home() {
  useLayoutEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotive = new LocomotiveScroll();
    };
  });

  const elementRef = useRef(null);
  const { x, y } = UseMousePosition(elementRef);
  const size = 40;

  const UseMousePosition = (elementRef) => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const updateMousePosition = e => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
      const element = elementRef.current;
      element.addEventListener("mousemove", updateMousePosition);
      return () => element.removeEventListener("mousemove", updateMousePosition);
    }, [elementRef]);

    return { ...mousePosition, elementRef };
  };
  return (
    <motion.section
      className="relative"
      style={{
        maskImage: "url('/mask.svg')",
        maskRepeat: "no-repeat",
        maskSize: "40px",
      }}
      animate={{
        WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2 + 285)}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
    >
      <div className='absolute top-0 z-30 w-[100vw]'>
        <Nav />
      </div>
      <Hero />
      <About id='about' />
    </motion.section>
  );
}
