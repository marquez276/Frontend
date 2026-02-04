import React, { useState, useEffect } from "react";
import api from "../../services/api";

function AdminIdeias() {
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        api.get("/projetos")
            .then((response) => setProjetos(response.data))
            .catch(err => console.error("Erro ao buscar ideias", err));
    }, []);

    return (
        <div className='app-container'>
            <div className="main-content">
                💡 Gerenciar Ideias Enviadas
            </div>

            <div className="cards-container">
                {projetos.map((projeto) => (
                    <div key={projeto.idProjeto} className="produto-card">
                        {projeto.imagem && (
                            <img src={projeto.imagem} alt={projeto.nome} className="produto-imagem" />
                        )}
                        <h3>{projeto.nome}</h3>
                        <span className="categoria-badge">{projeto.categoria}</span>
                        <p><strong>📍 Local:</strong> {projeto.cidade}</p>
                        <p>{projeto.descricao}</p>
                        <p><strong>👤 Criador:</strong> {projeto.nomeCriador}</p>
                        <p><strong>📞 Contato:</strong> {projeto.contato}</p>
                        <p><strong>Status:</strong> {projeto.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminIdeias;
