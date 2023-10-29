import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import './../App.css';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { github } from '../assets';


const ProjectCard = ({ index, name, description, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={
        {
          max: 45,
          scale: 1,
          speed: 450
        }
      }
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full' >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute flex justify-end inset-0 m-3 card-img_hover'>
            <div onClick={() => { window.open(source_code_link, "_blank") }} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
}

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>My projects</p>
        <h2 className={styles.sectionHeadText}>Lorem ipsum dolor sit amet.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[16px] max-w-3xl leading-[30px]'
        >
          Following are some projects that might not follow any particular theme/pattern. These are random based on whatever problem I wish to solve, and are often, but not limited to, a display of my skills in the technologies mentioned above.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map(
          (project, index) => (
            <ProjectCard
              key={`project-${index}`}
              {...project}
            />
          )
        )}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");