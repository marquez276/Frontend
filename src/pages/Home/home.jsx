import api from "../../services/api";
import { useAuth } from '../../context/AuthContext';
import React, { useState, useEffect } from "react";

function Home() {

     const [vimoveis, setImoveis] = useState([])
     const { isAuthenticated, user } = useAuth()

     useEffect(() => {
          api.get("/projetos")
               .then((response) => {
                    setImoveis(response.data)
               })
               .catch(err => console.error("Erro ao buscar projetos", err))
     }, []);

     const adicionarFavorito = async (imovel) => {
          if (!isAuthenticated || !user?.idUsuario) {
               alert('Faça login para adicionar favoritos!')
               return
          }

          const favoritoData = {
               idUsuario: user.idUsuario,
               idProjeto: imovel.idProjeto,
               dataAdicao: new Date().toISOString().split('T')[0],
               nomeProjeto: imovel.nome,
               categoriaProjeto: imovel.categoria,
               cidadeProjeto: imovel.cidade,
               imagemProjeto: imovel.imagem
          }

          try {
               await api.post('/favoritos', favoritoData)
               alert('Imóvel adicionado aos favoritos!')
          } catch (err) {
               console.error('Erro ao adicionar favorito', err)
               alert('Erro ao adicionar favorito')
          }
     }




     return (
          <div className='app-container'>
               
               <div className="banner-home">
                    <h1>🌿 Transforme ideias simples em soluções incríveis</h1>
                    <p>O InovaVerde incentiva pessoas a desenvolverem ideias sustentáveis que ajudem o planeta e a sociedade</p>
                    <div className="banner-actions">
                         <a href="/projetos" className="btn-primary">Descubra Projetos</a>
                         <a href="/enviar-ideia" className="btn-secondary">Envie sua Ideia</a>
                    </div>
               </div>

               <div className="sobre-section">
                    <h2>🎯 Conectado ao ODS 9</h2>
                    <p>
                         Nosso site promove Indústria, Inovação e Infraestrutura sustentável. 
                         Acreditamos que pequenas ações podem causar grandes impactos positivos no mundo.
                    </p>
               </div>

               <div className="main-content">
                    🌱 Projetos em Destaque
               </div>

               <div className="cards-container">
                    {vimoveis.map((imovel) => (
                         <div key={imovel.idMovel} className="produto-card">
                              {imovel.imagem && (
                                   <img src={imovel.imagem} alt={imovel.nome} className="produto-imagem" />
                              )}
                              <h3>{imovel.nome}</h3>
                              <span className="categoria-badge">{imovel.tipoNegocio || 'Sustentabilidade'}</span>
                              <p><strong>Local:</strong> {imovel.cidade} - {imovel.bairro}</p>
                              <p>{imovel.descricao}</p>
                              <p><strong>Criador:</strong> {imovel.nomeProprietario}</p>
                              <div className="acoes-imovel">
                                   <button 
                                        className="btn-favoritar"
                                        onClick={() => adicionarFavorito(imovel)}
                                   >
                                        ⭐ Favoritar
                                   </button>
                                   <button 
                                        className="btn-detalhes"
                                        onClick={() => window.location.href = `/projetos/${imovel.idProjeto}`}
                                   >
                                        🔍 Saiba mais
                                   </button>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
}
export default Home;