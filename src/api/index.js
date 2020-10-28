import { ENV, ENVIRONMENT } from '../../env';
import { http } from './core/http.core';

export const Api = async (endpoint, options) => {
  try {
    const response = await fetch(`${ENVIRONMENT[ENV]}${endpoint}`, options);
    if (http.status[response.status])
      throw new Error(http.status[response.status].message);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
