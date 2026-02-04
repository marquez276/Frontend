import api from "../../services/api";
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function Projetos() {
     const [projetos, setProjetos] = useState([]);
     const { isAuthenticated, user } = useAuth();
     const navigate = useNavigate();

     useEffect(() => {
          api.get("/projetos")
               .then((response) => {
                    setProjetos(response.data);
               })
               .catch(err => console.error("Erro ao buscar projetos", err));
     }, []);

     const adicionarFavorito = async (projeto) => {
          if (!isAuthenticated) {
               alert('Faça login para favoritar projetos!');
               return;
          }

          const userId = user?.idUsuario || user?.id || 1;
          
          const favoritoData = {
               idUsuario: userId,
               idProjeto: projeto.idProjeto,
               nomeProjeto: projeto.nome,
               categoriaProjeto: projeto.categoria,
               cidadeProjeto: projeto.cidade,
               imagemProjeto: projeto.imagem || ''
          };

          try {
               console.log('User:', user);
               console.log('Enviando favorito:', favoritoData);
               await api.post('/favoritos', favoritoData);
               alert('Projeto adicionado aos favoritos!');
          } catch (err) {
               console.error('Erro ao adicionar favorito:', err);
               console.error('Resposta:', err.response?.data);
               const errorMsg = err.response?.data?.message || err.response?.data || err.message;
               alert(`Erro ao adicionar favorito: ${errorMsg}`);
          }
     };

     return (
          <div className='app-container'>
               <div className="main-content">
                    🌱 Galeria de Projetos Sustentáveis
               </div>

               <div className="cards-container">
                    {projetos.map((projeto) => (
                         <div key={projeto.idMovel} className="produto-card">
                              {projeto.imagem && (
                                   <img src={projeto.imagem} alt={projeto.nome} className="produto-imagem" />
                              )}
                              <h3>{projeto.nome}</h3>
                              <span className="categoria-badge">{projeto.tipoNegocio || 'Inovação'}</span>
                              <p><strong>📍 Local:</strong> {projeto.cidade}</p>
                              <p>{projeto.descricao}</p>
                              <p><strong>👤 Criador:</strong> {projeto.nomeProprietario}</p>
                              <div className="acoes-imovel">
                                   <button 
                                        className="btn-favoritar"
                                        onClick={() => adicionarFavorito(projeto)}
                                   >
                                        ⭐ Favoritar
                                   </button>
                                   <button 
                                        className="btn-detalhes"
                                        onClick={() => navigate(`/projetos/${projeto.idProjeto}`)}
                                   >
                                        🔍 Ver Detalhes
                                   </button>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
}

export default Projetos;
