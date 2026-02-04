import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { useAuth } from '../../context/AuthContext';

function AdminUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const { isAdmin } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        carregarUsuarios();
    }, []);

    const carregarUsuarios = () => {
        api.get("/usuarios")
            .then((response) => {
                setUsuarios(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Erro ao buscar usuários", err);
                setLoading(false);
            });
    };

    const deletarUsuario = async (id, nomeUsuario) => {
        if (!isAdmin()) {
            alert('Apenas administradores podem deletar usuários');
            return;
        }

        if (!confirm(`Tem certeza que deseja deletar o usuário "${nomeUsuario}"? Esta ação não pode ser desfeita.`)) {
            return;
        }

        try {
            await api.delete(`/usuarios/${id}`);
            alert('Usuário deletado com sucesso!');
            carregarUsuarios();
        } catch (err) {
            console.error('Erro ao deletar usuário:', err.response?.data || err.message);
            alert(`Erro ao deletar usuário: ${err.response?.data?.message || err.message}`);
        }
    };

    if (loading) return <div className="app-container">Carregando usuários...</div>;

    return (
        <div className='app-container'>
            <div className="main-content">
                👥 Gerenciar Usuários ({usuarios.length})
            </div>

            <div style={{ padding: '20px' }}>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Tipo</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => {
                            const isUserAdmin = usuario.email === 'diegocostamarques23@icloud.com';
                            return (
                                <tr key={usuario.idUsuario}>
                                    <td>{usuario.idUsuario}</td>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.telefone}</td>
                                    <td>
                                        <span className={`status-badge ${isUserAdmin ? 'tipo-admin' : 'tipo-user'}`}>
                                            {isUserAdmin ? '👑 ADMIN' : '👤 USER'}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`status-badge ${usuario.status === 'Ativo' ? 'status-ativo' : 'status-inativo'}`}>
                                            {usuario.status}
                                        </span>
                                    </td>
                                    <td>
                                        {isAdmin() && !isUserAdmin && (
                                            <button 
                                                onClick={() => deletarUsuario(usuario.idUsuario, usuario.nome)}
                                                className="btn-admin btn-excluir"
                                            >
                                                🗑️ Deletar
                                            </button>
                                        )}
                                        {isUserAdmin && (
                                            <span className="admin-principal">👑 Admin Principal</span>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminUsuarios;
