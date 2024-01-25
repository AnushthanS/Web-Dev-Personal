import { useScroll, useTransform, useSpring, motion, useMotionValueEvent } from 'framer-motion';
import PropTypes from 'prop-types';
import  { useRef, useEffect, useState } from 'react';

const SmoothScroll = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  //get height info
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if(contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
      setWindowHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [contentRef]);

  //intercept default scroll
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if(latest === 0){
      setIsLoading(false);
    }
  });

  const y = useTransform(smoothProgress, (value)=>{
    return value * -(contentHeight - windowHeight);
  });

  return (
    <>
      <div style={{height: contentHeight}}/>
      <motion.div className='w-screen  fixed top-0 flex flex-col' ref={contentRef} style={{y: isLoading? 0:y, opacity: isLoading ? 0:1}}>{children}</motion.div>
    </>
  );
};

SmoothScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SmoothScroll