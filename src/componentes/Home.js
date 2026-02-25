import { Link } from "react-router-dom";
import '../styles/componentes/home.scss';


import Consulta1 from './img/consulta1.jpg';
import Consulta2 from './img/consulta2.jpg';
import Glicose from './img/glicose.jpg';
import Hemograma from './img/hemograma.jpg';
import Mamografia from './img/mamografia.jpg';
import Medico from './img/medico.jpg';
import Ultrassom from './img/ultrassom.jpg';
import Ureia from './img/ureia.jpg';

function Home(){
    return(
        <main>
            <div id="sobre">
                <h1>SOBRE NÓS</h1>
                <div id="conjuntosobre">
                    <div id="sobretexto">
                        <div id="sobrecirurgiao" className="card">
                            <img src={Medico} className="card-img-top" alt="Cirurgião" />
                            <div className="card-body">
                                <p className="card-text">
                                    Cirurgião é o médico especializado no tratamento de
                                    doenças, lesões e deformidades por meio de procedimentos
                                    cirúrgicos.
                                </p>
                            </div>
                        </div>
                        <div id="sobredescricao">
                            <div className="card">
                                <p>
                                    Clínica Médica é um espaço dedicado ao cuidado
                                    integral da saúde, oferecendo atendimento médico
                                    humanizado, diagnóstico preciso e acompanhamento
                                    contínuo dos pacientes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

         
            <div id="exames">
                <h1>EXAMES MÉDICOS E LABORATORIAIS</h1>
                <div id="cardsexames">
                    <div id="tresprimeiros">
                        <div className="cards">
                            <img src={Hemograma} alt="Hemograma" />
                            <div className="cardtexto">
                                <p>HEMOGRAMA</p>
                            </div>
                        </div>
                        <div className="cards">
                            <img src={Glicose} alt="Glicose" />
                            <div className="cardtexto">
                                <p>GLICOSE</p>
                            </div>
                        </div>
                        <div className="cards">
                            <img src={Ureia} alt="Ureia" />
                            <div className="cardtexto">
                                <p>UREIA</p>
                            </div>
                        </div>
                    </div>

                    <div id="doisultimos">
                        <div className="cards">
                            <img src={Mamografia} alt="Mamografia" />
                            <div className="cardtexto">
                                <p>MAMOGRAFIA</p>
                            </div>
                        </div>
                        <div className="cards">
                            <img src={Ultrassom} alt="Ultrassom" />
                            <div className="cardtexto">
                                <p>ULTRASSOM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div id="agendar">
                <div id="duasimagens">
                    <img src={Consulta1} alt="Consulta 1" />
                    <img src={Consulta2} alt="Consulta 2" />
                </div>
                <div id="boxagendar">
                    <p>AGENDAR SUA CONSULTA:</p>
                    
                    <Link to="/agendar">
                        <button>AGENDAR</button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Home;