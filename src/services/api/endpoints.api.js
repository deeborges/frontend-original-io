const domainNavers = '/navers';
const domainUsers = '/users';

export const endpoints = {
  navers: (id) => {
    return {
      index: `${domainNavers}`,
      show: `${domainNavers}/${id}`,
      delete: `${domainNavers}/${id}`,
      create: `${domainNavers}`,
      update: `${domainNavers}/${id}`
    };
  },
  users: () => {
    return {
      signup: `${domainUsers}/signup`,
      login: `${domainUsers}/login`
    };
  }
};
