import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import './../App.css';
import emailjs from '@emailjs/browser';
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

//template_6jzg0x5
//service_ckko1nl
//Pie-ic6wQMFEw-Jf4

const Contact = () => {
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:''
  });

  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value});
  }

  const handleSubmit = (e) => {
     e.preventDefault();
     setLoading(true);

     emailjs.send('service_ckko1nl', 'template_6jzg0x5',{
      from_name: form.name,
      to_name: "Anushthan",
      from_email: form.email,
      to_email: "anushthans@gmail.com",
      message: form.message
     },
     'Pie-ic6wQMFEw-Jf4').then(
      () => {
        setLoading(false);
        alert("Your message has been sent. Thanks for reaching out!");
        setForm({name:'', email:'', message:''});
      }
     ), (error) => {
      setLoading(false);
      console.log(error);
      alert("Couldn't send your message!");
     };
  }

  return (
    <>
      <div className='flex-col-reverse xl:flex-row xl:mt-12 flex gap-10 overflow-hidden'>
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
          <p className={`${styles.sectionSubText}`}>Get in touch</p>
          <h3 className={`${styles.sectionHeadText}`}>Contact me</h3>

          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your name</span>
              <input type="text" name='name' value={form.name} onChange={handleChange} placeholder='Enter name here' className='rounded-lg py-4 px-6 bg-tertiary font-medium placeholder:text-secondary text-white outline-none border-none' />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input type="email" name='email' value={form.email} onChange={handleChange} placeholder='Enter email here' className='rounded-lg py-4 px-6 bg-tertiary font-medium placeholder:text-secondary text-white outline-none border-none' />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your message</span>
              <textarea rows='7' name='message' value={form.message} onChange={handleChange} placeholder='Your message here' className='rounded-lg py-4 px-6 bg-tertiary font-medium placeholder:text-secondary text-white outline-none border-none' />
            </label>

            <button type="submit" className='outline-none w-fit text-white shadow-md shadow-primary bg-tertiary rounded-xl py-3 px-8 font-bold'>
              {loading? 'Sending' : 'Send'}
            </button>
          </form>
        </motion.div>

        <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(Contact, "contact");