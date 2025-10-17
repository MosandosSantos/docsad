import React from 'react'
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const Contact = () => {
  return (
    <div id='contact' className='bg-white w-full'>
      <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'>
          <motion.h1 variants={slideUpVariants} className=' text-yellow-500 text-2xl'>CONTATE NOS</motion.h1>
          <motion.h1 variants={slideUpVariants} className='text-black uppercase text-[40px] font-bold'>ENTRE EM CONTATO CONOSCO PARA QUALQUER DÚVIDA</motion.h1>
          <motion.div variants={slideUpVariants} className='w-[120px] h-[6px] bg-yellow-500'></motion.div>
          <motion.p variants={slideUpVariants} className='text-3xl italic text-gray-700 mt-[60px]'>Mais de 20 anos de experiência!</motion.p>
        </motion.div>
        <div className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
          <motion.form
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            action="" className='flex flex-col justify-center items-start gap-4 w-full'>
            <input type="text" placeholder='Nome Completo' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
            <input type="email" placeholder='Seu E-mail' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
            <input type="number" placeholder='Celular' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
            <textarea name="" id="" placeholder='Sua Mensagem' rows="4" className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'></textarea>
            <motion.button
              variants={zoomInVariants}
              type='submit' className='bg-yellow-500 hover:bg-black hover:text-white px-10 py-4 text-black font-bold rounded-lg w-full'>Enviar</motion.button>
          </motion.form>
        </div>
      </div>
    </div>

  )
}

export default Contact