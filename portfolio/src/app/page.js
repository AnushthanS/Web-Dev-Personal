'use client';
import { useLayoutEffect } from "react";
import Hero  from "./components/Hero";
import Nav from "./components/Nav";
import Divider from "./components/Divider";

export default function Home() {
  useLayoutEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
  });
  return (
    <section className="bg-color3 relative">
      <Nav />
      <Hero />
      <Divider />
    </section>
  );
}
