'use client';
import { useLayoutEffect } from "react";
import Hero  from "../components/hero/Hero";
import About from "../components/about";

export default function Home() {
  useLayoutEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotive = new LocomotiveScroll();
    };
  });
  return (
    <section className="relative">
      <Hero />
      <About id='about' />

    </section>
  );
}
