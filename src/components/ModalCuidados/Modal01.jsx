import { useState, useEffect } from "react";

const modalimg01 = '/img/pacienteDeitado.jpg';

const tituloModal = "Cuidados Imediatos e Gerais";

export default function Modal01() {
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
            <div className="border-b-[1px] w-full px-4 border-gray-700 flex flex-col-reverse items-center">
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
            Nos primeiros dias após a cirurgia, o corpo precisa de tempo para iniciar a cicatrização e adaptar-se às mudanças estruturais.
            </p>

            <ul className="ulModalCuidados marker:text-blue-500">
              <li className="liModalCuidados">Descanse o máximo possível nas primeiras 48 a 72 horas. Evite atividades físicas intensas e esforços que possam tensionar a área operada.</li>
              <li className="liModalCuidados">Pequenas caminhadas dentro de casa são permitidas após o primeiro dia, ajudando a melhorar a circulação e reduzir o risco de trombose.</li>
              <li className="liModalCuidados">Observe se há vermelhidão intensa, inchaço incomum, febre, dor excessiva ou secreção na ferida. Caso perceba algo fora do normal, contate imediatamente seu cirurgião.</li>
              
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
