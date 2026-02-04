import React from "react";

function Dicas() {
     const dicas = [
          {
               titulo: "Como criar um projeto sustentável do zero",
               conteudo: "Identifique um problema real na sua comunidade. Pesquise soluções simples e acessíveis. Comece pequeno e teste sua ideia antes de expandir.",
               icone: "🌱"
          },
          {
               titulo: "5 invenções simples que mudaram comunidades",
               conteudo: "Filtros de água caseiros, hortas comunitárias, compostagem doméstica, captação de água da chuva e painéis solares DIY são exemplos de inovações acessíveis.",
               icone: "💡"
          },
          {
               titulo: "O que é o ODS 9 e por que ele importa",
               conteudo: "O ODS 9 promove Indústria, Inovação e Infraestrutura resiliente. Ele busca construir infraestruturas sustentáveis e promover a inovação inclusiva.",
               icone: "🎯"
          },
          {
               titulo: "Materiais recicláveis para seus projetos",
               conteudo: "Garrafas PET, papelão, madeira de paletes, pneus velhos e latas podem ser transformados em projetos incríveis de baixo custo.",
               icone: "♻️"
          },
          {
               titulo: "Como apresentar sua ideia",
               conteudo: "Seja claro e objetivo. Use imagens ou desenhos. Explique o problema, sua solução e o impacto esperado. Mostre que é viável e replicável.",
               icone: "📊"
          },
          {
               titulo: "Fontes de energia renovável acessíveis",
               conteudo: "Energia solar, eólica caseira, biodigestores e pequenas turbinas hidrelétricas são opções sustentáveis que podem ser adaptadas para diferentes realidades.",
               icone: "⚡"
          }
     ];

     return (
          <div className='app-container'>
               <div className="main-content">
                    📚 Dicas e Inspirações
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
                              <div style={{ fontSize: '48px', textAlign: 'center', marginBottom: '15px' }}>
                                   {dica.icone}
                              </div>
                              <h3>{dica.titulo}</h3>
                              <p style={{ lineHeight: '1.8', fontSize: '16px' }}>
                                   {dica.conteudo}
                              </p>
                         </div>
                    ))}
               </div>

               <div className="sobre-section" style={{ marginTop: '40px', background: 'linear-gradient(135deg, #7FC25E 0%, #5fa845 100%)', color: '#ffffff' }}>
                    <h2 style={{ color: '#ffffff' }}>💭 Lembre-se</h2>
                    <p style={{ color: '#ffffff', fontSize: '20px', fontWeight: '600' }}>
                         "A inovação começa quando acreditamos que é possível mudar o mundo com o que temos nas mãos."
                    </p>
               </div>
          </div>
     );
}

export default Dicas;
