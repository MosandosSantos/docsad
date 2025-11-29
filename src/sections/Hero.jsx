import React from 'react'
import heroimg from '../assets/heroimg.png'
import backgroundImage from '../assets/homeimg.webp'
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const Hero = () => {
  return (
    <div id='hero' className='bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className=' lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4'>
        <motion.h1
          variants={slideUpVariants}
          className=' text-[#1E88E5] text-2xl'>CONFORMIDADE INTELIGENTE</motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className='text-white uppercase text-[40px] font-bold'>Auditoria Sem Papelada</motion.h1>
        <div className='w-[120px] h-[6px] bg-[#1E88E5]'></div>
        <p className='text-white text-[15px]'>Um acervo digital seguro com versionamento, trilha de auditoria e acesso por perfis. Envie, aprove e compartilhe sem planilhas nem e-mails perdidos.</p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={zoomInVariants}
          className='flex justify-center items-center gap-5'>
          <motion.button
            variants={zoomInVariants}
            onClick={() => window.open('https://rsbarra.com.br/', '_blank')}
            className='bg-[#1E88E5] hover:bg-white hover:text-black px-10 py-3 rounded-lg text-white font-bold cursor-pointer transition-all duration-300'>Saiba mais...</motion.button>
          <motion.button
            variants={zoomInVariants}
            onClick={() => window.open('https://wa.me/5521990894201', '_blank')}
            className='border-white hover:border-[#1E88E5] hover:text-[#1E88E5] border-2 px-10 py-3 rounded-lg text-white font-bold cursor-pointer transition-all duration-300'>Junte-se a nós</motion.button>
        </motion.div>
      </motion.div>
      <div className='w-[40%] flex flex-col justify-end items-end'>
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants} src={heroimg} alt="hero image" className='lg:h-[600px] h-[300px] lg:mb-[-100px]' />
      </div>
    </div>
  )
}

export default Hero