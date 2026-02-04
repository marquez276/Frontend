import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

function EditarProjeto() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isAdmin } = useAuth();
    const [loading, setLoading] = useState(true);
    const [projeto, setProjeto] = useState({
        nome: '',
        categoria: '',
        descricao: '',
        cidade: '',
        estado: '',
        status: 'Pendente'
    });

    useEffect(() => {
        if (!isAdmin()) {
            navigate('/');
            return;
        }
        carregarProjeto();
    }, [id, isAdmin, navigate]);

    const carregarProjeto = async () => {
        try {
            const response = await api.get(`/projetos/${id}`);
            setProjeto(response.data);
            setLoading(false);
        } catch (err) {
            console.error('Erro ao carregar projeto:', err);
            alert('Erro ao carregar projeto');
            navigate('/admin-projetos');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/projetos/${id}`, projeto);
            alert('Projeto atualizado com sucesso!');
            navigate('/admin-projetos');
        } catch (err) {
            console.error('Erro ao atualizar projeto:', err);
            alert('Erro ao atualizar projeto');
        }
    };

    const handleChange = (e) => {
        setProjeto({
            ...projeto,
            [e.target.name]: e.target.value
        });
    };

    if (loading) return <div className="app-container">Carregando...</div>;

    return (
        <div className="app-container">
            <div className="main-content">
                ✏️ Editar Projeto
            </div>

            <form onSubmit={handleSubmit} className="admin-container">
                <div className="form-group">
                    <label>Nome do Projeto:</label>
                    <input
                        type="text"
                        name="nome"
                        value={projeto.nome}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Categoria:</label>
                    <select name="categoria" value={projeto.categoria} onChange={handleChange} required>
                        <option value="">Selecione uma categoria</option>
                        <option value="Energia Renovável">Energia Renovável</option>
                        <option value="Reciclagem">Reciclagem</option>
                        <option value="Agricultura Sustentável">Agricultura Sustentável</option>
                        <option value="Conservação da Água">Conservação da Água</option>
                        <option value="Transporte Verde">Transporte Verde</option>
                        <option value="Construção Sustentável">Construção Sustentável</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Descrição:</label>
                    <textarea
                        name="descricao"
                        value={projeto.descricao}
                        onChange={handleChange}
                        rows="4"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Cidade:</label>
                    <input
                        type="text"
                        name="cidade"
                        value={projeto.cidade}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Estado:</label>
                    <input
                        type="text"
                        name="estado"
                        value={projeto.estado}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Status:</label>
                    <select name="status" value={projeto.status} onChange={handleChange}>
                        <option value="Pendente">Pendente</option>
                        <option value="Aprovado">Aprovado</option>
                        <option value="Rejeitado">Rejeitado</option>
                    </select>
                </div>

                <div className="form-actions">
                    <button type="submit">Salvar Alterações</button>
                    <button type="button" onClick={() => navigate('/admin-projetos')} className="btn-cancelar">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditarProjeto;