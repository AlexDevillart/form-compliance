const formatCnpj = (cnpj: string): string => {
  // Remove os caracteres especiais
  cnpj = cnpj.replace(/[^\d]+/g, "");

  // Formata o CNPJ
  cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2");
  cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2");
  cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2");

  return cnpj;
};

export default formatCnpj;
