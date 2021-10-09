import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import qs from 'qs';

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean;
  serverToken?: string;
  params?: object;
  ps?: boolean;
}

export default async function callAPI({
  url,
  method,
  data,
  token,
  serverToken,
  params,
  ps,
}: CallAPIProps) {
  let headers = {};
  let paramsSerializer;

  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
      Accept: 'application/json',
    };
  } else if (token) {
    const tokenCookies = Cookies.get('token');
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
        Accept: 'application/json',
      };
    }
  }

  const psFunc = (paramsQuery: any) => qs.stringify(paramsQuery);

  if (ps) {
    paramsSerializer = psFunc;
  }

  const response = await axios({
    url,
    method,
    data,
    headers,
    params,
    paramsSerializer,
  }).catch((error) => error.response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  // const { length } = Object.keys(response.data);

  const res = {
    error: false,
    message: 'success',
    data: response.data,
    // data: length > 1 ? response.data : response.data.data,
  };

  return res;
}
