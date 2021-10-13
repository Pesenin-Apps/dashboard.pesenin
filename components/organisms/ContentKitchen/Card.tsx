import {
  useCallback, useEffect, useState,
} from 'react';
import { QueueTypes } from '../../../services/data-types';
import { getQueues } from '../../../services/kitchen';
import ButtonFinished from './ButtonFinished';
import ButtonProcessed from './ButtonProcessed';

interface CardProps {
  id: string
  name: string;
}

export default function Card(props: CardProps) {
  const { id, name } = props;
  const [queues, setQueues] = useState([]);
  const [countQueue, setCountQueue] = useState(0);
  const [loading, setLoading] = useState(false);
  // const [refresh, setR efresh] = useState(Math.random());
  // const [mounted, setMounted] = useState(true);
  // const [seconds, setSeconds] = useState(0);

  const params = {
    section: id,
  };

  const getQueueList = useCallback(async (value) => {
    const data = await getQueues(value);
    setQueues(data.data.data);
    setCountQueue(data.data.count);
    setLoading(true);
  }, [getQueues]);

  useEffect(() => {
    getQueueList(params);
  }, []);

  // useEffect(() => {
  //   // setMounted(true);
  //   let isMounted = true;
  //   getQueueList(id).then(() => {
  //     setTimeout(() => {
  //       if (isMounted) setRefresh(Math.random());
  //     }, 1000);
  //   });
  //   return () => {
  //     // setMounted(false);
  //     isMounted = false;
  //   };
  // }, [refresh]);

  // useEffect(() => {
  //   let isMounted = true;
  //   const interval = setInterval(() => {
  //     if (isMounted) getQueueList(params);
  //     setSeconds((second) => second + 1);
  //   }, 1000);
  //   return () => {
  //     isMounted = false;
  //     clearInterval(interval);
  //   };
  // }, [seconds]);

  // useEffect(() => {
  //   let isMounted = true;
  //   const interval = setInterval(() => {
  //     if (isMounted) setSeconds((second) => second + 1);
  //   }, 1000);
  //   getQueueList(params);
  //   return () => {
  //     isMounted = false;
  //     clearInterval(interval);
  //   };
  // }, [seconds]);

  return (
    <div className="col-4 ps-15 pe-15 pb-lg-3 pb-4">
      <div className="queue-card h-100">
        <div className="clearfix mb-3">
          <p className="text-xl color-palette-0 fw-medium m-0 float-start">{name}</p>
          <p className="text-sm color-palette-5 fw-medium my-2 float-end">
            {countQueue}
            {' '}
            Antrian
          </p>
        </div>
        {loading ? (queues.length !== 0 ? (
          <table className="table table-borderless">
            <tbody>
              {queues.map((queue: QueueTypes) => (
                <tr key={queue._id} className="align-middle">
                  <td className="menu" width="49%">
                    <p className="fw-medium color-palette-0 m-0">{queue.product.name}</p>
                  </td>
                  <td className="qty">
                    <p className="fw-medium color-palette-0 m-0">{queue.qty}</p>
                  </td>
                  <td className="table_number">
                    <p className="fw-medium color-palette-0 m-0">{queue.order.table.name}</p>
                  </td>
                  <td className="btn-action">
                    {queue.status === 2 ? (
                      <ButtonProcessed id={queue._id} />
                    ) : (
                      <ButtonFinished id={queue._id} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="my-5 text-center">
            <h6 className="text-secondary">Pesanan Belum Ada...</h6>
          </div>
        )) : (
          <div className="text-center my-auto">
            <div className="spinner-border spinner-load" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="text-secondary">Silahkan Tunggu...</p>
          </div>
        )}
      </div>
    </div>
  );
}
