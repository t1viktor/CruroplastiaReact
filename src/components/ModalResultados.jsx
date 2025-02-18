import { useState, useEffect } from "react";



export default function ModalResultados() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden"); // Bloqueia o scroll
    } else {
      document.body.classList.remove("overflow-hidden"); // Libera o scroll
    }

    return () => {
      document.body.classList.remove("overflow-hidden"); // Garante que o scroll é liberado ao desmontar
    };
  }, [isOpen]);

  return (
    <div className="flex justify-center items-center">
      {/* Botão para abrir o modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="duration-300 bg-gradient-to-r from-[#1a212c] to-[#25364e] border-[2px]  hover:text-blue-500 hover:border-[2px] hover:border-blue-500 py-4  max-md:py-1 max-md:px-4 px-12 rounded-full text-blue-200 text-xl font-semibold max-md:text-sm cursor-pointer"
      >
        Ver processo completo de recuperação
      </button>

      {/* Fundo escuro e modal */}
      {isOpen && (
        <div className="fixed z-50 inset-0 flex justify-items-center items-center justify-center bgBlur" onClick={() => setIsOpen(false)}>
            
          <div onClick={(e) => e.stopPropagation()} className="z-50 fixed bg-slate-800 py-6 rounded-4xl shadow-lg w-[60%] max-lg:w-[90%] h-[80%] max-lg:h-[50%] border-[1px] border-slate-500 flex flex-col space-y-2 justify-between">

            <div  className=" flex items-center p-2 justify-center max-md:flex-col-reverse  text-center  border-b-[1px] border-slate-500 max-md:text-xl" >
                  
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-slate-800 font-semibold text-white text-center rounded-md w-60 cursor-pointer"
            >
              Fechar
            </button>

            </div>

        <div className=" text-white p-6 rounded-lg w-full  h-full">
    <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-orange-300">Resultados e Recuperação</h2>
        
    </div>

    <h3 className="text-lg text-blue-400 mb-2 ">Evolução dos Resultados</h3>

    <div className="bg-slate-800 p-3 w-full space-y-8  rounded-lg">
        <div className="flex justify-between h-full font-semibold text-gray-300 border-b  border-gray-700 pb-2 mb-2">
            <span>Período</span>
            <span>Evolução</span>
        </div>
        <div className="flex justify-between border-b border-gray-700 py-2">
            <span>1-2 semanas</span>
            <span>Redução inicial do inchaço</span>
        </div>
        <div className="flex justify-between border-b border-gray-700 py-2">
            <span>1-2 meses</span>
            <span>Retorno gradual às atividades</span>
        </div>
        <div className="flex justify-between py-2">
            <span>3-6 meses</span>
            <span>Resultados finais visíveis</span>
        </div>
    </div>
</div>

          </div>
        </div>
      )}
    </div>
  );
}
