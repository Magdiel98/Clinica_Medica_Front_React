import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Agendar from "./componentes/Agendar";
import Home from "./componentes/Home";
import Consulta from "./componentes/Consulta";
import CadastroPaciente from "./componentes/CadastroPaciente";
import CadastroMedico from "./componentes/CadastroMedico";
import Corpo from "./componentes/Corpo";
import FaleConosco from "./componentes/FaleConosco";

import {Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
      <Header /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendar" element={<Agendar />} />
        <Route path="/consulta" element={<Consulta />} />
        <Route path="/cadastropaciente" element={<CadastroPaciente />} />
        <Route path="/cadastromedico" element={<CadastroMedico />} />
        <Route path="/corpo" element={<Corpo />} />
        <Route path="/faleconosco" element={<FaleConosco />} />
      </Routes>

      <Footer />
    </>
    
  );
}

export default App;
