import React from "react";

function Sobre() {
     return (
          <div className='app-container'>
               <div className="main-content">
                    Sobre o InovaVerde
               </div>

               <div className="sobre-section">
                    <h2>Nossa Missão</h2>
                    <p className="sobre-texto">
                         O InovaVerde é um site criado para incentivar pessoas a desenvolverem 
                         ideias sustentáveis e inovadoras que ajudem o planeta e a sociedade. 
                         Acreditamos que qualquer pessoa pode inovar, mesmo com recursos simples, 
                         e que pequenas ações podem causar grandes impactos positivos.
                    </p>
               </div>

               <div className="sobre-section">
                    <h2>Conexão com o ODS 9</h2>
                    <p className="sobre-texto">
                         Nosso projeto está diretamente conectado com o Objetivo de Desenvolvimento 
                         Sustentável nº 9 (Indústria, Inovação e Infraestrutura) porque:
                    </p>
                    <div className="ods-lista">
                         <div className="ods-item">
                              <strong>Promove a inovação</strong> e o pensamento criativo
                         </div>
                         <div className="ods-item">
                              <strong>Incentiva soluções sustentáveis</strong> para problemas reais
                         </div>
                         <div className="ods-item">
                              <strong>Valoriza projetos</strong> que constroem infraestrutura mais limpa e acessível
                         </div>
                    </div>
               </div>

               <div className="sobre-section visao-section">
                    <h2 className="visao-titulo">Nossa Visão</h2>
                    <p className="visao-texto">
                         "A inovação começa quando acreditamos que é possível mudar o mundo 
                         com o que temos nas mãos."
                    </p>
               </div>

               <div className="sobre-section">
                    <h2>Como Participar</h2>
                    <div className="cards-container">
                         <div className="produto-card">
                              <div className="card-icon">Explorar</div>
                              <h3>Explore Projetos</h3>
                              <p>Navegue pela galeria de ideias sustentáveis e inspire-se com projetos de outras pessoas.</p>
                         </div>
                         <div className="produto-card">
                              <div className="card-icon">Enviar</div>
                              <h3>Envie sua Ideia</h3>
                              <p>Compartilhe suas inovações sustentáveis e ajude a construir um futuro melhor.</p>
                         </div>
                         <div className="produto-card">
                              <div className="card-icon">Favoritar</div>
                              <h3>Favorite Projetos</h3>
                              <p>Salve os projetos que mais gostou e acompanhe as inovações que fazem a diferença.</p>
                         </div>
                    </div>
               </div>

               <div className="sobre-section">
                    <h2>Contato</h2>
                    <p className="contato-texto">
                         Quer saber mais sobre o InovaVerde? Entre em contato conosco!
                    </p>
                    <div className="contato-info">
                         <p><strong>Email:</strong> contato@inovaverde.com.br</p>
                         <p><strong>Redes Sociais:</strong> @inovaverde</p>
                    </div>
               </div>
          </div>
     );
}

export default Sobre;
