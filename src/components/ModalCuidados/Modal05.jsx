import { useState, useEffect } from "react";

const tituloModal = "Posições Corporais e Movimentação";

export default function Modal05() {
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

           

            <p className="text-blue-400 text-left px-4">
            A postura correta e o cuidado ao se mover fazem a diferença no conforto e na cicatrização da região operada.
            </p>

            <div className="grid grid-cols-1 max-lg:grid-cols-1 w-full p-3 gap-5">

              <div className="bg-slate-700 px-2 py-4 text-left rounded-lg w-full space-y-5">
               
                <ul className="list-disc px-6 text-gray-100 space-y-5">
                  <li className="liCardCuidados">Ao Dormir: Prefira dormir de barriga para cima, com um leve ângulo elevado na cabeceira, caso indicado. O uso de almofadas sob os joelhos pode ajudar a reduzir a tensão na área operada.</li>
                  <li className="liCardCuidados">Ao Sentar e Levantar: Faça movimentos lentos e suaves, evitando flexionar as coxas exageradamente nos primeiros dias. Caso necessário, apoie-se cuidadosamente em uma superfície para levantar-se.</li>
                  <li className="liCardCuidados">Evite Exercícios Pesados: Atividades físicas intensas, alongamentos extremos e exercícios que forcem a região devem ser evitados até a liberação médica, que normalmente ocorre após algumas semanas.</li>
                 
                </ul>
              </div>
              </div>         
 
          </div>
        </div>
      )}
    </div>
  );
}
