'use client';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };

    initLocomotiveScroll();
  }, []);

  return (
    <main className="relative bg-color3 min-h-screen">
      <div className="text-white">hello</div>
    </main>
  );
}