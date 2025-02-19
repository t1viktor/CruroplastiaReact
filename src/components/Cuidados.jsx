import Modal01 from "./ModalCuidados/Modal01";
import Modal02 from "./ModalCuidados/Modal02";
import Modal03 from "./ModalCuidados/Modal03";
import Modal04 from "./ModalCuidados/Modal04";
import Modal05 from "./ModalCuidados/Modal05";
import Modal06 from "./ModalCuidados/Modal06";
import Modal07 from "./ModalCuidados/Modal07";
import Modal08 from "./ModalCuidados/Modal08";

/* import cardimg01 from '../public/img/pacienteDeitado.jpg';
import cardimg02 from '../public/img/comidaSaudavel.jpg';
import cardimg03 from '../public/img/pessoaLavandoMaos.jpg';
import cardimg04 from '../public/img/CA1A2716.JPEG';
import cardimg05 from '../public/img/pacienteDeitado.jpg';
import cardimg06 from '../public/img/pacienteDeitado.jpg';
import cardimg07 from '../public/img/pacienteDeitado.jpg'; */

const cardimg01 = '/img/pacienteDeitado.jpg';
const cardimg02 = '/img/comidaSaudavel.jpg';
const cardimg03 = '/img/pessoaLavandoMaos.jpg';
const cardimg04 = '/img/CA1A2716.JPEG';
const cardimg05 = '/img/cintaPosCirurgica.jpg';
const cardimg06 = '/img/pessoaCurvada.jpg';
const cardimg07 = '/img/fotoSorrindoMto.JPEG';

const tittleCard01Cuidados = "Cuidados Imediatos e Gerais";
const li01Card01Cuidados = "Repouso Relativo";
const li02Card01Cuidados = "Movimentação Leve";
const li03Card01Cuidados = "Atenção aos Sinais de Alerta";

const tittleCard02Cuidados = "Cuidados com a Alimentação";
const li01Card02Cuidados = "O Que Comer";
const li02Card02Cuidados = "O Que Evitar";

const tittleCard03Cuidados = "Higiene e Cuidados com a Ferida Operatória";
const li01Card03Cuidados = "Banhos";
const li02Card03Cuidados = "Curativos";
const li03Card03Cuidados = "Secagem Suave";

const tittleCard04Cuidados = "Uso da Malha de Compressão e Meias de Compressão";
const li01Card04Cuidados = "Malha de Compressão para Coxas";
const li02Card04Cuidados = "Meias de Compressão";
const li03Card04Cuidados = "Duração";

const tittleCard05Cuidados = "Posições Corporais e Movimentação";
const li01Card05Cuidados = "Ao Dormir";
const li02Card05Cuidados = "Ao Sentar e Levantar";
const li03Card05Cuidados = "Evite Exercícios Pesados";

const tittleCard06Cuidados = "Fisioterapia Pós-Operatória e Drenagem Linfática";
const li01Card06Cuidados = "Drenagem Linfática Manual";
const li02Card06Cuidados = "Outras Terapias";

const tittleCard07Cuidados = "Proteção Contra o Sol";
const li01Card07Cuidados = "Evite Exposição Solar Direta";
const li02Card07Cuidados = "Roupa Adequada";

const tittleCard08Cuidados = "Proteção Contra o Sol";
const li01Card08Cuidados = "Não Fume";
const li02Card08Cuidados = "Acompanhamento Médico";
const li03Card08Cuidados = "Paciência e Disciplina";

export default function Cuidados() {
    return (
        <div id="cuidados" className="min-h-[200vh] bg-gradient-to-r from-zinc-800 to-zinc-900 py-30">
            <h1 className="text-5xl max-md:text-4xl py-6 text-center text-white">Cuidados Essenciais</h1>
            <div className="grid grid-cols-3 p-12 max-lg:grid-cols-1 max-lg:space-y-12 gap-4 justify-items-center">
                
                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={cardimg01} alt="" />
                    <h2 className="tituloCardCuidados">{tittleCard01Cuidados}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{li01Card01Cuidados}</li>
                        <li className="liCardCuidados">{li02Card01Cuidados}</li>
                        <li className="liCardCuidados">{li03Card01Cuidados}</li>
                    </ul>
                    <Modal01 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={cardimg02} alt="" />
                    <h2 className="tituloCardCuidados">{tittleCard02Cuidados}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{li01Card02Cuidados}</li>
                        <li className="liCardCuidados">{li02Card02Cuidados}</li>
                        
                    </ul>
                    <Modal02 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={cardimg03} alt="" />
                    <h2 className="tituloCardCuidados">{tittleCard03Cuidados}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{li01Card03Cuidados}</li>
                        <li className="liCardCuidados">{li02Card03Cuidados}</li>
                        <li className="liCardCuidados">{li03Card03Cuidados}</li>
                    </ul>
                    <Modal03 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={cardimg04} alt="" />
                    <h2 className="tituloCardCuidados">{tittleCard04Cuidados}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{li01Card04Cuidados}</li>
                        <li className="liCardCuidados">{li02Card04Cuidados}</li>
                        <li className="liCardCuidados">{li03Card04Cuidados}</li>
                    </ul>
                    <Modal04 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={cardimg05} alt="" />
                    <h2 className="tituloCardCuidados">{tittleCard05Cuidados}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{li01Card05Cuidados}</li>
                        <li className="liCardCuidados">{li02Card05Cuidados}</li>
                        <li className="liCardCuidados">{li03Card05Cuidados}</li>
                    </ul>
                    <Modal05 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={cardimg06} alt="" />
                    <h2 className="tituloCardCuidados">{tittleCard06Cuidados}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{li01Card06Cuidados}</li>
                        <li className="liCardCuidados">{li02Card06Cuidados}</li>
                        
                    </ul>
                    <Modal06 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={cardimg07} alt="" />
                    <h2 className="tituloCardCuidados">{tittleCard07Cuidados}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{li01Card07Cuidados}</li>
                        <li className="liCardCuidados">{li02Card07Cuidados}</li>
                        
                    </ul>
                    <Modal07 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={cardimg07} alt="" />
                    <h2 className="tituloCardCuidados">{tittleCard08Cuidados}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{li01Card08Cuidados}</li>
                        <li className="liCardCuidados">{li02Card08Cuidados}</li>
                        <li className="liCardCuidados">{li03Card08Cuidados}</li>
                    </ul>
                    <Modal08 />
                </div>
                
            </div>
        </div>
    );
}
