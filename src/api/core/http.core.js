export const http = {
  methods: {
    get: 'get',
    post: 'post',
    update: 'put',
    delete: 'delete'
  },
  status: {
    400: {
      message: 'Alguns parâmetros estão inválidos.'
    },
    401: {
      message: 'Você não tem permissão para acessar o conteúdo.'
    },
    404: {
      message: 'Existe algum erro no path de sua requisição.'
    },
    500: {
      message: 'Houver um erro interno'
    }
  }
};
