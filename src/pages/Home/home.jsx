import api from "../../services/api";
import { useAuth } from '../../context/AuthContext';
import React, { useState, useEffect } from "react";

function Home() {

     const [projetos, setProjetos] = useState([])
     const { isAuthenticated, user } = useAuth()

     useEffect(() => {
          // busca os projetos da API
          api.get("/projetos")
               .then((response) => {
                    setProjetos(response.data)
               })
               .catch(err => console.log("Erro ao buscar projetos", err))
     }, []);

     const adicionarFavorito = async (projeto) => {
          if (!isAuthenticated || !user?.idUsuario) {
               alert('Precisa fazer login primeiro!')
               return
          }

          const dadosFavorito = {
               idUsuario: user.idUsuario,
               idProjeto: projeto.idProjeto,
               dataAdicao: new Date().toISOString().split('T')[0],
               nomeProjeto: projeto.nome,
               categoriaProjeto: projeto.categoria,
               cidadeProjeto: projeto.cidade,
               imagemProjeto: projeto.imagem
          }

          try {
               await api.post('/favoritos', dadosFavorito)
               alert('Projeto favoritado!')
          } catch (err) {
               console.log('Erro ao favoritar', err)
               alert('Erro ao favoritar')
          }
     }

     return (
          <div className='app-container'>
               
               <div className="banner-home">
                    <h1>Transforme ideias simples em soluções incríveis</h1>
                    <p>O InovaVerde incentiva pessoas a desenvolverem ideias sustentáveis que ajudem o planeta e a sociedade</p>
                    <div className="banner-actions">
                         <a href="/projetos" className="btn-primary">Descubra Projetos</a>
                         <a href="/enviar-ideia" className="btn-secondary">Envie sua Ideia</a>
                    </div>
               </div>

               <div className="sobre-section">
                    <h2>Conectado ao ODS 9</h2>
                    <p>
                         Nosso site promove Indústria, Inovação e Infraestrutura sustentável. 
                         Acreditamos que pequenas ações podem causar grandes impactos positivos no mundo.
                    </p>
               </div>

               <div className="main-content">
                    Projetos em Destaque
               </div>

               <div className="cards-container">
                    {projetos.map((projeto) => (
                         <div key={projeto.idProjeto} className="produto-card">
                              {projeto.imagem && (
                                   <img src={projeto.imagem} alt={projeto.nome} className="produto-imagem" />
                              )}
                              <h3>{projeto.nome}</h3>
                              <span className="categoria-badge">{projeto.categoria || 'Sustentabilidade'}</span>
                              <p><strong>Local:</strong> {projeto.cidade}</p>
                              <p>{projeto.descricao}</p>
                              <p><strong>Criador:</strong> {projeto.nomeCriador}</p>
                              <div className="acoes-imovel">
                                   <button 
                                        className="btn-favoritar"
                                        onClick={() => adicionarFavorito(projeto)}
                                   >
                                        Favoritar
                                   </button>
                                   <button 
                                        className="btn-detalhes"
                                        onClick={() => window.location.href = `/projetos/${projeto.idProjeto}`}
                                   >
                                        Saiba mais
                                   </button>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
}
export default Home;