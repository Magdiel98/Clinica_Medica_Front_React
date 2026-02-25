import "../styles/componentes/corpo.scss"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Corpo(){

    const [medicos, setMedicos] = useState([]);
    
        useEffect(() => {
            fetch("http://localhost:8080/medicos")
                .then((response) => response.json())
                .then((data) => {
                    setMedicos(data);
                })
                .catch((error) => console.error("Erro ao buscar consultas:", error));
        }, []);
    
        

    return(
        <main>
            <h1>CORPO CLÍNICO</h1>
            <Link id="cadastro" to="/cadastro_medico">Cadastro Médico</Link>
            <div id="conjunto">
                { medicos.map((item, index) => (
                    <div id="cartao" className="card" key={index}>
                        <p><strong>Nome:</strong> {item.nome}</p>
                        <p><strong>Email:</strong> {item.email}</p>
                        <p><strong>CRM:</strong> {item.crm}</p>
                        <p><strong>Telefone:</strong> {item.telefone}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Corpo;