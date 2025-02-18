import { useState, useEffect } from "react";

const modalimg01 = '/img/CA1A2644.JPEG';
const modalimg02 = '/img/fotoExplicando.JPEG';
const modalimg03 = '/img/fotoConsulta.JPEG';

const tituloModal = "Fisioterapia Pós-operatória";

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

            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4 space-y-12 px-2">

<div className="flex items-center justify-center">
            <img loading="lazy"
              className="imgCardCuidados"
              src={modalimg01}
              alt=""
            />
</div>

<div className=" w-full bg-slate-700 rounded-lg flex flex-col items-center justify-center justify-items-center p-6">
  <h2 className="text-blue-400 text-lg font-bold">Drenagem Linfática Manual:</h2>
  <p className="text-gray-100 ">A drenagem linfática é uma técnica suave que ajuda a reduzir o inchaço e eliminar líquidos retidos, o que melhora o conforto e acelera a recuperação. Realizada por fisioterapeutas especializados, a drenagem previne a formação de fibroses e otimiza a circulação linfática.</p>
</div>

<div className="flex items-center justify-center">
            <img loading="lazy"
              className="imgCardCuidados"
              src={modalimg02}
              alt=""
            />
</div>

<div className=" w-full bg-slate-700 rounded-lg flex flex-col items-center justify-center justify-items-center p-6">
  <h2 className="text-blue-400 text-lg font-bold">Carboxiterapia:</h2>
  <p className="text-gray-100 ">Esse tratamento utiliza pequenas injeções de gás carbônico no tecido subcutâneo, o que melhora a oxigenação local e contribui para uma cicatrização mais uniforme e saudável. A carboxiterapia também ajuda a reduzir a formação de fibroses, mantendo a pele mais lisa e flexível.</p>
</div>

<div className="flex items-center justify-center">
            <img loading="lazy"
              className="imgCardCuidados "
              src={modalimg03}
              alt=""
            />
</div>

<div className=" w-full bg-slate-700 rounded-lg flex flex-col items-center justify-center justify-items-center p-6">
  <h2 className="text-blue-400 text-lg font-bold">Terapias com Laser:</h2>
  <p className="text-gray-100 ">O uso de lasers específicos no pós-operatório ajuda a estimular a regeneração celular, melhorando a qualidade da cicatriz e diminuindo a inflamação. Lasers terapêuticos também auxiliam na prevenção de retrações cutâneas e na formação de cicatrizes hipertróficas.</p>
</div>

 </div>

 <div className="cardAlert">Esses tratamentos devem ser realizados por profissionais especializados, em frequência e duração recomendadas pelo seu cirurgião e fisioterapeuta.</div>

            
          </div>
        </div>
      )}
    </div>
  );
}
