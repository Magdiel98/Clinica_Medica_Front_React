import LogoBranco from './img/logo_fundo_removido_branco.png';
import {Link} from 'react-router-dom';

import '../styles/componentes/header.scss';
import { useState } from 'react';

function Header(){

    const [visual, setVisual] = useState(false);

    return(
        <>
            <header>
                <img src={LogoBranco}/>
                <nav id='lista1'>
                    <ul id='listacima'>
                        <li><Link to="/">INÍCIO</Link></li>
                        <li><Link to="/agendar">AGENDAR CONSULTA</Link></li>
                        <li><Link to="/corpo">CORPO CLÍNICO</Link></li>
                        <li><Link to="/faleconosco">FALE CONOSCO</Link></li>
                    </ul>
                     <button type="button" className="btn" id="botaolista" onClick={() => setVisual(!visual)}>
                        <i class="bi bi-list"></i>
                    </button>
                    <ul id="listaburguer" className="card" style={{ display: visual ? "block" : "none" }}>
                        <li><Link to="/">INÍCIO</Link></li>
                        <li><Link to="/agendar">AGENDAR CONSULTA</Link></li>
                        <li><Link to="/corpo">CORPO CLÍNICO</Link></li>
                        <li><Link to="/faleconosco">FALE CONOSCO</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                
            </main>
        </>
    );
}

export default Header;