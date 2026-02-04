import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useAuth } from '../../context/AuthContext';

function ProjetoDetalhes() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isAuthenticated, isAdmin } = useAuth();
    const [projeto, setProjeto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(`/projetos/${id}`)
            .then((response) => {
                setProjeto(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Erro ao buscar projeto", err);
                setLoading(false);
            });
    }, [id]);

    const handleDelete = async () => {
        if (window.confirm('Tem certeza que deseja excluir este projeto?')) {
            try {
                await api.delete(`/projetos/${id}`);
                alert('Projeto excluído com sucesso!');
                navigate('/projetos');
            } catch (err) {
                console.error('Erro ao excluir projeto', err);
                alert('Erro ao excluir projeto');
            }
        }
    };

    if (loading) return <div className="app-container">Carregando...</div>;
    if (!projeto) return <div className="app-container">Projeto não encontrado</div>;

    return (
        <div className='app-container'>
            <div className="main-content">
                🌱 Detalhes do Projeto
            </div>

            <div className="projeto-detalhes-container">
                <button onClick={() => navigate('/projetos')} className="btn btn-voltar">
                    Voltar
                </button>

                {projeto.imagem && (
                    <img 
                        src={projeto.imagem} 
                        alt={projeto.nome} 
                        className="projeto-imagem-detalhes"
                    />
                )}

                <h1>{projeto.nome}</h1>
                <span className="categoria-badge">{projeto.categoria}</span>

                <div className="projeto-info">
                    <p><strong>Cidade:</strong> {projeto.cidade}</p>
                    {projeto.regiao && <p><strong>Região:</strong> {projeto.regiao}</p>}
                    <p><strong>Descrição:</strong></p>
                    <p className="projeto-descricao">{projeto.descricao}</p>
                    <p><strong>Criador:</strong> {projeto.nomeCriador}</p>
                    <p><strong>Contato:</strong> {projeto.contato}</p>
                    <p><strong>Status:</strong> {projeto.status}</p>
                </div>

                {isAdmin() && (
                    <div className="admin-actions">
                        <button 
                            onClick={() => navigate(`/editar-projeto/${id}`)} 
                            className="btn btn-editar"
                        >
                            Editar
                        </button>
                        <button 
                            onClick={handleDelete} 
                            className="btn btn-excluir"
                        >
                            Excluir
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjetoDetalhes;
