import axios from 'axios';
import { signInTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const VERSION_API = 'api/v1';

export async function signUp() {
  return null;
}

export async function signIn(data: signInTypes) {
  const response = await axios
    .post(`${ROOT_API}/${VERSION_API}/auth/signin`, data)
    .catch((error) => error.response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  const res = {
    error: false,
    message: 'success',
    data: response.data,
  };

  return res;
}
