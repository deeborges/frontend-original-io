export const ENV = 'production';
export const HOST = 'localhost';
export const PORT = 3000;

export const ROUTES_DEVELOPMENT = {
  baseUrl: `${HOST}:${PORT}`
};

export const ROUTES_PRODUCTION = {
  baseUrl: ''
};

export const ENVIRONMENT = {
  development: ROUTES_DEVELOPMENT.baseUrl,
  production: ROUTES_PRODUCTION.baseUrl
};