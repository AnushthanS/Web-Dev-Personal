import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import Img1 from "./assets/img.jpg";
import Img2 from "./assets/img.jpg";
import Img3 from "./assets/img.jpg";
import Img4 from "./assets/img.jpg";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const ref = useRef();
  const cards = [
    {
      id: 1,
      image: Img1,
    },
    {
      id: 2,
      image: Img2,
    },
    {
      id: 3,
      image: Img3,
    },
    {
      id: 4,
      image: Img4,
    },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#cards",
          start: "top top",
          end: "+=8000",
          pin: true,
          scrub: true,
        },
      });

      cards.forEach((card) => {
        const direction = card.id % 2 === 0 ? "right" : "left";
        tl.to(
          `#card-${card.id}`,
          {
            opacity: 1,
            scale: 15,
            [direction]: "25%",
          },
          "-=0.7"
        );
        tl.to(
          `#card-${card.id}`,
          {
            opacity: 0,
            scale: 20,
            [direction]: "15%",
          },
          "-=0.5"
        );
      });
    },
    { scope: ref }
  );

  return (
    <div id="root" ref={ref}>
      <div
        id="cards"
        className="flex items-center min-h-screen relative bg-gradient-to-b from-black to-gray-900"
      >
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              id={`card-${card.id}`}
              className={`items-center justify-center w-10 h-10 absolute flex rounded-sm ${
                card.id % 2 !== 0
                  ? "card-left left-1/3 bg-green-400"
                  : "card-right right-1/3 bg-red-400"
              }`}
              style={{
                transform: `scale(${(cards.length - card.id) * 3 + 2})`,
                zIndex: cards.length - card.id,
              }}
            >
              <img
                src={card.image}
                alt="img"
                className="p-[0.1px] rounded-sm"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
