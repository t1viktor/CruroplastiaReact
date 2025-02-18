import { useState, useEffect } from "react";

const modalimg01 = '/img/comidaSaudavel.jpg';

const tituloModal = "Cuidados com a Alimentação";

export default function Modal02() {
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

            <div className="grid grid-cols-2 max-lg:grid-cols-1 w-full p-3 gap-5">

              <div className="bg-slate-700 px-2 py-4 text-left rounded-lg w-full space-y-5">
                <h2 className="text-blue-400">
                Proteínas
                </h2>
                <ul className="list-disc px-6 text-gray-100 space-y-5">
                  <li className="liCardCuidados">Carnes magras</li>
                  <li className="liCardCuidados">Peixes</li>
                  <li className="liCardCuidados">Ovos</li>
                  <li className="liCardCuidados">Leguminosas</li>
                </ul>
              </div>

              <div className="bg-slate-700 px-2 py-4 text-left rounded-lg w-full space-y-5">
                <h2 className="text-blue-400">
                Vegetais
                </h2>
                <ul className="list-disc px-6 text-gray-100 space-y-5">
                  <li className="liCardCuidados">Vegetais folhosos</li>
                  <li className="liCardCuidados">Frutas ricas em vitamina C</li>
                  <li className="liCardCuidados">Legumes variados</li>
                </ul>
              </div>

              </div>
              <h2 className="text-blue-400 text-left text-2xl">Alimentos a Evitar</h2>

              <div className="cardAlert w-[80%]">
              <ul className="text-left list-disc space-y-3 liCardCuidados">
                <li>Alimentos processados e ricos em sódio</li>
                <li>Açúcar e frituras</li>
                <li>Álcool e cafeína</li>
              </ul>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}
