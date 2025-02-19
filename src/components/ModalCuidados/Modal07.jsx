import { useState, useEffect } from "react";

const modalimg01 = '/img/pacienteTranquila.jpg';

const tituloModal = "Proteção Contra o Sol";

export default function Modal07() {
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

            <p className="pModalCuidados p-3 text-left">
            Proteger a cicatriz do sol é fundamental para evitar o escurecimento da cicatriz e melhorar o aspecto final da pele.

            </p>

            <div className="cardAlert text-left space-y-4">
              
              <li className="marker:text-blue-400 list-disc">Evite Exposição Solar Direta: Pelo menos nos primeiros 3 meses, mantenha a região coberta por roupas leves e de preferência use protetor solar com alto FPS assim que autorizado pelo cirurgião.</li>

              
              <li className="marker:text-blue-400 list-disc">Roupa Adequada: Caso saia ao ar livre, use calças leves e confortáveis que cubram a área operada, protegendo-a da luz solar direta.</li>

            </div>

            
          </div>
        </div>
      )}
    </div>
  );
}
