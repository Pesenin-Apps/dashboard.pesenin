import { useCallback, useEffect, useState } from 'react';
import { getOrders } from '../../../services/cashier';
import { OrderTypes } from '../../../services/data-types';
import Card from './CardItem';

export default function ContentOrder() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const params = {
    period: 'all',
    filters: {
      status: [1, 2, 3],
      is_paid: false,
    },
  };

  const getOrderAPI = useCallback(async (value) => {
    const response = await getOrders(value, true);
    setOrders(response.data.data);
    setLoading(true);
  }, [getOrders]);

  useEffect(() => {
    getOrderAPI(params);
  }, []);

  return (
    <div className="order-lists mb-30">
      <div className="container">
        <div className="row">
          {loading ? (orders.length !== 0 ? orders.map((order: OrderTypes) => (
            <Card key={order._id} data={order} />
          )) : (
            <div className="mt-5 text-center">
              <h6 className="text-secondary">Data Pesanan Belum Ada</h6>
            </div>
          )) : (
            <div className="text-center mt-5">
              <div className="spinner-border spinner-load" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="text-secondary">Silahkan Tunggu...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
