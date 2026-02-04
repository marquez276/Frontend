import React, { useState } from "react";
import api from "../../services/api";
import { useAuth } from '../../context/AuthContext';

function EnviarIdeia() {
     const { isAuthenticated, user } = useAuth();
     const [formData, setFormData] = useState({
          nome: '',
          descricao: '',
          categoria: 'Energia',
          cidade: '',
          bairro: '',
          imagem: ''
     });

     const handleChange = (e) => {
          setFormData({
               ...formData,
               [e.target.name]: e.target.value
          });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          
          if (!isAuthenticated) {
               alert('Faça login para enviar sua ideia!');
               return;
          }

          const projetoData = {
               nome: formData.nome,
               descricao: formData.descricao,
               categoria: formData.categoria,
               cidade: formData.cidade,
               regiao: formData.bairro || '',
               imagem: formData.imagem || '',
               nomeCriador: user?.nome || 'Anônimo',
               contato: user?.email || ''
          };

          try {
               console.log('Enviando dados:', projetoData);
               const response = await api.post('/projetos', projetoData);
               console.log('Resposta:', response);
               alert('Ideia enviada com sucesso!');
               setFormData({
                    nome: '',
                    descricao: '',
                    categoria: 'Energia',
                    cidade: '',
                    bairro: '',
                    imagem: ''
               });
          } catch (err) {
               console.error('Erro completo:', err);
               console.error('Resposta do erro:', err.response?.data);
               const errorMsg = err.response?.data?.message || err.response?.status || err.message;
               alert(`Erro: ${errorMsg}`);
          }
     };

     return (
          <div className='app-container'>
               <div className="main-content">
                    💡 Envie sua Ideia Sustentável
               </div>

               <div className="sobre-section">
                    <h2>Compartilhe sua inovação!</h2>
                    <p>
                         Tem uma ideia que pode ajudar o planeta? Compartilhe conosco! 
                         Valorizamos projetos que promovem sustentabilidade e inovação.
                    </p>
               </div>

               <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div className="form-group">
                         <label>Nome do Projeto *</label>
                         <input 
                              type="text" 
                              name="nome"
                              value={formData.nome}
                              onChange={handleChange}
                              required
                              placeholder="Ex: Lâmpadas de energia solar caseira"
                         />
                    </div>

                    <div className="form-group">
                         <label>Descrição *</label>
                         <textarea 
                              name="descricao"
                              value={formData.descricao}
                              onChange={handleChange}
                              required
                              rows="5"
                              placeholder="Descreva sua ideia sustentável..."
                         />
                    </div>

                    <div className="form-group">
                         <label>Categoria *</label>
                         <select 
                              name="categoria"
                              value={formData.categoria}
                              onChange={handleChange}
                              required
                         >
                              <option value="Energia">Energia</option>
                              <option value="Reciclagem">Reciclagem</option>
                              <option value="Educação">Educação</option>
                              <option value="Infraestrutura">Infraestrutura</option>
                              <option value="Água">Água</option>
                              <option value="Agricultura">Agricultura</option>
                         </select>
                    </div>

                    <div className="form-group">
                         <label>Cidade *</label>
                         <input 
                              type="text" 
                              name="cidade"
                              value={formData.cidade}
                              onChange={handleChange}
                              required
                              placeholder="Sua cidade"
                         />
                    </div>

                    <div className="form-group">
                         <label>Região/Bairro</label>
                         <input 
                              type="text" 
                              name="bairro"
                              value={formData.bairro}
                              onChange={handleChange}
                              placeholder="Região onde o projeto será aplicado"
                         />
                    </div>

                    <div className="form-group">
                         <label>Imagem do Projeto</label>
                         <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                   const file = e.target.files[0];
                                   if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                             setFormData({ ...formData, imagem: reader.result });
                                        };
                                        reader.readAsDataURL(file);
                                   }
                              }}
                         />
                    </div>

                    <button type="submit" className="btn" style={{ width: '100%', padding: '15px', fontSize: '18px' }}>
                         🚀 Enviar Ideia
                    </button>
               </form>
          </div>
     );
}

export default EnviarIdeia;
