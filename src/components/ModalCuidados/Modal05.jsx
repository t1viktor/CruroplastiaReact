import { useState, useEffect } from "react";

const tituloModal = " Uso da Cinta e das Meias de Compressão";

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
            O uso adequado da cinta e das meias de compressão é essencial para a recuperação, pois ajuda na contenção do edema, no suporte à pele e na prevenção de trombose.
            </p>

            <div className="grid grid-cols-2 max-lg:grid-cols-1 w-full p-3 gap-5">

              <div className="bg-slate-700 px-2 py-4 text-left rounded-lg w-full space-y-5">
                <h2 className="text-blue-400">
                Cinta Abdominal
                </h2>
                <ul className="list-disc px-6 text-gray-100 space-y-5">
                  <li className="liCardCuidados">Utilize a cinta 24 horas por dia durante o primeiro mês, removendo apenas para a higiene. O tempo de uso poderá variar de acordo com a orientação médica, mas em média, ela deve ser usada por cerca de dois a três meses.</li>
                  <li className="liCardCuidados">Certifique-se de que a cinta está ajustada ao corpo, mas não apertada demais. Ajustes muito intensos podem prejudicar a circulação e causar desconforto.</li>
                 
                </ul>
              </div>

              <div className="bg-slate-700 px-2 py-4 text-left rounded-lg w-full space-y-5">
                <h2 className="text-blue-400">
                Meias de Compressão
                </h2>
                <ul className="list-disc px-6 text-gray-100 space-y-5">
                  <li className="liCardCuidados">As meias de compressão são fundamentais para prevenir tromboses. Use-as diariamente pelo período orientado pelo seu cirurgião (em geral, de 14 a 28 dias).</li>
                  <li className="liCardCuidados">As meias podem ser retiradas para dormir (após a primeira semana), conforme a orientação médica.</li>
                  
                </ul>
              </div>

              </div>
              <h2 className="text-blue-400 text-left text-2xl">Cuidados com o Ajuste</h2>

              <div className="cardAlert w-[80%]">
              <ul className="text-left list-disc space-y-3 liCardCuidados">
                <h2 className="text-xl text-left">A cinta deve estar:</h2>
                <li>Bem ajustada, mas não excessivamente apertada</li>
                <li>Sem dobras ou rugas que possam marcar a pele</li>
                <li>Cobrindo toda a região operada</li>
              </ul>

            </div>

            <h2 className="pModalCuidados">Benefícios do Uso Correto</h2>

            <div className="grid grid-cols-2 max-lg:grid-cols-1 w-full p-3 gap-5">

              <div className="bg-slate-700 px-2 py-4 text-left rounded-lg w-full space-y-5">
                
                <ul className="list-disc px-6 text-gray-100 space-y-5">
                  <li className="liCardCuidados">Redução do Inchaço</li>
                  <li className="liCardCuidados">Ajuda a diminuir o edema pós-operatório</li>
                </ul>
              </div>

              <div className="bg-slate-700 px-2 py-4 text-left rounded-lg w-full space-y-5">
                
                <ul className="list-disc px-6 text-gray-100 space-y-5">
                  <li className="liCardCuidados">Melhor Cicatrização</li>
                  <li className="liCardCuidados">Auxilia na adesão dos tecidos</li>
                </ul>

              </div>

              <div className="bg-slate-700 px-2 py-4 text-left rounded-lg w-full space-y-5">
                
                <ul className="list-disc px-6 text-gray-100 space-y-5">
                  <li className="liCardCuidados">Suporte Muscular</li>
                  <li className="liCardCuidados">Oferece apoio à musculatura operada</li>
                </ul>

              </div>
                

              </div>
              <h2 className="text-blue-400 text-left text-2xl">Higienização da Cinta</h2>

              <div className="cardAlert w-[80%]">
              <ul className="text-left list-disc space-y-3 liCardCuidados">
                <li>Lave a cinta delicadamente com sabão neutro</li>
                <li>Não use alvejante ou produtos abrasivos</li>
                <li>Seque à sombra, evitando exposição direta ao sol</li>
                <li>Recomenda-se ter duas cintas para revezamento</li>
              </ul>

            </div>

            <h2 className="text-blue-400 text-left text-2xl">Sinais de Ajuste Inadequado</h2>

              <div className="cardAlert w-[80%]">
              <ul className="text-left list-disc space-y-3 liCardCuidados">
                <li>Dificuldade para respirar</li>
                <li>Dormência excessiva</li>
                <li>Marcas profundas na pele</li>
                <li>Dobras ou enrugamento da cinta</li>
              </ul>

            </div>


{/*  */}
                <h2 className="text-blue-400 text-center text-2xl">Meias de Compressão</h2>

<div className="grid grid-cols-2 max-lg:grid-cols-1 w-full p-3 gap-5">

              <div className="bg-slate-700 px-2 py-4 text-left rounded-lg w-full space-y-5">

                <h2 className="text-blue-400 text-left text-xl">Período de Uso</h2>
                
                <ul className="list-disc px-6 text-gray-100 space-y-5">
                  <li className="liCardCuidados">Use durante 14 a 28 dias</li>
                  <li className="liCardCuidados">Pode ser retirada para dormir após a primeira semana</li>
                </ul>
              </div>

              <div className="bg-slate-700 px-2 py-4 text-left rounded-lg w-full space-y-5">

                <h2 className="text-blue-400 text-left text-xl">Importância</h2>
                
                <ul className="list-disc liCardCuidados px-6 text-gray-100 space-y-5">
                  <li className="">Previne trombose</li>
                  <li className="">Melhora a circulação</li>
                  <li>Reduz o risco de edema</li>
                </ul>
              </div>
              </div>
 
          </div>
        </div>
      )}
    </div>
  );
}
