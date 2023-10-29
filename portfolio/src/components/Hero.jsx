import {styles} from '../styles';
import './../App.css';

import { motion } from 'framer-motion';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        {/* The circle and the tracking line in this div */}
        <div className='flex flex-col justify-center items-center mt-20'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
          <div className='w-1 sm:h-60 h-40 violet-gradient'></div>
        </div>

        {/* Hero text in this div */}
        <div className='mt-20'>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-cyan-400'>Anushthan Saxena</span></h1>
          <p className={`${styles.heroSubText} mt-5 text-white-100`}>I make random stuff<br className='block sm:hidden' /> for the random problems I solve.  </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate = {{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero