import { Api } from './';
import { endpoints, http } from './core';

const token = window.localStorage.getItem('token');

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`
};

export const serviceAutenticacao = {
  login: (payload) => {
    return Api(endpoints.users().login, {
      method: http.methods.post,
      headers: headers,
      body: JSON.stringify({
        email: payload.email,
        password: payload.password
      })
    });
  }
};
