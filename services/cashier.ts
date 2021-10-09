import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const VERSION_API = 'api/v1';

/* ========= START TABLE ========= */

export async function getTableSection() {
  const url = `${ROOT_API}/${VERSION_API}/tables/sections`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function getTableTableSection(id: string) {
  const url = `${ROOT_API}/${VERSION_API}/tables/sections/${id}`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function getTableDetail(id: string) {
  const url = `${ROOT_API}/${VERSION_API}/tables/${id}`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
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

/* ========= END TABLE ========= */

/* ========= START MENU ========= */

export async function getMenus(params: object) {
  const url = `${ROOT_API}/${VERSION_API}/products`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
    params,
  });
}

export async function setMenus(data: FormData) {
  const url = `${ROOT_API}/${VERSION_API}/products`;
  return callAPI({
    url,
    method: 'POST',
    token: true,
    data,
  });
}

export async function getMenu(id: string) {
  const url = `${ROOT_API}/${VERSION_API}/products/${id}`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function updateMenu(data: FormData, id: string) {
  const url = `${ROOT_API}/${VERSION_API}/products/${id}`;
  return callAPI({
    url,
    method: 'PATCH',
    token: true,
    data,
  });
}

export async function deleteMenu(id: string) {
  const url = `${ROOT_API}/${VERSION_API}/products/${id}`;
  return callAPI({
    url,
    method: 'DELETE',
    token: true,
  });
}

// Menu Category
export async function getMenuCategories() {
  const url = `${ROOT_API}/${VERSION_API}/products/categories`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

// Menu Type
export async function getMenuTypes() {
  const url = `${ROOT_API}/${VERSION_API}/products/types`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

/* ========= END MENU ========= */

/* ========= START USER ========= */

export async function getUsers(params: object) {
  const url = `${ROOT_API}/${VERSION_API}/users`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
    params,
  });
}

export async function getUser(id: string, token: string) {
  const url = `${ROOT_API}/${VERSION_API}/users/${id}`;
  return callAPI({
    url,
    method: 'GET',
    serverToken: token,
  });
}

export async function setUser(data: FormData) {
  const url = `${ROOT_API}/${VERSION_API}/users`;
  return callAPI({
    url,
    method: 'POST',
    token: true,
    data,
  });
}

export async function updateUser(data: FormData, id: string) {
  const url = `${ROOT_API}/${VERSION_API}/users/${id}`;
  return callAPI({
    url,
    method: 'PATCH',
    token: true,
    data,
  });
}

export async function deleteUser(id: string) {
  const url = `${ROOT_API}/${VERSION_API}/users/${id}`;
  return callAPI({
    url,
    method: 'DELETE',
    token: true,
  });
}

/* ========= END USER ========= */

/* ========= START ORDERS ========= */

export async function getOrders(params: object, ps: true) {
  const url = `${ROOT_API}/${VERSION_API}/orders`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
    params,
    ps,
  });
}

export async function getOrder(id: string, token: string) {
  const url = `${ROOT_API}/${VERSION_API}/orders/${id}`;
  return callAPI({
    url,
    method: 'GET',
    serverToken: token,
  });
}

/* ========= END ORDERS ========= */
