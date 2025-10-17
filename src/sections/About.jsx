import React from 'react'
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const About = () => {
  return (
    <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]' id='about'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'>
        <motion.h1 variants={slideUpVariants} className=' text-yellow-500 text-2xl'>BEM-VINDO AO PORTAL DE DOCUMENTOS</motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold'>documentos de obra, sob controle</motion.h1>
        <div className='w-[120px] h-[6px] bg-yellow-500'></div>
        <p className='text-3xl italic text-gray-50 mt-[60px]'>Auditorias rápidas, conformidade comprovada e acesso seguro por perfil.</p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
        <p className='text-white text-lg text-justify'>Centralize todo o acervo da sua obra — contratos, laudos, ART/RRT, ASO, certificados, fotos e evidências — em um repositório seguro e organizado por incorporadora, obra e empreiteira. Defina permissões finas por perfil, controle versões e mantenha uma trilha completa de auditoria para cada documento.

Receba alertas de vencimento, aprove documentos com fluxo simples e gere dossiês de auditoria em um clique, prontos para compartilhar com links seguros. A busca por etiquetas, período e tipo de arquivo coloca qualquer evidência na sua mão em segundos. Segurança, LGPD, backups e histórico garantem tranquilidade — do canteiro ao compliance.</p>
        <motion.button variants={slideUpVariants} className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold'>READ MORE</motion.button>
      </motion.div>
    </div>
  )
}

export default About