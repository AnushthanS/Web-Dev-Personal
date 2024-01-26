'use client';
import { useLayoutEffect } from "react";
import Hero  from "../components/Hero";
import Divider from "../components/Divider";

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
      <Divider />
    </section>
  );
}
