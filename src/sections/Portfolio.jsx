import React from 'react'
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

// Usando placeholders temporários para imagens de projetos (construção)
const project1 = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop';
const project2 = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop';
const project3 = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop';
const project4 = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop';
const project5 = 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=300&fit=crop';
const project6 = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop';
const project7 = 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=400&h=300&fit=crop';
const project8 = 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=300&fit=crop';

const Portfolio = () => {
  return (
    <div id='projects' className='w-full'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'>
        <motion.h1 variants={slideUpVariants} className=' text-[#1E88E5] text-2xl'>PORTFOLIO</motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold text-center'>NOSSOS PROJETOS</motion.h1>
        <motion.div variants={slideUpVariants} className='w-[120px] h-[6px] bg-[#1E88E5]'></motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className='w-full m-auto grid lg:grid-cols-4 grid-cols-1'>
        <img src={project1} alt="project image" className='h-[250px] w-full' />
        <img src={project2} alt="project image" className='h-[250px] w-full' />
        <img src={project3} alt="project image" className='h-[250px] w-full' />
        <img src={project4} alt="project image" className='h-[250px] w-full' />
        <img src={project5} alt="project image" className='h-[250px] w-full' />
        <img src={project6} alt="project image" className='h-[250px] w-full' />
        <img src={project7} alt="project image" className='h-[250px] w-full' />
        <img src={project8} alt="project image" className='h-[250px] w-full' />
      </motion.div>
    </div>
  )
}

export default Portfolio