import { useCallback, useEffect, useState } from 'react';
import CardItemAdd from './CardItemAdd';
import CardItemAvailable from './CardItemAvailable';
import { getTableTableSection } from '../../../services/cashier';
import { TableTypes } from '../../../services/data-types';
import ModalCreate from './ModalCreate';

interface CardProps {
  title: string;
  section: string;
}

export default function Card(props: CardProps) {
  const { title, section } = props;
  const [tableTableSectionList, setTableTableSection] = useState([]);
  const [loading, setLoading] = useState(false);

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
