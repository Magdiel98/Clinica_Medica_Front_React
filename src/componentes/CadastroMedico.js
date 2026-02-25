import "../styles/componentes/cadastromedico.scss";
import { useState } from "react";

function CadastroMedico(){

    const [form, setForm] = useState({
        nome: "",
        crm: "",
        telefones: [""],
        email: ""
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/medicos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            if (!response.ok) {
                throw new Error("Erro ao cadastrar médico");
            }

            const data = await response.json();
            console.log("Sucesso:", data);

            alert("Médico cadastrado com sucesso!");

            setForm({
                nome: "",
                crm: "",
                telefones: [""],
                email: ""
            });

        } catch (error) {
            console.error("Erro:", error);
        }
    };

    return(
        <main>
            <h1>CADASTRO MÉDICO</h1>

            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label className="form-label">NOME COMPLETO</label>
                    <input
                        type="text"
                        name="nome"
                        value={form.nome}
                        className="form-control"
                        onChange={handleFormChange}
                        required
                    />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">CRM</label>
                    <input
                        type="text"
                        name="crm"
                        value={form.crm}
                        className="form-control"
                        onChange={handleFormChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">TELEFONE</label>
                    <input
                        type="tel"
                        value={form.telefones[0]}
                        className="form-control"
                        onChange={(e) =>
                            setForm(prev => ({
                                ...prev,
                                telefones: [e.target.value]
                            }))
                        }
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">EMAIL</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        className="form-control"
                        onChange={handleFormChange}
                    />
                </div>

                <button id="enviar" type="submit" className="btn btn-primary">
                    ENVIAR
                </button>
            </form>
        </main>
    );
}

export default CadastroMedico;