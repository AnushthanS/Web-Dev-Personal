'use client'
import { useEffect } from "react"
import Hero from "@/components/hero/hero";

function Home() {
  useEffect(() => (
    async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    }
  ), []);
  return (
    <>
      <Hero />
    </>
  )
}

export default Home