const domain = '/';

export const endpoints = {
  baseWithParams: (params) => {
    return {
      action: `${domain}`,
    };
  },
  baseNotParams: (params) => {
    return {
      index: `${domain}`,
      show: `${domain}/${params}`,
      delete: `${domain}/${params}`,
      create: `${domain}`,
      update: `${domain}/${params}`,
    };
  },
};
