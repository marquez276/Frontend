import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useAuth } from '../../context/AuthContext';

function AdminProjetos() {
    const [projetos, setProjetos] = useState([]);
    const { isAdmin } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        carregarProjetos();
    }, []);

    const carregarProjetos = () => {
        api.get("/projetos")
            .then((response) => setProjetos(response.data))
            .catch(err => console.error("Erro ao buscar projetos", err));
    };

    const deletarProjeto = async (id) => {
        if (window.confirm('Tem certeza que deseja excluir este projeto?')) {
            try {
                await api.delete(`/projetos/${id}`);
                alert('Projeto excluído com sucesso!');
                carregarProjetos();
            } catch (err) {
                console.error('Erro ao excluir projeto', err);
                alert('Erro ao excluir projeto');
            }
        }
    };

    return (
        <div className='app-container'>
            <div className="main-content">
                🌿 Gerenciar Projetos
            </div>

            <div style={{ padding: '20px' }}>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Categoria</th>
                            <th>Cidade</th>
                            <th>Criador</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projetos.map((projeto) => (
                            <tr key={projeto.idProjeto}>
                                <td>{projeto.idProjeto}</td>
                                <td>{projeto.nome}</td>
                                <td>{projeto.categoria}</td>
                                <td>{projeto.cidade}</td>
                                <td>{projeto.nomeCriador}</td>
                                <td>{projeto.status}</td>
                                <td>
                                    <button 
                                        onClick={() => navigate(`/projetos/${projeto.idProjeto}`)}
                                        className="btn-admin btn-ver"
                                    >
                                        👁️ Ver
                                    </button>
                                    {isAdmin() && (
                                        <>
                                            <button 
                                                onClick={() => navigate(`/editar-projeto/${projeto.idProjeto}`)}
                                                className="btn-admin btn-editar"
                                            >
                                                ✏️ Editar
                                            </button>
                                            <button 
                                                onClick={() => deletarProjeto(projeto.idProjeto)}
                                                className="btn-admin btn-excluir"
                                            >
                                                🗑️ Excluir
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminProjetos;
