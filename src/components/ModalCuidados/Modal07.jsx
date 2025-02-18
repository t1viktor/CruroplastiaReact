import { useState, useEffect } from "react";

const modalimg01 = '/img/pacienteTranquila.jpg';

const tituloModal = "Recomendações Finais para um Pós-operatório Tranquilo";

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
            A recuperação completa é um processo gradual, que depende tanto do trabalho da equipe médica quanto dos cuidados diários que você realiza. Com disciplina e atenção às recomendações, você estará no caminho para uma recuperação mais rápida e segura, alcançando os melhores resultados possíveis na sua abdominoplastia.
            </p>

            <div className="cardAlert text-left space-y-4">
              <h2 className="text-blue-400 text-xl">Controle do Inchaço</h2>
              <li className="marker:text-blue-400 list-disc">Utilize compressas frias na região abdominal conforme a orientação médica para ajudar a reduzir o inchaço.</li>

              <h2 className="text-blue-400 text-xl">Evite Tabagismo</h2>
              <li className="marker:text-blue-400 list-disc">Não fume, pois o cigarro compromete a oxigenação dos tecidos e dificulta a cicatrização.</li>

              <h2 className="text-blue-400 text-xl">Atente-se aos retornos médicos</h2>
              <li className="marker:text-blue-400 list-disc">Compareça a todas as consultas de revisão para garantir que sua recuperação está no caminho certo.</li>
            </div>

            
          </div>
        </div>
      )}
    </div>
  );
}
