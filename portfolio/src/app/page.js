'use client';
import { useLayoutEffect } from "react";
import Hero from "../components/hero/Hero";
import About from "../components/about";
import Nav from "@/components/navbar/Nav";

export default function Home() {
  useLayoutEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotive = new LocomotiveScroll();
    };
  });
  return (
    <section className="relative">
      <div className='absolute top-0 z-30 w-[100vw]'>
        <Nav />
      </div>
      <Hero />
      <About id='about' />
    </section>
  );
}
