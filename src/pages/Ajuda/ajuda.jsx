import api from "../../services/api";

function Ajuda() {
    return (
        <div className="ajuda-container">
            <div className="ajuda-header">
                <h1>Central de Ajuda</h1>
                <p>Tudo que você precisa saber sobre o InovaVerde</p>
            </div>

            <div className="ajuda-content">
                <div className="ajuda-section">
                    <h2>🌱 Como usar o InovaVerde</h2>
                    <div className="ajuda-card">
                        <h3>1. Explorando Projetos</h3>
                        <p>• Acesse a página <strong>Projetos</strong> para ver ideias sustentáveis</p>
                        <p>• Veja fotos, descrições e categorias dos projetos</p>
                        <p>• Informações do criador estão disponíveis</p>
                    </div>
                    
                    <div className="ajuda-card">
                        <h3>2. Enviando sua Ideia</h3>
                        <p>• Vá para <strong>Enviar Ideia</strong></p>
                        <p>• Preencha: nome do projeto, descrição, categoria</p>
                        <p>• Adicione localização e imagem (opcional)</p>
                        <p>• <strong>Necessário fazer login</strong> para enviar</p>
                    </div>

                    <div className="ajuda-card">
                        <h3>3. Favoritando Projetos</h3>
                        <p>• Clique em ⭐ Favoritar nos projetos que gostar</p>
                        <p>• Acesse <strong>Favoritos</strong> para ver seus projetos salvos</p>
                        <p>• Remova favoritos quando quiser</p>
                    </div>

                    <div className="ajuda-card">
                        <h3>4. Aprendendo com Dicas</h3>
                        <p>• Visite <strong>Dicas</strong> para conteúdo educativo</p>
                        <p>• Aprenda a criar projetos sustentáveis</p>
                        <p>• Inspire-se com exemplos reais</p>
                    </div>
                </div>

                <div className="ajuda-section">
                    <h2>🎯 Sobre o ODS 9</h2>
                    <div className="ajuda-card">
                        <h3>O que é o ODS 9?</h3>
                        <p>• Objetivo de Desenvolvimento Sustentável nº 9</p>
                        <p>• Foco em <strong>Indústria, Inovação e Infraestrutura</strong></p>
                        <p>• Promove infraestrutura resiliente e sustentável</p>
                        <p>• Incentiva inovação inclusiva e acessível</p>
                    </div>

                    <div className="ajuda-card">
                        <h3>Como o InovaVerde contribui?</h3>
                        <p>• Promove o pensamento criativo e inovador</p>
                        <p>• Incentiva soluções sustentáveis para problemas reais</p>
                        <p>• Valoriza projetos de infraestrutura limpa</p>
                        <p>• Democratiza o acesso à inovação</p>
                    </div>
                </div>

                <div className="ajuda-section">
                    <h2>💡 Categorias de Projetos</h2>
                    <div className="ajuda-card">
                        <h3>Energia</h3>
                        <p>• Painéis solares caseiros</p>
                        <p>• Turbinas eólicas DIY</p>
                        <p>• Biodigestores</p>
                        <p>• Sistemas de energia renovável</p>
                    </div>

                    <div className="ajuda-card">
                        <h3>Reciclagem</h3>
                        <p>• Tijolos de plástico reciclado</p>
                        <p>• Compostagem doméstica</p>
                        <p>• Reutilização de materiais</p>
                        <p>• Economia circular</p>
                    </div>

                    <div className="ajuda-card">
                        <h3>Água</h3>
                        <p>• Captação de água da chuva</p>
                        <p>• Filtros caseiros</p>
                        <p>• Sistemas de reuso</p>
                        <p>• Irrigação sustentável</p>
                    </div>

                    <div className="ajuda-card">
                        <h3>Infraestrutura</h3>
                        <p>• Construções sustentáveis</p>
                        <p>• Materiais ecológicos</p>
                        <p>• Soluções de mobilidade</p>
                        <p>• Espaços comunitários</p>
                    </div>
                </div>

                <div className="ajuda-section">
                    <h2>🌍 Dicas para Inovar</h2>
                    <div className="ajuda-card">
                        <h3>Comece Pequeno</h3>
                        <p>• Identifique um problema local</p>
                        <p>• Use recursos disponíveis</p>
                        <p>• Teste sua ideia antes de expandir</p>
                        <p>• Aprenda com os erros</p>
                    </div>

                    <div className="ajuda-card">
                        <h3>Seja Sustentável</h3>
                        <p>• Priorize materiais recicláveis</p>
                        <p>• Pense no impacto ambiental</p>
                        <p>• Busque soluções de baixo custo</p>
                        <p>• Torne seu projeto replicável</p>
                    </div>

                    <div className="ajuda-card">
                        <h3>Compartilhe Conhecimento</h3>
                        <p>• Documente seu processo</p>
                        <p>• Ensine outras pessoas</p>
                        <p>• Colabore com a comunidade</p>
                        <p>• Inspire novos inovadores</p>
                    </div>
                </div>

                <div className="ajuda-section">
                    <h2>📞 Precisa de mais ajuda?</h2>
                    <div className="ajuda-card contato-card">
                        <h3>Suporte InovaVerde</h3>
                        <p>📧 <strong>Email:</strong> contato@inovaverde.com.br</p>
                        <p>📱 <strong>Redes Sociais:</strong> @inovaverde</p>
                        <p>🕒 <strong>Horário:</strong> Segunda a Sexta, 8h às 18h</p>
                        <p>💚 <strong>Missão:</strong> Transformar ideias em soluções sustentáveis</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ajuda
