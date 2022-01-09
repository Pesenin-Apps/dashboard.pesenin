import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { OrderTypes } from '../../../services/data-types';
import CardItem from './CardItem';

const BASE_URL = process.env.NEXT_PUBLIC_API;

const socket = io(`${BASE_URL}`, {
  secure: true,
  transports: [
    'polling',
  ],
});

export default function ContentReservation() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    socket.emit('reservation');
    socket.on('queue', (data: any) => {
      if (isMounted) setReservations(data.data);
    });
    if (isMounted) setLoading(true);
    return () => { // ComponentWillUnmount in Class Component
      isMounted = false;
    };
  }, [reservations]);

  return (
    <div className="order-lists mb-30">
      <div className="container">
        <div className="row">
          {loading ? (reservations.length !== 0 ? reservations.map((order: OrderTypes) => (
            <CardItem key={order._id} data={order} />
          )) : (
            <div className="mt-5 text-center">
              <h6 className="text-secondary">Belum Ada Reservasi</h6>
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
