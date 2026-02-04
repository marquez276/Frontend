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
                console.log("Erro ao buscar usuários", err);
                setLoading(false);
            });
    };

    const deletarUsuario = async (id, nome) => {
        if (!isAdmin()) {
            alert('Apenas administradores podem deletar');
            return;
        }

        // confirmação antes de deletar
        if (!confirm(`Deletar ${nome}?`)) {
            return;
        }

        try {
            await api.delete(`/usuarios/${id}`);
            alert('Deletado!');
            carregarUsuarios(); // recarrega a lista
        } catch (err) {
            console.log('Erro:', err);
            alert('Erro ao deletar');
        }
    };

    if (loading) return <div className="app-container">Carregando...</div>;

    return (
        <div className='app-container'>
            <div className="main-content">
                Gerenciar Usuários ({usuarios.length})
            </div>

            <div className="admin-container">
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
                            const isAdminUser = usuario.email === 'diegocostamarques23@icloud.com';
                            return (
                                <tr key={usuario.idUsuario}>
                                    <td>{usuario.idUsuario}</td>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.telefone}</td>
                                    <td>
                                        <span className={`status-badge ${isAdminUser ? 'tipo-admin' : 'tipo-user'}`}>
                                            {isAdminUser ? 'ADMIN' : 'USER'}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`status-badge ${usuario.status === 'Ativo' ? 'status-ativo' : 'status-inativo'}`}>
                                            {usuario.status}
                                        </span>
                                    </td>
                                    <td>
                                        {isAdmin() && !isAdminUser && (
                                            <button 
                                                onClick={() => deletarUsuario(usuario.idUsuario, usuario.nome)}
                                                className="btn-admin btn-excluir"
                                            >
                                                Deletar
                                            </button>
                                        )}
                                        {isAdminUser && (
                                            <span className="admin-principal">Admin Principal</span>
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
