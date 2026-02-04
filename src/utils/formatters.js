// Formatadores para campos de formulário

// Formatar valor monetário
export const formatCurrency = (value) => {
  if (!value) return '';
  
  const numbers = value.toString().replace(/\D/g, '');
  const amount = parseFloat(numbers) / 100;
  
  return amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};

// Formatar CPF
export const formatCPF = (value) => {
  if (!value) return '';
  
  const numbers = value.replace(/\D/g, '');
  
  return numbers
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

// Formatar CNPJ
export const formatCNPJ = (value) => {
  if (!value) return '';
  
  const numbers = value.replace(/\D/g, '');
  
  return numbers
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

// Formatar telefone
export const formatPhone = (value) => {
  if (!value) return '';
  
  const numbers = value.replace(/\D/g, '');
  
  if (numbers.length <= 10) {
    // telefone fixo
    return numbers
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  } else {
    // celular
    return numbers
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  }
};

// Remover formatação
export const removeCurrencyFormat = (value) => {
  if (!value) return 0;
  return parseFloat(value.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
};

export const removePhoneFormat = (value) => {
  if (!value) return '';
  return value.replace(/\D/g, '');
};

export const removeCPFFormat = (value) => {
  if (!value) return '';
  return value.replace(/\D/g, '');
};