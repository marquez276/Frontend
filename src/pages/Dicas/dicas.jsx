import React from "react";

function Dicas() {
     const dicas = [
          {
               titulo: "Como criar um projeto sustentável do zero",
               conteudo: "Identifique um problema real na sua comunidade. Pesquise soluções simples e acessíveis. Comece pequeno e teste sua ideia antes de expandir.",
               categoria: "Iniciante"
          },
          {
               titulo: "5 invenções simples que mudaram comunidades",
               conteudo: "Filtros de água caseiros, hortas comunitárias, compostagem doméstica, captação de água da chuva e painéis solares DIY são exemplos de inovações acessíveis.",
               categoria: "Exemplos"
          },
          {
               titulo: "O que é o ODS 9 e por que ele importa",
               conteudo: "O ODS 9 promove Indústria, Inovação e Infraestrutura resiliente. Ele busca construir infraestruturas sustentáveis e promover a inovação inclusiva.",
               categoria: "Conceitos"
          },
          {
               titulo: "Materiais recicláveis para seus projetos",
               conteudo: "Garrafas PET, papelão, madeira de paletes, pneus velhos e latas podem ser transformados em projetos incríveis de baixo custo.",
               categoria: "Materiais"
          },
          {
               titulo: "Como apresentar sua ideia",
               conteudo: "Seja claro e objetivo. Use imagens ou desenhos. Explique o problema, sua solução e o impacto esperado. Mostre que é viável e replicável.",
               categoria: "Apresentação"
          },
          {
               titulo: "Fontes de energia renovável acessíveis",
               conteudo: "Energia solar, eólica caseira, biodigestores e pequenas turbinas hidrelétricas são opções sustentáveis que podem ser adaptadas para diferentes realidades.",
               categoria: "Energia"
          }
     ];

     return (
          <div className='app-container'>
               <div className="main-content">
                    Dicas e Inspirações
               </div>

               <div className="sobre-section">
                    <h2>Aprenda a inovar de forma sustentável</h2>
                    <p>
                         Confira dicas práticas, curiosidades e inspirações para criar 
                         projetos que fazem a diferença no mundo.
                    </p>
               </div>

               <div className="cards-container">
                    {dicas.map((dica, index) => (
                         <div key={index} className="produto-card">
                              <div className="dica-categoria">
                                   {dica.categoria}
                              </div>
                              <h3>{dica.titulo}</h3>
                              <p className="dica-conteudo">
                                   {dica.conteudo}
                              </p>
                         </div>
                    ))}
               </div>

               <div className="sobre-section dicas-lembrete">
                    <h2 className="lembrete-titulo">Lembre-se</h2>
                    <p className="lembrete-texto">
                         "A inovação começa quando acreditamos que é possível mudar o mundo com o que temos nas mãos."
                    </p>
               </div>
          </div>
     );
}

export default Dicas;
