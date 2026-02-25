import "../styles/componentes/consulta.scss"
import { useEffect, useState } from "react";

function Consulta(){

    const [consultas, setConsultas] = useState([]);

    useEffect(() => {
        fetch("https://clinica-medica-8pva.onrender.com/consultas")
            .then((response) => response.json())
            .then((data) => {
                setConsultas(data);
            })
            .catch((error) => console.error("Erro ao buscar consultas:", error));
    }, []);

    return(
        <main>
            <h1>CONSULTAS</h1>
            <div id="conjunto">
                { consultas.map((item, index) => (
                    <div className="card" key={index}>
                        <p><strong>Data:</strong> {item.data}</p>
                        <p><strong>Hora:</strong> {item.hora}</p>
                        <p><strong>Status:</strong> {item.status}</p>
                        <p><strong>Paciente:</strong> {item.paciente}</p>
                        <p><strong>Medico:</strong> {item.medico}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Consulta;