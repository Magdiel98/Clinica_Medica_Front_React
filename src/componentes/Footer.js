import LogoVerde from './img/logo_fundo_removido_verde.png';
import '../styles/componentes/footer.scss'
import { Link } from 'react-router-dom';


function Footer(){
    return(
        <footer>
            <div>
                <img src={LogoVerde} alt='Logo da Clínica'/>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i><span>Instagram</span></a>
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i><span>Whatsapp</span></a>
            </div>
            <span id='direitos'><i className="bi bi-at"></i>Copyright Clínica Médica, 
                todos os direitos reservados</span>
            <ul id='listabaixo'>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/agendar">Agendar Consulta</Link></li>
                <li><Link to="/corpo">Corpo Clínico</Link></li>
                <li><Link to="/faleconosco">Fale Conosco</Link></li>
            </ul>
        </footer>
    );
}


export default Footer;