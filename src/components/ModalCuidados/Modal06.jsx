import { useState, useEffect } from "react";

const modalimg01 = '/img/pessoaCurvada.jpg';

const tituloModal = "Fisioterapia Pós-Operatória e Drenagem Linfática";

export default function Modal06() {
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
      <button onClick={() => setIsOpen(true)} className="btnCardCuidados">
        Ver mais sobre
      </button>

      {/* Fundo escuro e modal */}
      {isOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bgBlur" onClick={() => setIsOpen(false)}>
          <div className="modalCuidados" onClick={(e) => e.stopPropagation()}>
            <div className="border-b-[1px] w-full px-4 border-gray-700 flex justify-between flex-col-reverse items-center">
              <h2 className="modalCuidadoTittle">
                {tituloModal}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="modalCuidadoBtn"
              >
                Fechar
              </button>
            </div>

            <img
              className="imgModalCuidados"
              src={modalimg01}
              alt=""
            />

            <p className="pModalCuidados">
            Alguns procedimentos podem acelerar a recuperação e melhorar o resultado estético.
            </p>

            <div className="cardAlert">
              <ul className="text-left space-y-6">
                
                <li className="list-disc marker:text-blue-500">Drenagem Linfática Manual: Recomendada para ajudar a reduzir o inchaço e eliminar líquidos retidos, a drenagem deve ser feita por um profissional capacitado e conforme orientação do cirurgião.</li>
                <li className="list-disc marker:text-blue-500">Outras Terapias: Seu médico pode indicar sessões de ultrassom, laser terapêutico ou outras técnicas para otimizar a cicatrização e diminuir fibroses.</li>

              </ul>
            </div>
            
            </div>
          </div>
        
      )}
    </div>
  );
}
