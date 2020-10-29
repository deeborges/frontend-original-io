// recurso
const resource = '/produto';

export const endpoints = {
  // contexto
  produto: (id) => {
    // acoes
    return {
      buscarProdutos: `${resource}`,
      buscarProdutoPeloID: `${resource}/${id}`,
    };
  },
};
