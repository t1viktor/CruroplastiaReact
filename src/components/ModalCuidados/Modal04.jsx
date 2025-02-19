import { useState, useEffect } from "react";

const modalimg01 = '/img/comidaSaudavel.jpg';

const tituloModal = "Uso da Malha de Compressão e Meias de Compressão";

export default function Modal04() {
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
A compressão adequada desempenha um papel crucial na redução do inchaço, na prevenção de hematomas e na modelagem adequada do contorno das coxas.
            </p>

            <div className="grid grid-cols-2 max-lg:grid-cols-1 w-full p-3 gap-5">

              <div className="bg-slate-700 px-2 py-4 text-left rounded-lg w-full space-y-5">
                <h2 className="text-blue-400">
                Malha de Compressão para Coxas:
                </h2>
                <ul className="list-disc px-6 text-gray-100 space-y-5">
                  <li className="liCardCuidados">
Duração: Geralmente indicada para uso contínuo (removendo apenas para higiene) nas primeiras 4 a 6 semanas, conforme orientação do cirurgião.
</li>
                  <li className="liCardCuidados">Ajuste: A malha deve ficar justa, porém confortável, sem comprimir a ponto de causar dor ou interferir na circulação.
                  </li>       
                </ul>
              </div>

              <div className="bg-slate-700 px-2 py-4 text-left rounded-lg w-full space-y-5">
                <h2 className="text-blue-400">
                Meias de Compressão: 
                </h2>
                <ul className="list-disc px-6 text-gray-100 space-y-5">
                  <li className="liCardCuidados">Duração: Se o seu cirurgião indicar, utilize as meias de compressão para as pernas, especialmente nas primeiras 3 a 4 semanas, a fim de prevenir trombose e melhorar a circulação.</li>
                  <li className="liCardCuidados">Uso: Siga as orientações quanto ao tempo diário de uso. Em geral, são utilizadas durante o dia e podem ser removidas para dormir (após a primeira semana), se autorizado.</li>
                </ul>
              </div>

              </div>            

          </div>
        </div>
      )}
    </div>
  );
}
