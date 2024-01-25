'use client';
import { useLayoutEffect } from "react";
import Hero  from "./components/Hero";

export default function Home() {
  useLayoutEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
  });
  return (
    <section className="bg-color3">
      <Hero />
    </section>
  );
}
