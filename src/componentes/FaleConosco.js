import "../styles/componentes/faleconosco.scss";

function FaleConosco(){
    return(
        <main className="container mt-4">
            <h1>FALE CONOSCO</h1>

            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        NOME COMPLETO
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                    />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="telefone" className="form-label">
                        TELEFONE
                    </label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        EMAIL
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                    />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="mensagem" className="form-label">
                        MENSAGEM
                    </label>
                    <textarea
                        className="form-control"
                        name="mensagem"
                        id="mensagem"
                        rows="9"
                    ></textarea>
                </div>

                <button id="enviar" type="submit" className="btn btn-primary">
                    ENVIAR
                </button>
            </form>
        </main>
    );
}

export default FaleConosco;       