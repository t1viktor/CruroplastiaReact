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
              Após a abdominoplastia, o corpo precisa de um período de
              recuperação para se ajustar e cicatrizar. Siga as orientações
              abaixo para proteger a área operada e reduzir o risco de
              complicações:
            </p>

            <ul className="ulModalCuidados">
              <li className="liModalCuidados">Evite esforços físicos: Nos primeiros 15 dias, evite qualquer tipo de esforço ou movimento brusco. Isso inclui carregar peso, subir escadas em excesso ou fazer exercícios físicos.</li>
              <li className="liModalCuidados">Repouse adequadamente: O repouso é essencial nos primeiros dias. Prefira descansar em uma posição levemente inclinada, com o tronco elevado e os joelhos flexionados para aliviar a tensão na área abdominal.</li>
              <li className="liModalCuidados">Movimente-se com cuidado: Movimente-se devagar e, sempre que possível, com o auxílio de outra pessoa, principalmente nas primeiras 48 horas. Pequenas caminhadas ajudam a ativar a circulação e prevenir trombose.</li>
              <li className="liModalCuidados">Atenção aos sinais de alerta: Caso observe sangramentos, febre, dor intensa e persistente, vermelhidão ou inchaço anormal, entre em contato com sua equipe médica imediatamente.</li>
            </ul>

            <h2 className="text-blue-400 text-3xl">Sinais de Alerta</h2>
            <div className="cardAlert space-y-3">
              <h2 className="text-yellow-500 text-xl text-left">Contate seu médico imediatamente se observar:</h2>
              <ul className="list-disc text-left font-normal">
                <li>Sangramentos</li>
                <li>Febre</li>
                <li>Dor intensa e persistente</li>
                <li>Vermelhidão ou inchaço anormal</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
