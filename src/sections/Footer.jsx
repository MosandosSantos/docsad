import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <>
      {/* FOOTER */}
      <footer className="bg-black/95 text-gray-300 py-6 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Direitos */}
          <p className="flex items-center gap-2 text-sm md:text-base">
            © {new Date().getFullYear()} RSBARRA — Todos os direitos reservados.
          </p>

          {/* Desenvolvido por */}
          <p className="text-sm md:text-base text-gray-400">
            Desenvolvido por{" "}
            <a
              href="https://wa.me/5521999417097"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 hover:underline flex items-center gap-1"
            >
              Mosán dos Santos <FaWhatsapp className="inline-block" />
            </a>
          </p>

        </div>
      </footer>

      {/* BOTÃO SCROLL TOP */}
      <div
        id="icon-box"
        className="bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-yellow-400 transition-all cursor-pointer fixed lg:bottom-6 right-6 bottom-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="w-[30px] h-[30px]" />
        </Link>
      </div>
    </>
  )
}

export default Footer
