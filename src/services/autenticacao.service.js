import { Api } from './api';
import { endpoints } from './api/endpoints.api';
import { httpMethods } from './api/http.api';

const token = window.localStorage.getItem('token');

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`
};

export const serviceAutenticacao = {
  login: (payload) => {
    return Api(endpoints.users().login, {
      method: httpMethods.post,
      headers: headers,
      body: JSON.stringify({
        email: payload.email,
        password: payload.password
      })
    });
  }
};
