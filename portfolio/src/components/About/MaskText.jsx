import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UseMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const updateMousePosition = e => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);
    return mousePosition;
};

function MaskText() {
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = UseMousePosition();
    const size = isHovered ? 400 : 40;

    return (

        <>
            <motion.div
                className='text-color3 w-full h-[60vh] py-4 px-2 text-3xl md:text-5xl absolute bg-color5'
                style={{
                    maskImage: "url('/mask.svg')",
                    maskRepeat: "no-repeat",
                    maskSize: "40px",
                  }}
                animate={{
                    WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
            >
                <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, alias. Voluptatibus possimus deserunt tempore fuga sint, minus suscipit numquam modi doloremque porro aperiam, ducimus architecto error eaque natus voluptates inventore.
                </p>
            </motion.div>

            {/* text div */}
            <div className='text-white w-full h-[60vh] py-4 px-2 text-3xl md:text-5xl'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, alias. Voluptatibus possimus deserunt tempore fuga sint, minus suscipit numquam modi doloremque porro aperiam, ducimus architecto error eaque natus voluptates inventore.
                </p>
            </div>
        </>
    )
}

export default MaskText