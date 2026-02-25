import "../styles/componentes/cadastro_paciente.scss";
import { useState } from "react";

function Cadastro_Paciente(){

    const [form, setForm] = useState({
        nome: "",
        cpf: "",
        telefones: [""],
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/pacientes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            if (!response.ok) {
                throw new Error("Erro ao cadastrar paciente");
            }

            alert("Paciente cadastrado com sucesso!");

            setForm({
                nome: "",
                cpf: "",
                telefones: [""],
                email: ""
            });

        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar paciente");
        }
    };

    return(
        <main>
            <h1>CADASTRO PACIENTE</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">NOME COMPLETO</label>
                    <input
                        type="text"
                        name="nome"
                        value={form.nome}
                        className="form-control"
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">CPF</label>
                    <input
                        type="text"
                        name="cpf"
                        value={form.cpf}
                        className="form-control"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">TELEFONE</label>
                    <input
                    type="tel"
                    name="telefones"
                    value={form.telefones[0]}
                    className="form-control"
                    onChange={(e) =>
                        setForm(prev => ({
                            ...prev,
                            telefones: [e.target.value]
                        }))
                    }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">EMAIL</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        className="form-control"
                        onChange={handleChange}
                        required
                    />
                </div>

                <button id="enviar" type="submit" className="btn btn-primary">
                    ENVIAR
                </button>
            </form>
        </main>
    );
}

export default Cadastro_Paciente;