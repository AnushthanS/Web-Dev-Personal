import React from 'react';
import { styles } from '../styles'
import './../App.css';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='w-full xs:w-[250px]'>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }} className='bg-tertiary rounded-[30px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'>
          <img src={icon} alt="title" className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='text-[18px] text-secondary mt-4 max-w-3xl leading-[30px]'
      >
        3rd-year CSE student at IIIT Sri City, specializing in Flutter and MERN Stack development for cloud-native applications.
        Core member of REVERB IIITS music club Musician and a film critic.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map(
          (service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          )
        )}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")