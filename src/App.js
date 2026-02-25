import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Agendar from "./componentes/Agendar";
import Home from "./componentes/Home";
import Consulta from "./componentes/Consulta";
import Cadastro_Paciente from "./componentes/Cadastro_Paciente";
import Cadastro_Medico from "./componentes/Cadastro_Medico";
import Corpo from "./componentes/Corpo";
import Fale_Conosco from "./componentes/Fale_Conosco";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
      <Header /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendar" element={<Agendar />} />
        <Route path="/consulta" element={<Consulta />} />
        <Route path="/cadastro_paciente" element={<Cadastro_Paciente />} />
        <Route path="/cadastro_medico" element={<Cadastro_Medico />} />
        <Route path="/corpo" element={<Corpo />} />
        <Route path="/fale_conosco" element={<Fale_Conosco />} />
      </Routes>

      <Footer />
    </>
    
  );
}

export default App;
