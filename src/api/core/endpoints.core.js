// recurso
const resource = '/produto';

export const endpoints = {
  // contexto
  produto: (params) => {
    // acoes
    return {
      buscarProdutos: `${resource}`,
      buscarProdutoPeloID: `${resource}/${id}`,
    };
  },
};
