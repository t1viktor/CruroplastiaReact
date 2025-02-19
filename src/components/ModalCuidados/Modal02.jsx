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

<p className="pModalCuidados">
Manter uma dieta equilibrada é essencial para a cicatrização, pois fornece os nutrientes necessários ao organismo.
            </p>

            <div className="grid grid-cols-2 max-lg:grid-cols-1 w-full p-3 gap-5">

              <div className="bg-slate-700 px-2 py-4 text-left rounded-lg w-full space-y-5">
                <h2 className="text-blue-400">
                O Que Comer
                </h2>
                <ul className="list-disc px-6 text-gray-100 space-y-5">
                  <li className="liCardCuidados">Proteínas Magras: Frango, peixe, ovos e leguminosas ajudam na regeneração dos tecidos.</li>
                  <li className="liCardCuidados">Frutas e Vegetais: Ricos em vitaminas e antioxidantes, auxiliam no combate à inflamação e fortalecem o sistema imunológico.
                  </li>
                  <li className="liCardCuidados">Fibras: Alimentos integrais, frutas e verduras evitam a constipação, comum após a cirurgia devido ao menor movimento e uso de medicações.</li>
                  
                </ul>
              </div>

              <div className="bg-slate-700 px-2 py-4 text-left rounded-lg w-full space-y-5">
                <h2 className="text-blue-400">
                Evite
                </h2>
                <ul className="list-disc px-6 text-gray-100 space-y-5">
                  <li className="liCardCuidados">Alimentos Processados e Ricos em Sódio: Eles promovem a retenção de líquidos, aumentando o inchaço.</li>
                  <li className="liCardCuidados">Açúcares e Frituras: Podem agravar processos inflamatórios e retardar a cicatrização.</li>
                  <li className="liCardCuidados">Álcool e Cafeína: Podem atrapalhar a hidratação e a absorção de nutrientes, prejudicando a recuperação.
                  </li>
                </ul>
              </div>

              </div>            

          </div>
        </div>
      )}
    </div>
  );
}
