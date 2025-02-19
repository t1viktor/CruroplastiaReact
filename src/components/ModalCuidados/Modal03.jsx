import { useState, useEffect } from "react";

const modalimg01 = '/img/pessoaLavandoMaos.jpg';

const tituloModal = "Higiene e Cuidados com a Ferida Operatória";

export default function Modal03() {
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
        <div className="fixed z-50 inset-0 flex items-center  justify-center bgBlur" onClick={() => setIsOpen(false)}>
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

            <div className="space-y-12 flex flex-col items-center">

            

            <img
              className="imgModalCuidados"
              src={modalimg01}
              alt=""
            />

            <p className="pModalCuidados">
            Manter a área operada limpa e protegida é fundamental para evitar infecções e garantir uma cicatrização adequada.
            </p>

            <ul className="cardAlert text-gray-100 list-disc liCardCuidados mx-6 text-left">
              <li>Banhos: Em geral, banhos rápidos e mornos são liberados após 24 a 48 horas, seguindo as orientações do seu cirurgião. Evite água muito quente e não esfregue a região operada.</li>
              <li>Curativos: Troque-os conforme as instruções médicas, sempre com as mãos limpas. Use apenas produtos recomendados e, se indicado, antissépticos recomendados pelo cirurgião.</li>
              <li>Secagem Suave: Após o banho, seque a região delicadamente com uma toalha macia, sem atrito excessivo. Mantenha o local limpo e arejado.</li>
            </ul>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
