import { Api } from './api';
import { endpoints } from './api/endpoints.api';
import { httpMethods } from './api/http.api';

import { removerTimeStamp } from '../utils/formats.utils';

const token = window.localStorage.getItem('token');

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`
};

export const serviceNavers = {
  buscarNavers: async () => {
    try {
      const navers = await Api(endpoints.navers().index, {
        method: httpMethods.get,
        headers: headers
      });

      const traducao = navers.map((naver) => ({
        idNaver: naver.id,
        nomeNaver: naver.name,
        cargoNaver: naver.job_role,
        dataNascimentoNaver: removerTimeStamp(naver.birthdate),
        dataAdmissaoNaver: removerTimeStamp(naver.admission_date),
        projetoNaver: naver.project,
        idUsuarioNaver: naver.user_id,
        urlImagemNaver: naver.url
      }));

      return traducao;
    } catch (error) {
      throw new Error('Não foi possível recuperar os navers.');
    }
  },

  editarNaver: (payload) => {
    return Api(endpoints.navers(payload.id).update, {
      method: httpMethods.update,
      headers: headers,
      body: JSON.stringify({
        job_role: payload.cargo,
        admission_date: payload.dataAdmissao,
        birthdate: payload.dataNascimento,
        name: payload.nome,
        project: payload.projeto,
        url: payload.urlImagem
      })
    });
  },

  criarNaver: (payload) => {
    return Api(endpoints.navers().create, {
      method: httpMethods.post,
      headers: headers,
      body: JSON.stringify({
        job_role: payload.cargo,
        admission_date: payload.dataAdmissao,
        birthdate: payload.dataNascimento,
        name: payload.nome,
        project: payload.projeto,
        url: payload.urlImagem
      })
    });
  },

  excluirNaver: (idNaver) => {
    return Api(endpoints.navers(idNaver).delete, {
      method: httpMethods.delete,
      headers: headers
    });
  }
};
