import { useCallback, useEffect, useState } from 'react';
import convertDate from '../../../config/convertdate';
import { getOrders } from '../../../services/cashier';
import { OrderTypes } from '../../../services/data-types';
import Card from './CardItem';
import ModalDetail from './ModalDetail';

export default function ContentOrder() {
  const [orders, setOrders] = useState([]);

  const params = {
    period: 'all',
    filters: {
      status: [2, 3],
    },
  };

  const getOrderAPI = useCallback(async (value) => {
    const response = await getOrders(value, true);
    setOrders(response.data.data);
  }, [getOrders]);

  useEffect(() => {
    getOrderAPI(params);
  }, []);

  return (
    <div className="order-lists mb-30">

      <div className="container">
        <div className="row">

          {orders.map((order: OrderTypes) => (
            <Card key={order._id} time={convertDate(order.createdAt, 'dt')} orderNumber={order.order_number} tableSection={order.table.section.name} tableNumber={order.table.number.toString()} customerName={order.customer == null ? '-' : order.customer.name} paymentAmount={order.total_overall} status={order.status === 2 ? 'Sedang Diproses' : 'Menunggu Pembayaran'} />
          ))}

        </div>
      </div>

      <ModalDetail />

    </div>
  );
}
