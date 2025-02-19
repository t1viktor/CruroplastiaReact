import ModalResultados from "./ModalResultados";

export default function Resultados() {
    return (
        <div id="resultados" className="min-h-screen bg-gray-900 flex flex-col items-center px-3 space-y-20 py-12">
            
            <h2 className="text-orange-200 text-5xl">Resultados</h2>

            <div className="grid grid-cols-2 max-lg:grid-cols-1 justify-items-center items-center gap-12">
                <div className="space-y-12 justify-items-center items-center">
                    <h2 className="text-blue-500 text-4xl">Transformação Completa</h2>
                    <p className="text-gray-50 text-center">Os resultados da cruroplastia são notados gradualmente, com a evolução completa em até 6 meses após o procedimento.</p>
                    <ul className="text-gray-50 space-y-5">
                        <li className="relative before:content-['✔']">Coxas mais firmes e definidas</li>
                        <li className="relative before:content-['✔']">Remoção do excesso de pele e gordura</li>
                        <li className="relative before:content-['✔']">Contorno estético harmonioso</li>
                        <li className="relative before:content-['✔']">Melhora da autoestima e confiança</li>
                    </ul>
                    <ModalResultados />
                </div>

                <div className="grid grid-cols-1 max-lg:grid-cols-2 gap-4 items-center justify-items-center">

                    <div className="cardResultados">
                        <h2 className="cardNum text-gray-100 text-5xl font-semibold">30</h2>
                        <p className="text-gray-400 text-xl">Dias de Recuperação</p>
                    </div>

                    <div className="cardResultados">
                        <h2 className="cardNum text-gray-100 text-5xl font-semibold">6</h2>
                        <p className="text-gray-400 text-xl">Meses para Resultado Final</p>
                    </div>
                </div>
            </div>

        </div>
    );
}