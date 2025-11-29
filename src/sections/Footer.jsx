import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <>
      {/* FOOTER */}
      <footer className="bg-black/95 text-gray-300 py-6 px-4 border-t border-gray-800 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Desenvolvido por - esquerda */}
          <p className="text-sm md:text-base text-gray-400 flex items-center gap-1">
            Desenvolvido por  
            <a
              href="https://wa.me/5521999417097"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E88E5] hover:text-[#42A5F5] hover:underline flex items-center gap-1"
            >
              Mosán dos Santos <FaWhatsapp className="inline-block" />
            </a>
          </p>

          {/* Centro - RSBARRA */}
          <p className="text-sm md:text-base text-center flex-1">
            © {new Date().getFullYear()} <span className="text-white font-semibold">RSBARRA</span> — Todos os direitos reservados.
          </p>

          {/* Espaço vazio (melhor alinhamento) */}
          <div className="w-[140px] md:w-[180px]"></div>

        </div>
      </footer>

      {/* BOTÃO SCROLL TOP */}
      <div
        id="icon-box"
        className="bg-[#1E88E5] text-white p-3 rounded-full shadow-lg hover:bg-[#42A5F5] transition-all cursor-pointer fixed lg:bottom-6 right-6 bottom-6 z-50"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="w-[30px] h-[30px]" />
        </Link>
      </div>
    </>
  )
}

export default Footer
