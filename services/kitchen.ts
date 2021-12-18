import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const VERSION_API = 'v1';

export async function getQueues(params: object) {
  const url = `${ROOT_API}/${VERSION_API}/queues`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
    params,
  });
}

export async function updateOrderItem(id: string, data: FormData) {
  const url = `${ROOT_API}/${VERSION_API}/orders/items/${id}`;
  return callAPI({
    url,
    method: 'PATCH',
    token: true,
    data,
  });
}
