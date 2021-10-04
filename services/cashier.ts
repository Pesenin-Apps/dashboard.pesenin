import axios from 'axios';
import callAPI from '../config/api';
import { TableTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const VERSION_API = 'api/v1';

export async function getTableSection() {
  const url = await axios.get(
    // eslint-disable-next-line comma-dangle
    `${ROOT_API}/${VERSION_API}/tables/sections`
  );
  const axiosResponse = url.data;
  return axiosResponse.tableSections;
}

export async function getTableTableSection(id: string) {
  const url = await axios.get(
    // eslint-disable-next-line comma-dangle
    `${ROOT_API}/${VERSION_API}/tables/sections/${id}`
  );
  const axiosResponse = url.data;
  return axiosResponse.tableSection.tables;
}

export async function getTableDetail(id: string) {
  const url = await axios.get(
    // eslint-disable-next-line comma-dangle
    `${ROOT_API}/${VERSION_API}/tables/${id}`
  );
  const axiosResponse = url.data;
  return axiosResponse.table;
}

export async function setTable(data: FormData) {
  const url = `${ROOT_API}/${VERSION_API}/tables`;
  return callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
}

export async function deleteTable(id: string) {
  const url = `${ROOT_API}/${VERSION_API}/tables/${id}`;
  return callAPI({
    url,
    method: 'DELETE',
    token: true,
  });
}

export async function getMenus() {
  return null;
}
