import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ModalHeader from "./ModalHeader";

const logo = "/img/LOGO_TRANSPARENTE_1.png";
const torso = "/img/torsoFemininoImg.jpeg";

const tittleHeader = "Abdominoplastia";
const descHeader =
  "Procedimento cirúrgico avançado realizado por especialistas, proporcionando resultados seguros e naturais";

export default function Header() {
  const menuMobile = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (menuMobile.current) {
        if (!isVisible) {
          menuMobile.current.classList.remove("h-[84vh]");
          menuMobile.current.classList.add("h-screen");
        } else {
          menuMobile.current.classList.remove("h-screen");
          menuMobile.current.classList.add("h-[84vh]");
        }
      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center bg-slate-800">
      <header
        className={`bg-slate-800 fixed z-30 top-0 text-white h-28 py-4 px-8 w-full flex justify-between items-center border-b-[1px] border-orange-200 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <img className="h-18 max-lg:h-14" src={logo} alt="Logo" />

        <nav className="lg:flex hidden font-semibold justify-center items-center space-x-16 bold">
          <ul className="flex space-x-16">
            <li>
              <a
                className="liBgOpacity duration-300 py-2 px-4 rounded-full hover:text-orange-200"
                href="#inicio"
              >
                Início
              </a>
            </li>
            <li>
              <a
                className="liBgOpacity duration-300 py-2 px-4 rounded-full hover:text-orange-200"
                href="#procedimento"
              >
                Procedimento
              </a>
            </li>
            <li>
              <a
                className="liBgOpacity duration-300 py-2 px-4 rounded-full hover:text-orange-200"
                href="#cuidados"
              >
                Cuidados
              </a>
            </li>
            <li>
              <a
                className="liBgOpacity duration-300 py-2 px-4 rounded-full hover:text-orange-200"
                href="#resultados"
              >
                Resultados
              </a>
            </li>
          </ul>
        </nav>

        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {isOpen && (
          <ul
            ref={menuMobile}
            className="absolute top-28 left-0 w-full bg-slate-900 h-[84vh] flex flex-col items-center space-y-4 py-8 uppercase bold max-xs:hidden justify-between transition-all duration-500 ease-in-out"
          >
            <li>
              <a href="#inicio" onClick={toggleMenu}>
                Início
              </a>
            </li>
            <li>
              <a href="#procedimento" onClick={toggleMenu}>
                Procedimento
              </a>
            </li>
            <li>
              <a href="#cuidados" onClick={toggleMenu}>
                Cuidados
              </a>
            </li>
            <li>
              <a href="#resultados" onClick={toggleMenu}>
                Resultados
              </a>
            </li>
          </ul>
        )}
      </header>

      <div id="inicio"></div>

      <section
        className="h-[120vh] w-full mt-28 top-28 bg-cover bg-center max-lg:h-[50vh] flex flex-col items-center space-y-12 min-md:min-h-[90vh] max-lg:space-y-0 py-2 max-lg:py-1 max-lg:w-full max-sm:w-[100vw] justify-evenly"
        style={{ backgroundImage: `url(${torso})` }}
      >
        <div className="bg-gradient-to-r from-[#1F2937] to-[#2a3a50] font-bold py-2 px-4 text-md rounded-full text-orange-200 max-lg:text-sm max-lg:py-1 max-lg:px-2">
          Procedimento Especializado
        </div>

        <h1 className="text-6xl textShadow max-lg:text-3xl font-semibold tracking-wide text-white uppercase ">
          {tittleHeader}
        </h1>

        <p className="text-4xl textShadow uppercase w-[70%] font-semibold border-b-[1px] border-white pb-4 mx-6 text-white text-center max-lg:text-lg">
          {descHeader}
        </p>

        <ModalHeader />

        <div className="gridCards">
          <div className="cardHeader">
            <h2 className="h2CardHeader">15+</h2>
            <p className="pCardHeader">Anos de experiência</p>
          </div>

          <div className="cardHeader">
            <h2 className="h2CardHeader">2000+</h2>
            <p className="pCardHeader">Cirurgias Realizadas</p>
          </div>

          <div className="cardHeader">
            <h2 className="h2CardHeader">98%</h2>
            <p className="pCardHeader">Satisfação dos Pacientes</p>
          </div>
        </div>
      </section>
    </div>
  );
}
