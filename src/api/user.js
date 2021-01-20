import http from './http';

export async function userInfoApi() {
  return http.get('/users/me');
}

export async function userChangePasswordApi(data) {
  return http.put('/users/me/changePassword', data);
}

export async function userEditProfileApi(data) {
  return http.put('/users/me', data);
}
