import Image from "next/image";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

function Hero() {
  const backgroundImage = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end:"+=500px",
        scrub: true,
        markers: true
      }
    });

    timeline
    .from(backgroundImage.current, {clipPath: "inset(20%)"})
    .to(introImage.current, {height: "200px"}, 0)
  }, []);

  return (
    <section>

      <div ref={backgroundImage} className="w-full h-[150vh] absolute z-0">
        <Image src={'/images/background.jpeg'} alt="background image" fill={true} className="brightness-50 object-cover object-center" />
      </div>

      <section className="relative">
        <div className="w-[300px] mx-auto h-fit flex justify-center items-center my-[18vh]">

          <div ref={introImage} data-scroll data-scroll-speed='0.3' className="w-full h-[500px] rounded-lg z-10 relative brightness-75">
            <Image
              src={'/images/intro.png'}
              alt="intro image"
              fill={true}
              className="rounded-md object-cover object-center"
            />
          </div>
          <h1 data-scroll data-scroll-speed='0.6' className="text-5xl font-bold text-white text-center z-20 absolute">Smooth Scroll</h1>

        </div>

      </section>

    </section>
  );
}

export default Hero;
