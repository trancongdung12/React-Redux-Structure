import http from './http';

export async function userRegisterApi(data) {
  return http.post('/auth/register', data);
}

export async function userLoginApi(data) {
  return http.post('/auth/login', data);
}
