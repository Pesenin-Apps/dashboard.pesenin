import {
  useCallback, // TODO: Rest API Get
  useEffect,
  useState,
} from 'react';
import CardItemAdd from './CardItemAdd';
import CardItemAvailable from './CardItemAvailable';
import { getTableTableSection } from '../../../services/cashier'; // TODO: Rest API Get
import { TableTypes } from '../../../services/data-types';
import ModalCreate from './ModalCreate';

// TODO: Socket.io
// eslint-disable-next-line import/order
// import io from 'socket.io-client';

// const BASE_URL = process.env.NEXT_PUBLIC_API;

// const socket = io(`${BASE_URL}`, {
//   secure: true,
//   transports: [
//     'polling',
//   ],
// });

interface CardProps {
  title: string;
  section: string;
}

export default function Card(props: CardProps) {
  const { title, section } = props;
  const [tableTableSectionList, setTableTableSection] = useState([]);
  const [loading, setLoading] = useState(false);

  // TODO: Socket.io
  // useEffect(() => {
  //   let isMounted = true;
  //   socket.emit('table-section', section);
  //   socket.on(section, (data: any) => {
  //     if (isMounted) setTableTableSection(data.data.tables);
  //   });
  //   if (isMounted) setLoading(true);
  //   return () => { // ComponentWillUnmount in Class Component
  //     isMounted = false;
  //   };
  // }, [tableTableSectionList]);

  // TODO: Rest API Get
  const getTableTableSectionList = useCallback(
    async () => {
      const data = await getTableTableSection(section);
      setTableTableSection(data.data.data.tables);
      setLoading(true);
    },
    [getTableTableSection],
  );

  useEffect(() => {
    getTableTableSectionList();
  }, []);

  return (
    <div className="col-6 ps-15 pe-15 pb-lg-3 pb-4">
      <div className="table-card h-100">
        <p className="text-xl color-palette-0 fw-medium m-0">{title}</p>
        <div className="row d-flex justify-content-start pt-30 pb-20 ps-30 mx-auto">
          {loading ? tableTableSectionList.map((item: TableTypes) => (
            <CardItemAvailable
              key={item._id}
              id={item._id}
              tableNumber={item.number}
              status={item.status}
            />
          )) : (
            <div className="text-center my-auto">
              <div className="spinner-border spinner-load" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="text-secondary">Silahkan Tunggu...</p>
            </div>
          )}
          {loading && (
            <>
              <CardItemAdd section={section} />
              <ModalCreate section={section} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
