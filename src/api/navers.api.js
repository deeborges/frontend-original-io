import { Api } from './';
import { endpoints, http } from './core';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`
};

export const serviceProduto = {
  buscarProdutos: async () => {
    try {
      const produtos = await Api(endpoints.produto().buscarProdutos, {
        method: http.methods.get,
        headers: headers
      });

      const traducao = produtos.map((produto) => (console.log(produto)));

      return traducao;
    } catch (error) {
      throw new Error('Não foi possível recuperar os produtos.');
    }
  },

  buscarProdutoPeloID: async (id) => {
    try {
      const produto = await Api(endpoints.produto(id).buscarProdutoPeloID, {
        method: http.methods.get,
        headers: headers
      });
      return produto;
    } catch (error) {
      throw new Error(error);
    }
  }
};
