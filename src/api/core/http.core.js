export const http = {
  methods: {
    get: 'get',
    post: 'post',
    put: 'put',
    delete: 'delete'
  },
  status: {
    404: {
      message: 'Recurso não encontrado.'
    },
    500: {
      message: 'Estamos com um erro estranho. Volte daqui a pouco, tudo bem?'
    }
  }
};
