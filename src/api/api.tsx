const api: string = import.meta.env.VITE_APP_API!;

export const APIS = {
  AUTH: {
    login: `${api}/auth/signin`,
    register: `${api}/auth/signup`,
  },
  PROSPECT: `${api}/prospect`,
  DASHBOARD: `${api}/dashboard`,
};
