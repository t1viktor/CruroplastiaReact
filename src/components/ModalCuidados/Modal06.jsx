import { useState, useEffect } from "react";

const modalimg01 = '/img/pessoaCurvada.jpg';

const tituloModal = "Posições Corporais";

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
            As posições adotadas no pós-operatório são muito importantes para proteger a ferida e ajudar na sua recuperação.
            </p>

            <div className="cardAlert">
              <ul className="text-left space-y-6">
                <h2 className="text-blue-400 text-xl">Deitar-se com tronco elevado e pernas flexionadas</h2>
                <li className="list-disc marker:text-blue-500">Adote essa posição para descansar, pois ela reduz a pressão no abdômen e contribui para a cicatrização.</li>
                <h2 className="text-blue-400 text-xl">Evitar posturas eretas nos primeiros dias</h2>
                <li className="list-disc marker:text-blue-500">Caminhe levemente curvado para frente até que o médico autorize a retomar a postura reta. Isso reduz a tensão na área da cicatriz.</li>

              </ul>
            </div>
            
            </div>
          </div>
        
      )}
    </div>
  );
}
