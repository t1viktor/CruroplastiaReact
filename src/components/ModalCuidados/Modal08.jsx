import { useState, useEffect } from "react";

const modalimg01 = '/img/pacienteTranquila.jpg';

const tituloModal = "Recomendações Finais";

export default function Modal08() {
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

            <h2 className="pModalCuidados">Adotar essas medidas garante um pós-operatório mais confortável, seguro e com excelentes resultados após a cruroplastia. Em caso de dúvidas ou qualquer alteração inesperada, entre em contato com o seu cirurgião. O cuidado e a atenção nessa fase são fundamentais para alcançar o contorno das coxas desejado e retomar suas atividades com plena confiança.</h2>


            <div className="cardAlert text-left space-y-4">
              
              <li className="marker:text-blue-400 list-disc">Não Fume: O cigarro dificulta a oxigenação dos tecidos, comprometendo a cicatrização e aumentando o risco de complicações.
              </li>

              
              <li className="marker:text-blue-400 list-disc">Acompanhamento Médico: Siga todas as consultas de revisão para que seu cirurgião acompanhe a evolução da cicatriz e do resultado.</li>

              <li className="marker:text-blue-400 list-disc">Paciência e Disciplina: A recuperação completa é um processo gradual. Ao seguir rigorosamente as orientações do seu cirurgião, você estará no caminho certo para um resultado satisfatório e duradouro.
              </li>

            </div>

            
          </div>
        </div>
      )}
    </div>
  );
}
