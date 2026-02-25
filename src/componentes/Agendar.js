import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/componentes/agendar.scss";

function Agendar(){

    const [form, setForm] = useState({
        data: "",
        hora: "",
        paciente: "",
        medico: ""
    });

    const [pacientes, setPacientes] = useState([]);
    const [medicos, setMedicos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/pacientes")
            .then(res => res.json())
            .then(data => setPacientes(data));

        fetch("http://localhost:8080/medicos")
            .then(res => res.json())
            .then(data => setMedicos(data));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

        const handleSubmit = async (e) => {
        e.preventDefault();

        const consulta = {
            data: form.data,
            hora: form.hora,
            pacienteId: Number(form.paciente),
            medicoId: Number(form.medico)
        };

        try {
            const response = await fetch("http://localhost:8080/consultas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(consulta)
            });

            if (!response.ok) {
                const erro = await response.text();
                console.log("Erro do backend:", erro);
                throw new Error("Erro ao agendar consulta");
            }

            alert("Consulta agendada com sucesso!");

            setForm({
                data: "",
                hora: "",
                paciente: "",
                medico: ""
            });

        } catch (error) {
            console.error(error);
            alert("Erro ao agendar consulta");
        }
    };

    return(
        <main>
            <h1>AGENDAR CONSULTA</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">DATA</label>
                    <input 
                        type="date"
                        name="data"
                        value={form.data}
                        className="form-control"
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">HORÁRIO</label>
                    <input 
                        type="time"
                        name="hora"
                        value={form.hora}
                        className="form-control"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">PACIENTE</label>
                    <select 
                        name="paciente"
                        value={form.paciente}
                        className="form-select"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione</option>
                        {pacientes.map(p => (
                            <option key={p.id} value={p.id}>
                                {p.nome}
                            </option>
                        ))}
                    </select>
                </div>
                
                <div className="mb-3">
                    <label className="form-label">MÉDICO</label>
                    <select 
                        name="medico"
                        value={form.medico}
                        className="form-select"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione</option>
                        {medicos.map(m => (
                            <option key={m.id} value={m.id}>
                                {m.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <button id="enviar" type="submit" className="btn btn-primary">
                    ENVIAR
                </button>
            </form>

            <p className="cadastro">
                Ainda não possui cadastro?{" "}
                <Link to="/cadastropaciente">Cadastre-se</Link>
            </p>

            <p className="cadastro">
                <Link to="/consulta">
                    Ver Consultas
                </Link>
            </p>
        </main>
    );
}

export default Agendar;