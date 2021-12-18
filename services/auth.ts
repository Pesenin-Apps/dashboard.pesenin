import callAPI from '../config/api';
import { signInTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const VERSION_API = 'v1';

export async function signUp() {
  return null;
}

export async function signIn(data: signInTypes) {
  const url = `${ROOT_API}/${VERSION_API}/auth/signin`;
  return callAPI({
    url,
    method: 'POST',
    data,
  });
}

export async function signOut() {
  const url = `${ROOT_API}/${VERSION_API}/auth/signout`;
  return callAPI({
    url,
    method: 'POST',
    token: true,
  });
}
